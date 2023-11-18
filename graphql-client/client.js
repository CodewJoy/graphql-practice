// graphql-request 是一個 JS package，讓 client side 用來發送 GraphQL query & mutation
const { request, gql } = require("graphql-request");

const endpoint = "http://localhost:4000/graphql"; // Your GraphQL server URL

// Sample query
const getUsersQuery = gql`
  query {
    users {
      id
      name
      age
    }
  }
`;

// Sample mutation
const createUserMutation = gql`
  mutation ($name: String!, $age: Int!) {
    createUser(name: $name, age: $age) {
      id
      name
      age
    }
  }
`;

// Function to fetch users
async function getUsers() {
  try {
    const data = await request(endpoint, getUsersQuery);
    console.log("Users:", data.users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

// Function to create a user
async function createUser(name, age) {
  try {
    const data = await request(endpoint, createUserMutation, { name, age });
    console.log("Created user:", data.createUser);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

// // Uncomment and use this to create a user
// createUser("David", 35);

// Usage
getUsers(); // Fetch users
