export default `#graphql
  type Query {
    users: [User!]!
    user(id: ID!): User!
  }

  type User {
    id: ID!
    first_name: String
    last_name: String
    username: String
    created_at: String
    updated_at: String
  }
`;
