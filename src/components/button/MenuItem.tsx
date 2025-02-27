import React from "react";

export type MenuItemProps = {
  url: string;
  item: string;
  button?: boolean;
};

const MenuItem = ({ url, item, button = true }: MenuItemProps) => {
  return (
    <a href={url} className="flex flex-row rounded-[9999px] gap-[4px] items-center">
      <span className="font-inter text-[14px] font-semibold leading-[24px] text-left text-[#254557]">
        {item}
      </span>
      {button && (
        <span className="w-[20px] h-[20px] flex flex-row items-center justify-center">
          <svg
            width="11"
            height="6"
            viewBox="0 0 11 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotation-[-90deg]"
          >
            <path
              d="M5.10406 4.07338L5.45761 4.42694L5.81117 4.07338L9.21095 0.673602C9.21097 0.673576 9.211 0.67355 9.21102 0.673523C9.29305 0.591644 9.40421 0.545654 9.52011 0.545654C9.63595 0.545654 9.74705 0.591591 9.82906 0.673383C9.91085 0.755392 9.95679 0.866495 9.95679 0.982329C9.95679 1.09825 9.91078 1.20943 9.82888 1.29145C9.82887 1.29147 9.82885 1.29148 9.82884 1.2915L5.76678 5.35356C5.68475 5.43549 5.57355 5.4815 5.45761 5.4815C5.34167 5.4815 5.23048 5.43549 5.14845 5.35356L1.09357 1.29868C1.01938 1.2164 0.979107 1.10895 0.981065 0.997998C0.983065 0.884656 1.02898 0.776514 1.10914 0.696354C1.18929 0.616198 1.29744 0.570283 1.41078 0.568283C1.52173 0.566325 1.62918 0.606598 1.71146 0.680787L5.10406 4.07338Z"
              fill="#254557"
              stroke="#254557"
              strokeWidth="1"
            />
          </svg>
        </span>
      )}
    </a>
  );
};

export default MenuItem;
