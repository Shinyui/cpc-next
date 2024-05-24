import ToolCard from "@/components/ToolCard/ToolCard.component";
import Carousel from "@/components/Carousel/Carousel.component";
import CourseCard from "@/components/CourseCard/CourseCard.component";
import Link from "next/link";
import MaskGroup from "../../public/Mask group.svg";
import MaskGroup1 from "../../public/Mask group 1.svg";
import MaskGroup2 from "../../public/Mask group 2.svg";

const Home = () => {
  const getLocalDateString = () => {
    const dataArray = new Date().toLocaleDateString("zh-TW").split("/");
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
        <div className="flex overflow-scroll">
          <div className="aspect-[2/1] h-[100px]">
            <ToolCard
              title="合約定損倉位"
              subTitle="計算機"
              imageSrc={MaskGroup}
            />
          </div>
          <div className="aspect-[2/1] h-[100px]">
            <ToolCard
              title="機構倉手數"
              subTitle="計算機"
              imageSrc={MaskGroup1}
            />
          </div>
          <div className="aspect-[2/1] h-[100px]">
            <ToolCard
              title="合約利潤"
              subTitle="計算機"
              imageSrc={MaskGroup2}
            />
          </div>
        </div>
      </section>

      <section className="mb-[24px]">
        <h2 className="text-3xl mb-[12px]">幣知課程</h2>
        <div className="flex overflow-scroll gap-[10px]">
          <div>
            <Link href={"/courses/123"}>
              <CourseCard
                title="Perun 教授每週盤解"
                description="來不及參加教授的盤解，可以來這邊惡補一下，下週的盤勢預測呦"
              />
            </Link>
          </div>
          <div>
            <Link href={"/courses/123"}>
              <CourseCard
                title="保哥直播回放"
                description="偶爾有一些乾貨，但大多數都是幹話"
              />
            </Link>
          </div>
          <div>
            <Link href={"/courses/123"}>
              <CourseCard
                title="交易員計畫：初中"
                description="學完這套，你基本上就拿到了全職交易的入場券"
              />
            </Link>
          </div>
          <div>
            <Link href={"/courses/123"}>
              <CourseCard
                title="交易員計畫：高中"
                description="賭你不敢再更精進自己的交易技術啦 XD"
              />
            </Link>
          </div>
          <div>
            <Link href={"/courses/123"}>
              <CourseCard
                title="交易員計畫：大學"
                description="你要是能看完這一套課程，送你兩個字，牛 Pussy！"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
