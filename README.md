# graphql-practice

### GraphQL Server

1. 建立 GraphQL server：這裡使用 Node.js 的 express-graphql 套件。（Express.js 本身是一個 Web Application 框架，而 express-graphql 擴展了 Express.js，使其能夠輕鬆處理 GraphQL 請求)
2. 定義 Schema 來描述數據模型和操作。
3. 定義 Resolver，Resolver 是一個函式，用於處理 query 和 mutation 請求，並返回相應的數據。
4. 設置 GraphQL endpoint：用於接收和處理客戶端的 query 和 mutation 請求。
5. 發送 query 和 mutation 請求：http://localhost:4000/graphql GraphiQL 可向 GraphQL endpoint發送 query 和 mutation 請求。

### GraphQL Client

GraphQL Client 主要工作就是，使用前端寫好的 query 與 server 溝通，即 client 只需要寫 query，打 API 行為就交給工具函式庫幫你解決，相當於在使用 RESTful API 時候，會去用 axios 幫助處理 API。

- [graphql-request 套件](https://github.com/prisma-labs/graphql-request)
