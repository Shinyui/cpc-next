import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      <nav className="fixed bottom-[10px] left-1/2 transform -translate-x-1/2 z-[999] bg-red-500 w-4/5 h-[80px] bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <div className="flex justify-center items-center">
          <div className="flex-1 h-[80px] flex justify-center items-center">
            <Link href={"/"}>首頁</Link>
          </div>
          <div className="flex-1 h-[80px] flex justify-center items-center">
            <Link href={"https://www.coincpc.com/"}>文章</Link>
          </div>
          <div className="flex-1 h-[80px] flex justify-center items-center">
            <Link href={"/navigate"}>
              <FaSearch className="text-[28px]" />
            </Link>
          </div>
          <div className="flex-1 h-[80px] flex justify-center items-center">
            <Link href={"https://cryptopioneercommunity.cashier.ecpay.com.tw/"}>
              商店
            </Link>
          </div>
          <div className="flex-1 h-[80px] flex justify-center items-center">
            <Link href={"/profile"}>我</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
