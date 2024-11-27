import React from "react";

export type ContactInfoProps = {
  icon: string;
  method: string;
  info: string;
};

const ContactInfo = ({ icon, method, info }: ContactInfoProps) => {
  return (
    <div className="flex flex-col gap-[16px] md:gap-[18px]">
      <div className="flex flex-row gap-[12px]">
        <div className="bg-[#FFFFFF14] rounded-[114px] p-[12px] gap-[7.5px]">
          <img src={icon} alt="icon" height={"24px"} width={"24px"} />
        </div>
        <div className="flex flex-col justify-center gap-[4.5px]">
          <div className="text-[10.5px] font-medium leading-[10.5px] tracking-[0.01em] text-[#ffffffaa]">
            {method}
          </div>
          <div className="text-[15px] md:text-[12px] font-normal leading-[21px]">
            {info}
          </div>
        </div>
      </div>
      <hr className="visible md:hidden mx-[8px] border-t border-[#F8FAFF3D]"/>
    </div>
  );
};

export default ContactInfo;
