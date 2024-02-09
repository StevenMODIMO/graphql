export const typeDefs = `#graphql
  type Games {
    id: ID!,
    title: String!,
    platform: [String]!
  }

  type Reviews {
    id: ID!,
    rating: Int!,
    content: String!
  }

  type Authors {
    id: ID!,
    name: String!,
    verified: Boolean!
  }

  type Query {
    games: [Games]
    game(id: ID!): Games
    reviews: [Reviews]
    review(id: ID!): Reviews
    authors: [Authors]
    author(id: ID!): Authors
  }
`;

// int, float, string, boolean, ID
