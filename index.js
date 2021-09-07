const line = require('@line/bot-sdk');
const express = require('express');
const metroInfo_handler = require('./metroInfo_handler');
const flex_msg = require('./flexMessage')
const config = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

const client = new line.Client(config);
const {getMetroInfo, listAllStations} = metroInfo_handler()

const app = express();

app.get('/', async (req,res)=>{
  res.send('ok')
})

app.post('/callback', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

const handleEvent = async e => {
  if(e.type==='follow'){
    return client.replyMessage(e.replyToken, flex_msg.WELCOME_FLEX)
  }else if (e.type === 'message') {
    if(e.message.type === 'text'){
      let reply = {type:'text', text:'？'}
      if(e.message.text[e.message.text.length-1]==='線'){
        reply = await listAllStations(e.message.text)
      }else if(e.message.text.includes('嗨')||e.message.text.includes('哈囉')||e.message.text.includes('你好')){
        reply = {type:'text', text:'嗨！忘記怎麼問我問題可以輸入「使用手冊」喔。'}
      }else if(e.message.text[e.message.text.length-1]==="？" || e.message.text[e.message.text.length-1]==="?"){
        reply = {type:'text', text:'請輸入正確的指令我才能回答你喔，忘記怎麼問可以輸入「使用手冊」。'}
      }else{
        switch (e.message.text) {
          case '使用手冊':
            reply = flex_msg.USER_MANUAL_FLEX
            break;
          case '捷運圖':
            reply = { type: 'image', originalContentUrl: 'https://tour.ntpc.gov.tw/Content/Upload/ContentPage/1d826ca4-e4bd-4197-a942-51978c772202.png', previewImageUrl:'https://tw.piliapp.com/static/s3/apps/mrt_taiwan/taipei/ogimage_zh.png' }
            break;
          case '搜尋捷運站':
              reply = flex_msg.FIND_STATION_FLEX
            break;
          default:
            reply = await getMetroInfo(e.message.text);
            break;
       }
      }
      
      return client.replyMessage(e.replyToken, reply);
    }
  }

  return Promise.resolve(null);
}



// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});