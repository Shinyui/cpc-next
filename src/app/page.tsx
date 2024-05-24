import ToolCard from "@/components/ToolCard/ToolCard.component";
import Carousel from "@/components/Carousel/Carousel.component";
import CourseCard from "@/components/CourseCard/CourseCard.component";
import Link from "next/link";

const Home = () => {
  const getLocalDateString = () => {
    const dataArray = new Date().toLocaleDateString("zh-TW").split("/");
    return `${dataArray[0]} 年 ${dataArray[1]} 月 ${dataArray[2]} 日`;
  };

  return (
    <div className="pl-[24px] pr-[24px] pt-[24px] pb-[24px]">
      <div>
        <h2 className="text-2xl">今天</h2>
        <p className="text-md text-[#A1A1A1]">{getLocalDateString()}</p>
      </div>

      <section className="mb-[24px]">
        <h2 className="text-3xl mb-[12px]">最新活動</h2>
        <Carousel />
      </section>

      <section className="mb-[24px]">
        <h2 className="text-3xl mb-[12px]">所有工具</h2>
        <div className="flex overflow-scroll gap-[10px]">
          <div className="aspect-[2/1] h-[100px]">
            <ToolCard />
          </div>
          <div className="aspect-[2/1] h-[100px]">
            <ToolCard />
          </div>
          <div className="aspect-[2/1] h-[100px]">
            <ToolCard />
          </div>
          <div className="aspect-[2/1] h-[100px]">
            <ToolCard />
          </div>
          <div className="aspect-[2/1] h-[100px]">
            <ToolCard />
          </div>
        </div>
      </section>

      <section className="mb-[24px]">
        <h2 className="text-3xl mb-[12px]">所有課程</h2>
        <div className="flex overflow-scroll gap-[10px]">
          <div>
            <CourseCard />
          </div>
          <div>
            <CourseCard />
          </div>
          <div>
            <CourseCard />
          </div>
        </div>
      </section>

      <nav className="fixed bottom-[10px] left-1/2 transform -translate-x-1/2 z-[999] bg-red-500 w-4/5 h-[80px] bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <div className="flex justify-center items-center">
          <div className="flex-1 h-[80px] flex justify-center items-center">
            <Link href={"/"}>首頁</Link>
          </div>
          <div className="flex-1 h-[80px] flex justify-center items-center">
            <Link href={"/"}>課程</Link>
          </div>
          <div className="flex-1 h-[80px] flex justify-center items-center">
            <Link href={"/"}>文章</Link>
          </div>
          <div className="flex-1 h-[80px] flex justify-center items-center">
            <Link href={"/"}>商店</Link>
          </div>
          <div className="flex-1 h-[80px] flex justify-center items-center">
            <Link href={"/"}>我的</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
