import React from "react";

export type CustomInputProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
};

const CustomInput = ({ name, label, type, placeholder }: CustomInputProps) => {
  return (
    <div className="flex flex-col gap-[12px] md:gap-[4.5px]">
      <label
        htmlFor={name}
        className="text-[14px] md:text-[10.5px] leading-[20px] md:leading-[15px] md:mb-[0.75px] text-[#061c3d] font-semibold md:font-medium"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="px-4 md:px-[12.5px] py-[18px] md:py-[9px] rounded-[6px] md:rounded-[3.75px] border md:border-[0.75px] border-[#f1f3f7] md:border-[#e6e8ec] text-[14px] md:text-[12px] leading-[20px] md:leading-[18px] placeholder-[#838E9E] shadow-[0px_1px_4px_0px_#19213d14] md:shadow-none"        
      />
    </div>
  );
};

export default CustomInput;
