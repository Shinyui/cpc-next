import { gql, request } from "graphql-request";
import config from "./query.config";

const queryCourses = async () => {
  const query = gql`
    {
      courses {
        id
        courseName
        courseDescription
        isHidden
      }
    }
  `;

  return await request(config.endPoint, query);
};

const queryCourse = async (id) => {
  const query = gql`
    {
      course(where: { id: ${JSON.stringify(id)} }) {
        id
        courseName
        courseDescription
        chapters {
          ... on Chapter {
            id
            chapterName
            lessons {
              id
              lessonName
            }
          }
        }
      }
    }
  `;

  return await request(config.endPoint, query);
};
const queryLesson = async (id) => {
  const query = gql`
    {
      lesson(where: { id: ${JSON.stringify(id)}}) {
        id
        lessonName
        videoSource
        youtubeVideoId
        bunnyVideoId
        bunnyVideoLibraryId
      }
    }
  `;

  return await request(config.endPoint, query);
};

export { queryCourses, queryCourse, queryLesson };
