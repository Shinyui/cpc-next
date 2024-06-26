import commaNumber from "comma-number";
import Prop from "./type";

const PlatinumCard = ({ userName, membersLeftDays, userRoles }: Prop) => {
  return (
    <svg
      viewBox="0 0 281 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <path
        d="M4.7998 0H276.8C279 0 280.8 1.8 280.8 4V146C280.8 148.2 279 150 276.8 150H4.7998C2.5998 150 0.799805 148.2 0.799805 146V4C0.799805 1.8 2.5998 0 4.7998 0Z"
        fill="#383838"
      />
      <path
        d="M14.0999 150L8.3999 114.2L186.7 0H276.8C279 0 280.8 1.8 280.8 4V69.1C167.6 43.4 30.7999 150 30.7999 150H14.0999Z"
        fill="#3B3B3B"
      />
      <path
        d="M4.80005 150C2.60005 150 0.800049 148.2 0.800049 146V4C0.800049 1.8 2.60005 0 4.80005 0H276.8C279 0 280.8 1.8 280.8 4V9.09998C97.6001 17.6 16.8 150 16.8 150H4.80005Z"
        fill="#404040"
      />
      <text
        fill="#FDD6B7"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        font-family="Roboto"
        font-size="19"
        letter-spacing="0em"
      >
        <tspan x="20.7788" y="118.494">
          {commaNumber(membersLeftDays)}
        </tspan>
      </text>
      <text
        fill="#FDD6B7"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        font-family="Roboto"
        font-size="19"
        letter-spacing="0em"
      >
        <tspan x="164" y="118.494">
          {userRoles}
        </tspan>
      </text>
      <text
        fill="#FFD8B8"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        font-family="Roboto"
        font-size="12"
        letter-spacing="0em"
      >
        <tspan x="20.7788" y="94.1017">
          會員剩餘天數
        </tspan>
      </text>
      <text
        fill="#FFD8B8"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        font-family="Roboto"
        font-size="12"
        letter-spacing="0em"
      >
        <tspan x="163.779" y="94.1017">
          用戶權限
        </tspan>
      </text>
      <path
        d="M30.8 16H252.8C258.3 16 262.8 20.5 262.8 26V56H20.8V26C20.8 20.5 25.3 16 30.8 16Z"
        fill="url(#paint0_linear_19_516)"
      />
      <path opacity="0.1" d="M141.8 78V128" stroke="#FFD8B8" />
      <text
        fill="#784A3D"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        font-family="Roboto"
        font-size="17"
        letter-spacing="0em"
      >
        <tspan x="36.7788" y="41.8107">
          {userName}
        </tspan>
      </text>
      <defs>
        <linearGradient
          id="paint0_linear_19_516"
          x1="20.7856"
          y1="36.001"
          x2="262.786"
          y2="36.001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#DECDC1" />
          <stop offset="1" stop-color="#C9A48A" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PlatinumCard;
