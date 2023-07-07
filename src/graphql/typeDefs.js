import gql from 'graphql-tag';

export default gql`
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

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: ID!, input: UpdateUserInput!): User!
    removeUser(id: ID!): User!

    createCategory(input: CreateCategoryInput!): Category!
    updateCategory(id: ID!, input: UpdateCategoryInput!): Category!
    removeCategory(id: ID!): Category!

    createMeasurement(input: CreateMeasurementInput!): Measurement!
    updateMeasurement(id: ID!, input: UpdateMeasurementInput!): Measurement!
    removeMeasurement(id: ID!): Measurement!

    createItem(input: CreateItemInput!): Item!
    updateItem(id: ID!, input: UpdateItemInput!): Item!
    removeItem(id: ID!): Item!
    createItemOption(input: CreateOptionInput!): Item!
    removeItemOption(id: ID!): Item!
  }

  type User {
    id: ID!
    first_name: String
    last_name: String
    username: String
    created_at: String
    updated_at: String
  }

  input CreateUserInput {
    first_name: String!
    last_name: String!
    username: String!
    password: String!
  }

  input UpdateUserInput {
    first_name: String
    last_name: String
    username: String
  }

  type Category {
    id: ID!
    name: String
    created_at: String
    updated_at: String
  }

  input CreateCategoryInput {
    name: String!
  }

  input UpdateCategoryInput {
    name: String
  }

  type Measurement {
    id: ID!
    name: String
    inc_by: Float
    created_at: String
    updated_at: String
  }

  input CreateMeasurementInput {
    name: String!
    inc_by: Float!
  }

  input UpdateMeasurementInput {
    name: String
    inc_by: Float
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

  input CreateItemInput {
    name: String!
    description: String!
    category_id: String!
    type: String!
    in_menu: Boolean!
    options: [OptionInput!]!
  }

  input UpdateItemInput {
    name: String
    description: String
    category_id: String
    type: String
    in_menu: Boolean
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

  input OptionInput {
    measurement_id: String!
    unit: Float!
    price: Float!
  }

  input CreateOptionInput {
    item_id: String!
    measurement_id: String!
    unit: Float!
    price: Float!
  }
`;
