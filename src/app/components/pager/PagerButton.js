import React from "react";

const ACTIVE_COLOR = "#3A80BA";
const INACTIVE_COLOR = "#F1F1F1";

const RIGHT_ARROW_PATH = "M2 2L14 14L2 26";
const LEFT_ARROW_PATH = "M15 2L3 14L15 26";

const PagerButton = ({ back = false, active = false, onClick }) => (
  <div className="pager__arrow" onClick={() => (onClick && active) && onClick()}>
    <svg
      width={20}
      height={28}
      viewBox="0 0 17 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={back ? LEFT_ARROW_PATH : RIGHT_ARROW_PATH}
        stroke={active ? ACTIVE_COLOR : INACTIVE_COLOR}
        stroke-width="4"
        stroke-linecap="round"
      />
    </svg>
  </div>
);

export default PagerButton;
