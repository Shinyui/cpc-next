import { GraphQLClient } from "graphql-request";

const graphClient = new GraphQLClient(
  process.env.REACT_APP_HYGRAPH_COURSE_API_ENDPOINT
);

export default graphClient;
