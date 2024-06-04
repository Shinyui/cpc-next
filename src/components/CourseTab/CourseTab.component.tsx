"use client";

import { Tabs, Tab, Accordion, AccordionItem } from "@nextui-org/react";
import LessonCard from "@/components/LessonCard/LessonCard.component";
import { CourseTab as CourseTabInterface } from "./type";

const CourseTab = (course: CourseTabInterface) => {
  return (
    <Tabs aria-label="Options" color="default" variant="underlined">
      <Tab key="unit" title="課程單元">
        <div>
          <h2 className="text-3xl mb-[8px]">課程單元</h2>
          <p className="text-md">這邊會放一堆有關於這個課程影片</p>

          <Accordion variant="splitted" className="p-0 mt-[24px]">
            {course.chapters.map((chapter, idx) => {
              console.log(chapter);

              return (
                <AccordionItem
                  key={idx}
                  aria-label="Accordion"
                  title={chapter.chapterName}
                >
                  <div className="flex flex-col gap-[6px] mb-[12px]">
                    {chapter.lessons.map((lesson) => {
                      return (
                        <LessonCard
                          lessonName={lesson.lessonName}
                          isSelected={false}
                        />
                      );
                    })}
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </Tab>
      <Tab key="info" title="課程介紹">
        <div>
          <h2 className="text-3xl mb-[8px]">{course.courseName}</h2>
          <p className="text-md">{course.courseDescription}</p>
        </div>
      </Tab>
    </Tabs>
  );
};

export default CourseTab;
