import { Card } from "@nextui-org/react";
import Image from "next/image";
import MaskGroup from "../../../public/Mask group.svg";

type Props = {
  title: string;
  subTitle: string;
  imageSrc: string;
};

const ToolCard = ({ title, subTitle, imageSrc }: Props) => {
  return (
    <Card isPressable={true}>
      <div className="relative">
        <h3 className="absolute top-0 left-0 top-[48px] left-[20px] text-[24px]">
          {title}
        </h3>
        <p className="absolute top-[12px] left-[20px] text-[14px]">
          {subTitle}
        </p>
        <div className="h-[100px]">
          <Image src={imageSrc} alt="test" className="h-full w-full" />
        </div>
      </div>
    </Card>
  );
};

export default ToolCard;
