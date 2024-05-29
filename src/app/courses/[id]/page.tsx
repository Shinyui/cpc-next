"use client";

import { Tabs, Tab, Accordion, AccordionItem } from "@nextui-org/react";
import LessonCard from "@/components/LessonCard/LessonCard.component";
import "./page.style.css";

const Courses = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <section className="mb-[24px]">
        <iframe
          className="w-full aspect-video mb-[16px]"
          src="https://www.youtube-nocookie.com/embed/kwaTuMgJtqA?si=dilA42EZXQd4BZ9C"
          title="YouTube video player"
          frameBorder={0}
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
          <Tabs aria-label="Options" color="default" variant="underlined">
            <Tab key="unit" title="課程單元">
              <div>
                <h2 className="text-3xl mb-[8px]">課程單元</h2>
                <p className="text-md">這邊會放一堆有關於這個課程影片</p>

                <Accordion variant="splitted" className="p-0 mt-[24px]">
                  <AccordionItem
                    key="1"
                    aria-label="Accordion"
                    title="某一個章節的名稱"
                  >
                    <div className="flex flex-col gap-[6px] mb-[12px]">
                      <LessonCard
                        lessonName="某一個課程單元，這是一個很長的課程單元名稱，估計在 375px 的寬度上會直接爆版"
                        isSelected={true}
                      />
                      <LessonCard lessonName="Lesson 2" isSelected={false} />
                      <LessonCard lessonName="Lesson 3" isSelected={false} />
                      <LessonCard lessonName="Lesson 4" isSelected={false} />
                      <LessonCard lessonName="Lesson 5" isSelected={false} />
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>
            </Tab>
            <Tab key="info" title="課程介紹">
              <div>
                <h2 className="text-3xl mb-[8px]">課程名稱</h2>
                <p className="text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  cupiditate libero recusandae itaque, dolores officia,
                  laudantium repellendus sunt minus necessitatibus, modi
                  veritatis molestiae. Corporis eaque cum eveniet neque veniam
                  temporibus.
                </p>
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Courses;
