# GraphQL CRUD

## Prerequisites

- PostgreSQL ([See dataSource in index.ts](server/src/index.ts))
- Node 18
- Yarn

## Important Commands

**Start Yarn**

```commandline
yarn dev
```

## GraphQL Mutations

**Create User**

```graphql
mutation {
  createUser(name: "Foo Bar", email: "foo@bar.com", password: "xyz123") {
    name, email, password
  }
}
```

**Delete User**

```graphql
mutation {
  deleteUser(id: 2) {
    success,
    message
  }
}
```

**Update Password**

```graphql
mutation {
  updatePassword(email: "foo@bar.com", oldPassword: "foo123", newPassword: "foo125") {
    success,
    message
  }
}
```

## GraphQL Queries

**Get All Users**

```graphql
query {
  getAllUsers {
    email
  }
}
```