import { Card } from "@nextui-org/react";
import Image from "next/image";
import MaskGroup from "../../../public/Mask group.svg";

const ToolCard = () => {
  return (
    <Card isPressable={true}>
      <div className="relative">
        <h3 className="absolute top-0 left-0 top-[48px] left-[20px] text-[24px]">
          倉位計算機
        </h3>
        <p className="absolute top-[12px] left-[20px] text-[14px]">計算機</p>
        <div className="h-[100px]">
          <Image src={MaskGroup} alt="test" className="h-full w-full" />
        </div>
      </div>
    </Card>
  );
};

export default ToolCard;
