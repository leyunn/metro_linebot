const axios = require('axios')
const jsSHA = require('jssha');
const flex_msg = require('./flexMessage')

// const getAllLines = async ()=>{
//     const response = await axios.get('https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/Line/TRTC?$top=30&$format=JSON', {
// 	    headers: getAuthorizationHeader(),
//     })
//     return response.data.map(line=>{return {id:line.LineID, name: {tw:line.LineName.Zh_tw, en:line.LineName.En}, color:line.LineColor}});
// }
const LINES = [{"id":"BL","name":{"tw":"板南線","en":"Bannan Line"},"color":"#0a59ae", "start":'頂埔', 'end':'南港展覽館','prio':2},{"id":"BR","name":{"tw":"文湖線","en":"Wenhu Line"},"color":"#b57a25","start":'動物園','end':'南港展覽館','prio':3},{"id":"G","name":{"tw":"松山新店線","en":"Songshan-Xindian Line"},"color":"#107547", "start":'新店','end':'松山','prio':6},{"id":"O","name":{"tw":"中和新蘆線","en":"Zhonghe-Xinlu Line"},"color":"#f5a818", "start":'南勢角','end':'迴龍蘆洲','prio':4},{"id":"R","name":{"tw":"淡水信義線","en":"Tamsui-Xinyi Line"},"color":"#d90023", "start":'象山','end':'淡水','prio':5},{"id":"Y","name":{"tw":"環狀線","en":"Circular Line"},"color":"#fedb00", "start":'大坪林','end':'新北產業園區','prio':1}]


const getAuthorizationHeader = function() {
	var AppID = process.env.APP_ID;
	var AppKey = process.env.APP_KEY;

	var GMTString = new Date().toGMTString();
	var ShaObj = new jsSHA('SHA-1', 'TEXT');
	ShaObj.setHMACKey(AppKey, 'TEXT');
	ShaObj.update('x-date: ' + GMTString);
	var HMAC = ShaObj.getHMAC('B64');
	var Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
	return { 'Authorization': Authorization, 'X-Date': GMTString};
}


const getDirections = async (station_name)=>{
    const response = await axios.get(`https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/FirstLastTimetable/TRTC?$select=TripHeadSign%2C%20FirstTrainTime%2C%20LastTrainTime&$filter=StationName%2FZh_tw%20eq%20'${encodeURI(station_name)}'&$top=30&$format=JSON`, {
	    headers: getAuthorizationHeader(),
    })
    return response.data.map(dir=>{return {name: dir.TripHeadSign, first: dir.FirstTrainTime, last:dir.LastTrainTime}});
}

const getStationsOfLine = async (line_id)=>{
    const response = await axios.get(`https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/StationOfLine/TRTC?$top=30&$format=JSON&$filter=LineID%20eq%20'${line_id}'`, {
	    headers: getAuthorizationHeader(),
    })
    return response.data[0].Stations.map(station=>{return{sequence:station.Sequence, id:station.StationID, name:{tw:station.StationName.Zh_tw, en:station.StationName.En}}});
}

const getExits = async (station_name)=>{
    const response = await axios.get(`https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/StationExit/TRTC?$select=ExitID%2C%20LocationDescription&$filter=StationName%2FZh_tw%20eq%20'${encodeURI(station_name)}'&$top=30&$format=JSON`, {
	    headers: getAuthorizationHeader(),
    })
    return response.data.map(exit=>{return{id: exit.ExitID, description: exit.LocationDescription}});
}



const getAStation = async (station_name)=>{
    let station = null;
    let lines = [];
    for (let i = 0; i < LINES.length; i++) {
        let stations = await getStationsOfLine(LINES[i].id)
        let exist = stations.find(station=>station.name.tw===station_name)
        if(exist){
            if(!station) station = exist;
            lines.push(LINES[i]);
        } 
        if(lines.length>=2) break; 
    }
    if(station){
        station.lines = lines;
    }
    return station;
}

// const getTransfer = async (start_line_id, end_line_id)=>{
//     const response = await axios.get(`https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/LineTransfer/TRTC?$select=FromStationName%2C%20TransferTime&$filter=FromLineID%20eq%20'${start_line_id}'%20and%20ToLineID%20eq%20'${end_line_id}'&$top=30&$format=JSON`, {
// 	    headers: getAuthorizationHeader(),
//     })
//     return response.data.map(station=>{return {name:{tw: station.FromStationName.Zh_tw, en: station.FromStationName.En},timeTaken:station.TransferTime }})
// }

const getTicket = async (start_station_name, end_station_name)=>{
    const response = await axios.get(`https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TRTC?$select=Fares&$filter=OriginStationName%2FZh_tw%20eq%20'${encodeURI(start_station_name)}'%20and%20DestinationStationName%2FZh_tw%20eq%20'${encodeURI(end_station_name)}'&$top=30&$format=JSON`, {
	    headers: getAuthorizationHeader(),
    })
    return {normal: response.data[0].Fares[0].Price, old: response.data[0].Fares[2].Price}
}

const goStraight = async (a_name, b_name, line)=>{
    let stations = await getStationsOfLine(line.id)
    let path =[]
    let a = stations.find(station=> station.name.tw===a_name)
    let b = stations.find(station=> station.name.tw===b_name)
    if(line.id==='O'){
        if(a.id[1]==='5' && b.id[1]!=='5' && b.sequence>12){
            path.push(`往南勢角搭${a.sequence-12}站到大橋頭站`)
            path.push(`往迴龍搭${b.sequence-12}站`)
        }else if(b.id[1]==='5' && a.id[1]!=='5' && a.sequence>12){
            path.push(`往南勢角搭${b.sequence-12}站到大橋頭站`)
            path.push(`往蘆洲搭${a.sequence-12}站`)
        }else{
            path.push(`往${a.sequence>b.sequence? '南勢角':b.id[1]==='5'?'迴龍':'蘆洲'}搭${Math.abs(a.sequence-b.sequence)}站`)
        }
    }else{
        path.push(`往${a.sequence>b.sequence? line.start:line.end}搭${Math.abs(a.sequence-b.sequence)}站`)

    }
    return [...path];

}

const makePath = async (a_name, b_name)=>{
    let path = []
    let extra = null
    let start_station_name = a_name
    let end_station_name = b_name
    if(start_station_name=='小碧潭'){
        path.push('搭到1站到七張')
        start_station_name = '七張'
    }
    if(end_station_name=='小碧潭'){
        extra ='往小碧潭搭1站到小碧潭'
        end_station_name='七張'
    }
    if(start_station_name=='新北投'){
        path.push('搭到1站北投')
        start_station_name ='北投'
    }
    if(end_station_name=='新北投'){
        extra ='往新北投搭1站到新北投'
        end_station_name='北投'
    }
    if(start_station_name!==end_station_name){
    let start_station = await getAStation(start_station_name)
    let end_station = await getAStation(end_station_name)
    if(!start_station || !end_station) return null;
    if(start_station.lines[0].id===end_station.lines[0].id){
        if(start_station.lines[1]&& end_station.lines[1] && start_station.lines[1].id===end_station.lines[1].id){
            if(start_station.lines[0].prio<start_station.lines[1].prio){
                path=await goStraight(start_station_name, end_station_name, start_station.lines[0])
            }else{
                path=await goStraight(start_station_name, end_station_name, start_station.lines[1])

            }
        }else{
            path=await goStraight(start_station_name, end_station_name, start_station.lines[0])

        }
    }else{
        if(start_station.lines[1]&& end_station.lines[1] && start_station.lines[1].id===end_station.lines[1].id){
            path=await goStraight(start_station_name, end_station_name, start_station.lines[1])
        }else{
            if(end_station.lines[1]&& start_station.lines[0].id===end_station.lines[1].id){
                path=await goStraight(start_station_name, end_station_name, start_station.lines[0])
            }else if(start_station.lines[1] && start_station.lines[1].id===end_station.lines[0].id){
                path=await goStraight(start_station_name, end_station_name, start_station.lines[1])
            }else{
                //transfer
                path.push('轉乘功能尚未完成')
                return path;
            }
        }
    }
    }
    
    if(extra){
        path.push(extra)
    }
    path.push('抵達')
    return path;
}


const metroInfo_handler = ()=>{
    const getMetroInfo = async (keyword)=>{
        let dao_id = keyword.search('到')
        if(dao_id===0){
            // if station exit
            // ask for start station
            return {type:"text", text:`你想從哪裡出發${keyword}? 請完整輸入「__${keyword}」`}
        }else if(dao_id===keyword.length-1){
            //if station exit
            //ask for end station
            return {type:"text", text:`你想從${keyword}哪裡?，請完整輸入「${keyword}__」`}
        }else if(dao_id!==-1){
            // path decision
            let start_name = keyword.slice(0,dao_id)
            let end_name = keyword.slice(dao_id+1, keyword.length)
            if(start_name==end_name){
                return {type:'text', text:'同一站就不用搭捷運了。'}
            }
            let path = await makePath(start_name, end_name)
            if(!path){
                return {type:"text", text:"這兩個站其中有一個查不到，請確認站名是否輸入正確。"}
            }else{
                let price = await getTicket(start_name, end_name)
                return flex_msg.PATH_INFO_FLEX(start_name, end_name, path, price)
            }
        }else{
            // find a station
            let station = await getAStation(keyword);
            if(station){
                station.exits = await getExits(station.name.tw)
                station.directions = await getDirections(station.name.tw)
                return flex_msg.STATION_INFO_FLEX(station)
            }else{
                return {type:"text", text:`查不到「${keyword}」站，我只認識台北捷運站喔，忘記站名可以輸入「搜尋捷運站」。`}  
            }
        }
    }

    const listAllStations = async (line_name)=>{
        let line = LINES.find(line=>line.name.tw==line_name)
        if(line){
            let stations = await getStationsOfLine(line.id)
            return flex_msg.LINE_FLEX(line, stations)
        }else{
           return { type:'text', text:`查不到這條線，我只認識台北的捷運線喔`} 
        }
        
    }


    return {getMetroInfo, listAllStations}
}

module.exports = metroInfo_handler;