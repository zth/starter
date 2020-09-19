module.exports = {
  client: {
    includes: [],
    service: {
      name: "postgraphile",
      localSchemaFile: `${__dirname}/data/schema.graphql`,
    },
  },
};
