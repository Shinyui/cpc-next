import Link from "next/link";
import { Card } from "@nextui-org/react";
import Carousel from "@/components/Carousel/Carousel.component";
import CourseCard from "@/components/CourseCard/CourseCard.component";
import OrangeLavaCard from "@/components/Svg/ToolCard/OrangeLavaCard.component";
import { queryCourses } from "@/graphql/course.query";

type Course = {
  id: string;
  courseName: string;
  courseDescription: string;
  isHidden: boolean;
};

const fetchCourses = async () => {
  const courses = await queryCourses();
  return courses.courses;
};

const Home = async () => {
  const courses = await fetchCourses();

  const getLocalDateString = () => {
    const dataArray = new Date()
      .toLocaleDateString("zh-TW", { timeZone: "Asia/Taipei" })
      .split("/");
    return `${dataArray[0]} 年 ${dataArray[1]} 月 ${dataArray[2]} 日`;
  };

  return (
    <div>
      <div className="mb-[24px]">
        <h2 className="text-2xl">今天</h2>
        <p className="text-md text-[#A1A1A1]">{getLocalDateString()}</p>
      </div>

      <section className="mb-[24px]">
        <h2 className="text-3xl mb-[12px]">幣需參加</h2>
        <Carousel />
      </section>

      <section className="mb-[24px]">
        <h2 className="text-3xl mb-[12px]">打單幣備</h2>
        <div className="flex overflow-scroll gap-[16px]">
          <Link href={"/calculator/future-size"}>
            <div className="aspect-[2/1] h-[100px]">
              <Card
                className="bg-transparent border-0"
                isBlurred={false}
                isPressable={true}
                shadow="none"
              >
                <OrangeLavaCard title="倉位計算" subTitle="打單必備" />
              </Card>
            </div>
          </Link>
        </div>
      </section>

      <section className="mb-[24px]">
        <h2 className="text-3xl mb-[12px]">幣知課程</h2>
        <div className="flex overflow-scroll gap-[10px]">
          {courses.map((course: Course) => {
            if (course.isHidden === false) {
              return (
                <div key={course.id}>
                  <Link href={`/courses/${course.id}`}>
                    <CourseCard
                      title={course.courseName}
                      description={course.courseDescription}
                    />
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
