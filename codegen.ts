// eslint-disable
import dotenv from "dotenv";
dotenv.config();

const {
  CODEGEN_HASURA_ENDPOINT: endpoint,
  CODEGEN_HASURA_GRAPHQL_ADMIN_SECRET: secret,
} = process.env;

module.exports = {
  overwrite: true,
  schema: {
    [endpoint || ""]: {
      headers: {
        "x-hasura-admin-secret": secret,
      },
    },
  },
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        skipTypename: false,
      },
    },
  },
};
