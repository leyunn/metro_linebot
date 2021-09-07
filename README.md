## metro_linebot (捷運小精靈)

這是一個我用來熟悉line API 的小project，一個可以用來查詢捷運相關資訊的Line 聊天機器人，使用PTX(公共運輸整合資訊流通服務平臺) API的資料。

| <img src="使用手冊.jpg" alt="使用手冊" style="zoom:30%;" /> | <img src="搜尋捷運站.jpg" alt="搜尋捷運站" style="zoom:35%;" /> | <img src="線路資訊.jpg" alt="IMG_1385" style="zoom:32%;" /> |
| :---------------------------------------------------------: | ------------------------------------------------------------ | :---------------------------------------------------------: |

| <img src="站點資訊.jpg" alt="站點資訊" style="zoom:40%;" /> | <img src="/Users/leyun/project/metro_linebot/metro_linebot (public)/站到站.jpg" alt="站到站" style="zoom:42%;" /> |
| :---------------------------------------------------------: | :----------------------------------------------------------: |

- #### 聊天機器人連結:

  <img src="/Users/leyun/project/metro_linebot/metro_linebot (public)/chatbot_link.png" alt="chatbot_link" style="zoom:50%;" />

- #### 服務簡介

  包含以下功能（僅包含台北捷運）：

  - 提供捷運圖
  - 線路列表
  - 單一線路站點列表
  - 站點查詢：所在線路、首末班車、出口位置
  - 站到站查詢：票價、路線規劃  **(注意：路線規劃的轉乘功能尚未完成)**

- #### 使用技術
  - PTX(公共運輸整合資訊流通服務平臺) API
  - Line messaging API, line-bot-sdk-nodejs
  - nodeJS, express, axios
  - heroku



