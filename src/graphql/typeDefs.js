export default `#graphql
  type Query {
    users: [User!]!
    user(id: ID!): User!

    category(id: ID!): Category!
    categories: [Category!]!

    measurement(id: ID!): Measurement!
    measurements: [Measurement!]!
  }

  type User {
    id: ID!
    first_name: String
    last_name: String
    username: String
    created_at: String
    updated_at: String
  }

  type Category {
    id: ID!
    name: String
    created_at: String
    updated_at: String
  }

  type Measurement {
    id: ID!
    name: String
    inc_by: Float
    created_at: String
    updated_at: String
  }
`;
