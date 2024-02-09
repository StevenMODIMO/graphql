import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./_db.js";

const resolvers = {
  Query: {
    // get all games
    games() {
      return db.games;
    },

    // return a single game
    game(_, args) {
        return db.games.find(g => g.id === args.id)
    },

    // return all reviews
    reviews() {
      return db.reviews;
    },

    // return single review
    review(_, args) {
        return db.reviews.find(r => r.id === args.id)
    },

    // return all authors
    authors() {
      return db.authors;
    },

    // return a single author
    author(_, args) {
        return db.authors.find(a => a.id === args.id)
    }
  },
};

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 5000 },
});

console.log("http://localhost:5000");
