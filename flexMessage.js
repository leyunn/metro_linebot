const flexWrap = (flex, alt) => {
  return {
    type:"flex",
    altText:alt,
    contents: flex
  }
}

const WELCOME_FLEX = {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "METRO TAIPEI",
          "weight": "bold",
          "color": "#1DB446",
          "size": "sm",
          "contents": [
            {
              "type": "span",
              "text": "METRO",
              "color": "#00789B"
            },
            {
              "type": "span",
              "text": "LINEBOT",
              "color": "#3DAF36"
            }
          ]
        },
        {
          "type": "text",
          "text": "嗨！我是捷運小精靈！",
          "weight": "bold",
          "size": "xl",
          "margin": "md"
        },
        {
          "type": "text",
          "text": "使用我的方式如下：",
          "size": "xs",
          "offsetTop": "xs",
          "offsetBottom": "none"
        },
        {
          "type": "separator",
          "margin": "md"
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "- 想知道某個站的資訊，輸入站名",
              "offsetTop": "none",
              "wrap": true,
              "margin": "xl",
              "contents": [
                {
                  "type": "span",
                  "text": "- 想知道某個站的資訊，輸入"
                },
                {
                  "type": "span",
                  "text": "站名",
                  "weight": "bold",
                  "size": "md",
                  "style": "normal",
                  "decoration": "none",
                  "color": "#ed9600"
                }
              ]
            },
            {
              "type": "text",
              "offsetTop": "none",
              "wrap": true,
              "margin": "xl",
              "contents": [
                {
                  "type": "span",
                  "text": "- 想知道A站到B站所需的交通時間，輸入"
                },
                {
                  "type": "span",
                  "text": "A站名到B站名",
                  "weight": "bold",
                  "decoration": "none",
                  "color": "#ed9600"
                }
              ]
            },
            {
              "type": "text",
              "text": "- 想知道某個站的資訊，輸入站名",
              "offsetTop": "none",
              "wrap": true,
              "margin": "xl",
              "contents": [
                {
                  "type": "span",
                  "text": "- 想看某個捷運線，輸入"
                },
                {
                  "type": "span",
                  "text": "＿＿線",
                  "weight": "bold",
                  "size": "md",
                  "style": "normal",
                  "decoration": "none",
                  "color": "#ed9600"
                }
              ]
            }
          ]
        },
        {
          "type": "box",
          "layout": "horizontal",
          "margin": "md",
          "contents": [
            {
              "type": "text",
              "text": "- 想不起來站名？",
              "size": "md",
              "flex": 0,
              "gravity": "center"
            },
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "搜尋捷運站",
                "text": "搜尋捷運站"
              },
              "flex": 6,
              "offsetTop": "none",
              "offsetBottom": "none",
              "offsetStart": "none",
              "offsetEnd": "none",
              "position": "relative",
              "gravity": "top",
              "margin": "none",
              "height": "sm"
            }
          ],
          "offsetTop": "sm"
        },
        {
          "type": "box",
          "layout": "horizontal",
          "margin": "md",
          "contents": [
            {
              "type": "text",
              "text": "- 想看完整捷運圖？",
              "size": "md",
              "flex": 0,
              "gravity": "center"
            },
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "捷運圖",
                "text": "捷運圖"
              },
              "flex": 6,
              "offsetTop": "none",
              "offsetBottom": "none",
              "offsetStart": "none",
              "offsetEnd": "none",
              "position": "relative",
              "gravity": "top",
              "margin": "none",
              "height": "sm"
            }
          ]
        }
      ]
    },
    "styles": {
      "footer": {
        "separator": true
      }
    }
  }

const USER_MANUAL_FLEX = {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "METRO TAIPEI",
          "weight": "bold",
          "color": "#1DB446",
          "size": "sm",
          "contents": [
            {
              "type": "span",
              "text": "METRO",
              "color": "#00789B"
            },
            {
              "type": "span",
              "text": "LINEBOT",
              "color": "#3DAF36"
            }
          ]
        },
        {
          "type": "text",
          "text": "捷運小精靈的",
          "weight": "regular",
          "size": "xs",
          "margin": "md"
        },
        {
          "type": "text",
          "text": "使用手冊",
          "weight": "bold",
          "size": "xl",
          "margin": "md"
        },
        {
          "type": "separator",
          "margin": "md"
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "- 想知道某個站的資訊，輸入站名",
              "offsetTop": "none",
              "wrap": true,
              "margin": "xl",
              "contents": [
                {
                  "type": "span",
                  "text": "- 想知道某個站的資訊，輸入"
                },
                {
                  "type": "span",
                  "text": "站名",
                  "weight": "bold",
                  "size": "md",
                  "style": "normal",
                  "decoration": "none",
                  "color": "#ed9600"
                }
              ]
            },
            {
              "type": "text",
              "offsetTop": "none",
              "wrap": true,
              "margin": "xl",
              "contents": [
                {
                  "type": "span",
                  "text": "- 想知道A站到B站所需的交通時間，輸入"
                },
                {
                  "type": "span",
                  "text": "A站名到B站名",
                  "weight": "bold",
                  "decoration": "none",
                  "color": "#ed9600"
                }
              ]
            },
            {
              "type": "text",
              "text": "- 想知道某個站的資訊，輸入站名",
              "offsetTop": "none",
              "wrap": true,
              "margin": "xl",
              "contents": [
                {
                  "type": "span",
                  "text": "- 想看某個捷運線，輸入"
                },
                {
                  "type": "span",
                  "text": "＿＿線",
                  "weight": "bold",
                  "size": "md",
                  "style": "normal",
                  "decoration": "none",
                  "color": "#ed9600"
                }
              ]
            }
          ]
        },
        {
          "type": "box",
          "layout": "horizontal",
          "margin": "md",
          "contents": [
            {
              "type": "text",
              "text": "- 想不起來站名？",
              "size": "md",
              "flex": 0,
              "gravity": "center"
            },
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "搜尋捷運站",
                "text": "搜尋捷運站"
              },
              "flex": 6,
              "offsetTop": "none",
              "offsetBottom": "none",
              "offsetStart": "none",
              "offsetEnd": "none",
              "position": "relative",
              "gravity": "top",
              "margin": "none",
              "height": "sm"
            }
          ],
          "offsetTop": "sm"
        },
        {
          "type": "box",
          "layout": "horizontal",
          "margin": "md",
          "contents": [
            {
              "type": "text",
              "text": "- 想看完整捷運圖？",
              "size": "md",
              "flex": 0,
              "gravity": "center"
            },
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "捷運圖",
                "text": "捷運圖"
              },
              "flex": 6,
              "offsetTop": "none",
              "offsetBottom": "none",
              "offsetStart": "none",
              "offsetEnd": "none",
              "position": "relative",
              "gravity": "top",
              "margin": "none",
              "height": "sm"
            }
          ]
        }
      ]
    },
    "styles": {
      "footer": {
        "separator": true
      }
    }
  }

const FIND_STATION_FLEX = {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "METRO TAIPEI",
          "weight": "bold",
          "color": "#1DB446",
          "size": "sm",
          "contents": [
            {
              "type": "span",
              "text": "METRO",
              "color": "#00789B"
            },
            {
              "type": "span",
              "text": "LINEBOT",
              "color": "#3DAF36"
            }
          ],
          "align": "start"
        },
        {
          "type": "text",
          "text": "它在哪條線上？",
          "weight": "bold",
          "size": "lg",
          "margin": "lg",
          "align": "center"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "BL板南線",
            "text": "板南線"
          },
          "color": "#0a59ae",
          "style": "primary",
          "margin": "md",
          "height": "sm"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "BR文湖線",
            "text": "文湖線"
          },
          "color": "#b57a25",
          "style": "primary",
          "margin": "md",
          "height": "sm"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "G松山新店線",
            "text": "松山新店線"
          },
          "color": "#107547",
          "style": "primary",
          "margin": "md",
          "height": "sm"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "O中和新蘆線",
            "text": "中和新蘆線"
          },
          "color": "#f5a818",
          "style": "primary",
          "margin": "md",
          "height": "sm"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "R淡水信義線",
            "text": "淡水信義線"
          },
          "color": "#d90023",
          "style": "primary",
          "margin": "md",
          "height": "sm"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "Y環狀線",
            "text": "環狀線"
          },
          "color": "#fedb00",
          "style": "secondary",
          "margin": "md",
          "height": "sm"
        }
      ]
    },
    "styles": {
      "footer": {
        "separator": true
      }
    }
  }

const LINE_FLEX = (line, stations)=>{{
      return  flexWrap({
        "type": "bubble",
        "size": "mega",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "color": (line.id!=='Y')? "#ffffff":'#000000',
                  "size": "xl",
                  "flex": 4,
                  "weight": "bold",
                  "contents": [
                    {
                      "type": "span",
                      "text": `${line.name.tw} `
                    },
                    {
                      "type": "span",
                      "text": ` ${line.name.en}`,
                      "size": "sm",
                      "weight": "regular"
                    }
                  ]
                }
              ]
            }
          ],
          "paddingAll": "20px",
          "backgroundColor": line.color,
          "spacing": "md",
          "paddingTop": "22px"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            ...stations.map(station=>{
              return {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                      {
                        "type": "filler"
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [],
                        "cornerRadius": "30px",
                        "height": "12px",
                        "width": "12px",
                        "borderWidth": "2px",
                        "borderColor": "#a3a3a3"
                      },
                      {
                        "type": "filler"
                      }
                    ],
                    "flex": 0
                  },
                  {
                    "type": "text",
                    "gravity": "center",
                    "flex": 4,
                    "size": "16px",
                    "text": station.name.tw
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "詳細",
                      "text": station.name.tw
                    },
                    "flex": 3,
                    "height": "sm"
                  }
                ],
                "spacing": "lg",
                "cornerRadius": "30px",
                "margin": "none",
                "height": "32px"
              }
            })
          ]
        }
      }, line.name.tw+'資訊')
  }}

  const PATH_INFO_FLEX = (a_name, b_name, paths, price)=>{
    return flexWrap({
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "METRO TAIPEI",
            "weight": "bold",
            "color": "#1DB446",
            "size": "sm",
            "contents": [
              {
                "type": "span",
                "text": "METRO",
                "color": "#00789B"
              },
              {
                "type": "span",
                "text": "LINEBOT",
                "color": "#3DAF36"
              }
            ]
          },
          {
            "type": "text",
            "text": `${a_name}->${b_name}`,
            "weight": "bold",
            "size": "26px",
            "margin": "md"
          },
          {
            "type": "separator",
            "margin": "lg"
          },
          {
            "type": "text",
            "text": "hello, world",
            "margin": "lg",
            "contents": [
              {
                "type": "span",
                "text": "票價: ",
                "weight": "bold",
                "size": "lg"
              },
              {
                "type": "span",
                "text": `${price.normal}元 (敬老 ${price.old}元)` ,
                "size": "md"
              }
            ]
          },
          {
            "type": "text",
            "text": "路線: ",
            "size": "lg",
            "weight": "bold",
            "margin": "md"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [],
            "margin": "xs"
          },
          ...paths.map(path=>{
            return {
            "type": "text",
            "text": `-> ${path}`,
            "margin": "sm"
          }
          })
          
        ],
        "margin": "none"
      },
      "styles": {
        "footer": {
          "separator": true
        }
      }
    },`${a_name}-${b_name}資訊`)
  }

  const STATION_INFO_FLEX = (station)=>{
    return flexWrap({
      "type": "bubble",
      "size": "mega",
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "METRO TAIPEI",
            "weight": "bold",
            "color": "#1DB446",
            "size": "sm",
            "contents": [
              {
                "type": "span",
                "text": "METRO",
                "color": "#00789B"
              },
              {
                "type": "span",
                "text": "LINEBOT",
                "color": "#3DAF36"
              }
            ]
          },
          {
            "type": "text",
            "size": "xxl",
            "weight": "bold",
            "margin": "md",
            "contents": [
              {
                "type": "span",
                "text": station.name.tw
              },
              {
                "type": "span",
                "text": station.name.en,
                "size": "md",
                "weight": "regular"
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              ...station.lines.map(line=>{
                return {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": line.name.tw,
                      "align": "center",
                      "color": (line.id!=='Y')? "#ffffff":'#000000',
                      "size": "sm"
                    }
                  ],
                  "backgroundColor": line.color,
                  "width": `${line.name.tw.length*17}px`,
                  "cornerRadius": "md",
                  "offsetEnd": "none",
                  "offsetStart": "none",
                  "paddingEnd": "none"
                }
              })
            ],
            "margin": "sm",
            "spacing": "3px"
          },
          {
            "type": "separator",
            "margin": "md"
          },
          ...station.directions.map(dir=>{
            return {
              "type": "text",
              "weight": "bold",
              "contents": [
                {
                  "type": "span",
                  "text": `${dir.name}: `
                },
                {
                  "type": "span",
                  "text": ` (首) ${dir.first} (末) ${dir.last}`,
                  "weight": "regular",
                  "size": "sm"
                }
              ],
              "margin": "md"
            }
          })
          ,
          {
            "type": "text",
            "text": "出口:",
            "weight": "bold",
            "margin": "sm"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              ...station.exits.map(exit=>{
                return {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "text",
                          "text": `${exit.id}號`,
                          "align": "center"
                        }
                      ],
                      "cornerRadius": "sm",
                      "backgroundColor": "#e8e8e8",
                      "flex": 2,
                      "justifyContent": "center"
                    },
                    {
                      "type": "text",
                      "text": exit.description,
                      "align": "start",
                      "flex": 7,
                      "size": "13px",
                      "gravity": "center",
                      "wrap": true
                    }
                  ],
                  "spacing": "lg",
                  "margin": "md"
                }
              })
            ],
            "margin": "none"
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "button",
            "action": {
              "type": "message",
              "label": "從這裡出發->",
              "text": `${station.name.tw}到`
            },
            "style": "link",
            "color": "#00789B"
          },
          {
            "type": "button",
            "action": {
              "type": "message",
              "label": "抵達這裡<-",
              "text": `到${station.name.tw}`
            },
            "style": "link",
            "color": "#3DAF36"
          }
        ],
        "spacing": "md"
      },
      "styles": {
        "footer": {
          "separator": true
        }
      }
    },`${station.name.tw}資訊`)
  }



  module.exports = {
    WELCOME_FLEX: flexWrap(WELCOME_FLEX, '歡迎及使用手冊'),
    LINE_FLEX,
    USER_MANUAL_FLEX: flexWrap(USER_MANUAL_FLEX,'使用手冊'),
    FIND_STATION_FLEX: flexWrap(FIND_STATION_FLEX,'捷運線列表'),
    STATION_INFO_FLEX,
    PATH_INFO_FLEX
  }

