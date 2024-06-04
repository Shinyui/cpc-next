import { gql, request } from "graphql-request";
import config from "./query.config";

const queryCourses = async () => {
  const query = gql`
    {
      courses {
        id
        courseName
        courseDescription
      }
    }
  `;

  return await request(config.endPoint, query);
};

const queryCourse = async (id) => {
  const query = gql`
    {
      course(where: { id: ${JSON.stringify(id)} }) {
        courseName
        courseDescription
        chapters {
          ... on Chapter {
            id
            chapterName
            lessons {
              id
              lessonName
              bunnyVideoId
              bunnyVideoLibraryId
              videoSource
              youtubeVideoId
            }
          }
        }
      }
    }
  `;

  return await request(config.endPoint, query);
};

export { queryCourses, queryCourse };
