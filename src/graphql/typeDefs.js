export default `#graphql
  type Query {
    users: [User!]!
    user(id: ID!): User!

    category(id: ID!): Category!
    categories: [Category!]!

    measurement(id: ID!): Measurement!
    measurements: [Measurement!]!

    item(id: ID!): Item!
    items: [Item!]!
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

  type Item {
    id: ID!
    name: String
    description: String
    category: Category
    options: [Option!]!
    type: String
    photo: String
    in_menu: Boolean
    created_at: String
    updated_at: String
  }

  type Option {
    id: ID!
    item: Item!
    measurement: Measurement
    unit: Float
    price: Float
    created_at: String
    updated_at: String
  }
`;
