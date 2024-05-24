import React from "react";
import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";

const CourseCard = () => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="aspect-[3/4] h-[400px]"
      isPressable={true}
    >
      <Image
        alt="Woman listing to music"
        className="object-cover w-full h-2/3"
        width={375}
        height={100}
        src={"https://nextui.org/images/hero-card.jpeg"}
      />
      <CardFooter className="flex flex-col items-start p-[20px] h-full justify-around">
        <h3 className="text-xl">這是一個課程的標題</h3>
        <p className="text-sm text-left">
          這是有關於這個課程的敘述，簡單寫寫讓你知道這課程在幹嘛
        </p>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
