import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";
import PlatinumCard from "@/components/Svg/PlatinumCard.component";
import Bitget from "../../../public/bitget-token-new-bgb-logo.svg";
import Bingx from "../../../public/bingx.svg";
import OKX from "../../../public/okx-seeklogo.svg";
import Bybit from "../../../public/bybit-seeklogo.svg";
import BNB from "../../../public/bnb-bnb-logo.svg";
import ETH from "../../../public/ethereum-eth-logo.svg";
import TRX from "../../../public/tron-trx-logo.svg";

const Profile = () => {
  return (
    <div>
      <section className="mb-[24px]">
        <div className="mb-[24px]">
          <PlatinumCard
            userName="保哥"
            membersLeftDays={999999}
            userRoles="糖果爸爸"
          />
        </div>

        <div className="p-[16px] border-2 rounded-[8px] w-full border-[#424242] flex flex-col gap-[20px] mb-[24px]">
          <div className="flex gap-[12px] items-center">
            <div>
              <Image src={Bitget} alt="Bitget Logo" height={40} width={40} />
            </div>
            <div className="grow">
              <h3 className="text-[#A1A1A1] text-[14px]">Bitget UID</h3>
              <p className="text-[#FFFFFF] text-[18px]">000000000</p>
            </div>
            <div>
              <Button isIconOnly variant="light" className="text-[#424242]">
                <IoIosArrowForward className="text-[24px] align-right" />
              </Button>
            </div>
          </div>

          <div className="flex gap-[12px] items-center">
            <div>
              <Image src={Bingx} alt="BingX Logo" height={40} width={40} />
            </div>
            <div className="grow">
              <h3 className="text-[#A1A1A1] text-[14px]">BingX UID</h3>
              <p className="text-[#FFFFFF] text-[18px]">000000000</p>
            </div>
            <div>
              <Button isIconOnly variant="light" className="text-[#424242]">
                <IoIosArrowForward className="text-[24px] align-right" />
              </Button>
            </div>
          </div>

          <div className="flex gap-[12px] items-center">
            <div>
              <Image src={OKX} alt="OKX Logo" height={40} width={40} />
            </div>
            <div className="grow">
              <h3 className="text-[#A1A1A1] text-[14px]">OKX UID</h3>
              <p className="text-[#FFFFFF] text-[18px]">000000000</p>
            </div>
            <div>
              <Button isIconOnly variant="light" className="text-[#424242]">
                <IoIosArrowForward className="text-[24px] align-right" />
              </Button>
            </div>
          </div>

          <div className="flex gap-[12px] items-center">
            <div>
              <Image src={Bybit} alt="Bybit Logo" height={40} width={40} />
            </div>
            <div className="grow">
              <h3 className="text-[#A1A1A1] text-[14px]">Bybit UID</h3>
              <p className="text-[#FFFFFF] text-[18px]">000000000</p>
            </div>
            <div>
              <Button isIconOnly variant="light" className="text-[#424242]">
                <IoIosArrowForward className="text-[24px] align-right" />
              </Button>
            </div>
          </div>
        </div>

        <div className="p-[16px] border-2 rounded-[8px] w-full border-[#424242] flex flex-col gap-[20px]">
          <div className="flex gap-[12px] items-center">
            <div>
              <Image src={ETH} alt="BNB Logo" height={40} width={40} />
            </div>
            <div className="grow">
              <h3 className="text-[#A1A1A1] text-[14px]">ERC20 地址</h3>
              <p className="text-[#FFFFFF] text-[18px]">0xABCDEFG12345678</p>
            </div>
            <div>
              <Button isIconOnly variant="light" className="text-[#424242]">
                <IoIosArrowForward className="text-[24px] align-right" />
              </Button>
            </div>
          </div>

          <div className="flex gap-[12px] items-center">
            <div>
              <Image src={BNB} alt="BNB Logo" height={40} width={40} />
            </div>
            <div className="grow">
              <h3 className="text-[#A1A1A1] text-[14px]">BEP20 地址</h3>
              <p className="text-[#FFFFFF] text-[18px]">0xABCDEFG12345678</p>
            </div>
            <div>
              <Button isIconOnly variant="light" className="text-[#424242]">
                <IoIosArrowForward className="text-[24px] align-right" />
              </Button>
            </div>
          </div>

          <div className="flex gap-[12px] items-center">
            <div>
              <Image src={TRX} alt="TRX Logo" height={40} width={40} />
            </div>
            <div className="grow">
              <h3 className="text-[#A1A1A1] text-[14px]">TRC20 地址</h3>
              <p className="text-[#FFFFFF] text-[18px]">0xABCDEFG12345678</p>
            </div>
            <div>
              <Button isIconOnly variant="light" className="text-[#424242]">
                <IoIosArrowForward className="text-[24px] align-right" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
