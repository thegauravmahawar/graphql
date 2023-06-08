# GraphQL CRUD

## Prerequisites

- Node 18
- Yarn

## Important Commands

**Start Yarn**

```commandline
yarn dev
```

## GraphQL Mutations

```graphql
mutation {
  createUser(name: "Foo Bar", email: "foo@bar.com", password: "xyz123") {
    name, email, password
  }
}
```

## GraphQL Queries

```graphql
query {
  getAllUsers {
    email
  }
}
```