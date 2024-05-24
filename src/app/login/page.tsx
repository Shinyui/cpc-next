import { Button } from "@nextui-org/button";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-between">
        <div>
          <h2 className="text-5xl mb-[18px]">Hey, 歡迎回來</h2>
          <p className="text-xl">選擇一個喜歡的登入方式，開始學習吧！</p>
        </div>

        <div className="flex flex-col gap-[18px]">
          <Button color="primary" radius="full" size="lg" isDisabled>
            <FaGoogle />
            透過 Google 直接登入
          </Button>
          <Button color="default" radius="full" size="lg">
            不登入直接使用
          </Button>
        </div>

        <p className="text-center">
          Copyright © 2024 WuCareer® <br /> All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Login;
