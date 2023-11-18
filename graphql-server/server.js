var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

// test query
/*
query {
  users {
    id
    name
    age
  }
  user(id: "1") {
    name
    age
  }
}
mutation {
  createUser(name: "Charlie", age: 28) {
    id
    name
    age
  }
}
subscription {
  newUser {
    name
    age
  }
}
*/

// Sample data (to simulate a database)
const users = [
  { id: "1", name: "Alice", age: 25 },
  { id: "2", name: "Bob", age: 30 },
];
// Construct a schema, using GraphQL schema language
// 定義 Schema 來描述數據模型和操作。
// ! 表示 non-nullable
// 知道 users 回傳 array 格式
const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    age: Int!
  }

  type Query {
    hello: String
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, age: Int!): User!
  }
  type Subscription {
    newUser: User!
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  // query
  hello: () => "Hello world!",
  users: () => users,
  user: ({ id }) => {
    const foundUser = users.find((user) => user.id === id);
    return foundUser ? foundUser : null; // Handling user not found
  },
  // mutation
  createUser: ({ name, age }) => {
    const newId = (users.length + 1).toString(); // Safer way to generate ID
    const newUser = { id: newId, name, age };
    users.push(newUser);
    return newUser;
  },
};

// 建立 GraphQL server：這裡使用 Node.js 的 express-graphql 套件。
//（Express.js 本身是一個 Web Application 框架，而 express-graphql 擴展了 Express.js，使其能夠輕鬆處理 GraphQL 請求)
var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
