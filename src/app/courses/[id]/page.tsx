import { Course, CourseShowProps } from "./type";
import { queryCourse } from "@/graphql/course.query";
import CourseTab from "@/components/CourseTab/CourseTab.component";
import "./page.style.css";

const fetchCourse = async (id: string): Promise<Course> => {
  const course = await queryCourse(id);
  return course.course;
};

const Courses = async (props: CourseShowProps) => {
  const course = await fetchCourse(props.params.id);

  return (
    <div>
      <section className="mb-[24px]">
        <iframe
          className="w-full aspect-video mb-[16px]"
          src="https://www.youtube-nocookie.com/embed/kwaTuMgJtqA?si=dilA42EZXQd4BZ9C"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div>
          <p className="text-[16px] text-[#A1A1A1]">正在播放</p>
          <h2 className="text-[24px]">
            年輕創業者的啟示：叭叭叭吹喇叭 - 快點吹我的大喇叭
          </h2>
        </div>
        <div className="flex w-full flex-col w-full">
          <CourseTab
            courseName={course.courseName}
            courseDescription={course.courseDescription}
            chapters={course.chapters}
          />
        </div>
      </section>
    </div>
  );
};

export default Courses;
