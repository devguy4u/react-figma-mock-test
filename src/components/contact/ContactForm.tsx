import React from "react";

import CustomInput from "../input/CustomInput";
import ContactInfo from "./ContactInfo";
import Mail from "../../assets/icons/envelope.png";
import Phone from "../../assets/icons/phone_call.png";
import Address from "../../assets/icons/map_pin_line.png";
import Canada from "../../assets/icons/canada-flag.png";
import Vector from "../../assets/icons/Vector1.svg";

const ContactForm = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row w-[360px] md:w-[990px]">
      {/* Left Panel */}
      <div className="relative flex flex-col justify-between w-full md:w-[420px] bg-[#1e323e] p-[24px] md:p-[54px] text-[#ffffff] rounded-t-[15px] md:rounded-tr-[0px] md:rounded-l-[18px] gap-12 md:gap-0">
        <div className="flex flex-col gap-0 md:gap-[30px]">
          <div className="font-extrabold md:font-semibold text-[20px] md:text-[27px] leading-[28px] md:leading-[33px] md:tracking-[-0.02em] text-center md:text-left pb-6 md:pb-0">
            Get in touch
          </div>
          {/* Contact Information */}
          <div className="flex flex-col gap-[18px]">
            <ContactInfo
              icon={Mail}
              method={"EMAIL US"}
              info={"contact@jacobirobotics.com"}
            />
            <ContactInfo
              icon={Phone}
              method={"PHONE NUMBER"}
              info={"+1-222-555-2222"}
            />
            <div className="flex flex-col gap-[18px]">
              <div className="flex flex-row gap-[12px]">
                <div className="bg-[#FFFFFF14] rounded-[114px] p-[12px] gap-[7.5px]">
                  <img
                    src={Address}
                    alt="icon"
                    height={"24px"}
                    width={"24px"}
                  />
                </div>
                <div className="flex flex-col justify-center gap-[4.5px]">
                  <div className="text-[15px] font-normal leading-[21px]">
                    4071 Emery St
                  </div>
                  <div className="text-[15px] font-normal leading-[21px]">
                    Emeryville, CA 94608.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-[12px]">
          <div className="flex flex-row gap-[9px] items-center justify-center md:justify-start">
            <hr className="hidden md:inline md:w-[24px] border-[#ffffff] border-solid" />
            <span className="font-extrabold md:font-medium text-[18px] md:text-[12px] leading-[24px] md:leading-[18px] text-center md:text-left">
              Connect with us:
            </span>
          </div>
          <div className="flex flex-row gap-[6px] justify-center md:justify-start">
            {/* Facebook */}
            <button className="group social-btn">
              <svg
                viewBox="0 0 56.693 56.693"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[15px] h-[15px]"
              >
                <path
                  d="M40.43 21.739h-7.645v-5.014c0-1.883 1.248-2.322 2.127-2.322h5.395V6.125l-7.43-.029c-8.248 0-10.125 6.174-10.125 10.125v5.518h-4.77v8.53h4.77v24.137h10.033V30.269h6.77l.875-8.53z"
                  fill="#ffffff"
                  className="fill-000000 group-hover:fill-[#0B63E5]"
                ></path>
              </svg>
            </button>
            {/* Twitter */}
            <button className="group social-btn">
              <svg
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                className="w-[15px] h-[15px]"
              >
                <path
                  d="M161.014 464.013c193.208 0 298.885-160.071 298.885-298.885 0-4.546 0-9.072-.307-13.578A213.737 213.737 0 0 0 512 97.176a209.705 209.705 0 0 1-60.334 16.527 105.426 105.426 0 0 0 46.182-58.102 210.548 210.548 0 0 1-66.703 25.498 105.184 105.184 0 0 0-76.593-33.112c-57.682 0-105.145 47.464-105.145 105.144 0 8.002.914 15.979 2.722 23.773-84.418-4.231-163.18-44.161-216.494-109.752-27.724 47.726-13.379 109.576 32.522 140.226A104.258 104.258 0 0 1 20.48 194.23v1.331c.014 49.814 35.447 93.111 84.275 102.974a104.898 104.898 0 0 1-47.431 1.802c13.727 42.685 53.311 72.108 98.14 72.95a210.83 210.83 0 0 1-130.458 45.056A213.688 213.688 0 0 1 0 416.827a297.42 297.42 0 0 0 161.014 47.104"
                  fillRule="nonzero"
                  fill="#ffffff"
                  className="fill-000000 group-hover:fill-[#0B63E5]"
                ></path>
              </svg>
            </button>
            {/* Linkedin */}
            <button className="group social-btn">
              <svg
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 512 512"
                className="w-[15px] h-[15px]"
              >
                <path
                  d="M51.326 185.85h90.011v270.872H51.326V185.85zM96.934 55.278C66.127 55.278 46 75.503 46 102.049c0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71V185.85h-90.038c1.192 25.411 0 270.872 0 270.872h90.038V305.448c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926H466V301.398c0-83.199-44.402-121.911-103.661-121.911z"
                  fill="#ffffff"
                  className="fill-000000 group-hover:fill-[#0B63E5]"
                ></path>
              </svg>
            </button>
            {/* Innstagram */}
            <button className="group social-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 56.7 56.7"
                xmlSpace="preserve"
                className="w-[15px] h-[15px]"
              >
                <path
                  d="M28.2 16.7c-7 0-12.8 5.7-12.8 12.8s5.7 12.8 12.8 12.8S41 36.5 41 29.5s-5.8-12.8-12.8-12.8zm0 21c-4.5 0-8.2-3.7-8.2-8.2s3.7-8.2 8.2-8.2 8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z"
                  fill="#ffffff"
                  className="fill-000000 group-hover:fill-[#0B63E5]"
                ></path>
                <circle
                  cx="41.5"
                  cy="16.4"
                  r="2.9"
                  fill="#ffffff"
                  className="fill-000000 group-hover:fill-[#0B63E5]"
                ></circle>
                <path
                  d="M49 8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7 0-14.5 5.8-14.5 14.5v20.5c0 4.3 1.4 8 4.2 10.7 2.7 2.6 6.3 3.9 10.4 3.9h20.4c4.3 0 7.9-1.4 10.5-3.9 2.7-2.6 4.1-6.3 4.1-10.6V19.3c0-4.2-1.4-7.8-4-10.4zm-.4 31c0 3.1-1.1 5.6-2.9 7.3s-4.3 2.6-7.3 2.6H18c-3 0-5.5-.9-7.3-2.6C8.9 45.4 8 42.9 8 39.8V19.3c0-3 .9-5.5 2.7-7.3 1.7-1.7 4.3-2.6 7.3-2.6h20.6c3 0 5.5.9 7.3 2.7 1.7 1.8 2.7 4.3 2.7 7.2v20.6z"
                  fill="#ffffff"
                  className="fill-000000 group-hover:fill-[#0B63E5]"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Pattern */}
        <div className="absolute top-[-20px] right-[25px] md:flex flex-col gap-12 opacity-20 -rotate-45 hidden md:visible">
          <div className="w-[57.5px] h-[57.5px] radius-2 opacity-[0.05] bg-[#FFFFFF] rounded-md"></div>
        </div>
        <div className="absolute top-[25px] right-[75px] md:flex flex-col gap-12 opacity-20 -rotate-45 hidden md:visible">
          <div className="w-[57.5px] h-[60px] radius-2 opacity-[0.05] bg-[#FFFFFF] rounded-md"></div>
        </div>
        <div className="absolute top-[55px] right-[5px] md:flex flex-col gap-12 opacity-20 -rotate-45 hidden md:visible">
          <div className="w-[57.5px] h-[57.5px] radius-2 opacity-[0.05] bg-[#FFFFFF] rounded-md"></div>
        </div>
        <div className="absolute top-[105px] right-[55px] md:flex flex-col gap-12 opacity-20 -rotate-45 hidden md:visible">
          <div className="w-[57.5px] h-[57.5px] radius-2 opacity-[0.05] bg-[#FFFFFF] rounded-md"></div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex flex-col px-4 pt-4 pb-[45px] md:p-[54px] gap-[24px] bg-[#ffffff] rounded-b-[8px] md:rounded-r-[18px] ">
        <div className="flex flex-col gap-[24px] md:gap-[15px]">
          <div className="flex flex-col md:flex-row gap-[24px] md:gap-[15px]">
            <CustomInput
              name="firstname"
              label="First Name"
              type="text"
              placeholder="First Name"
            />
            <CustomInput
              name="lastname"
              label="Last Name"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-[24px] md:gap-[15px]">
            <CustomInput
              name="companyname"
              label="Company name"
              type="companyname"
              placeholder="Company name"
            />
            <CustomInput
              name="workemail"
              label="Work email"
              type="workemail"
              placeholder="Work email"
            />
          </div>
          {/* Phone Number */}
          <div className="flex flex-col gap-[12px] md:gap-[4.5px] shadow-[0px_1px_4px_0px_#19213d14] md:shadow-none">
            <label
              htmlFor="phone"
              className="text-[14px] md:text-[10.5px] leading-[20px] md:leading-[15px] md:mb-[0.75px] text-[#061c3d] font-semibold md:font-normal"
            >
              Phone Number
            </label>
            <div className="flex items-center w-full max-w-md ">
              {/* Country Code Dropdown */}
              <div className="flex items-center py-[19px] md:py-[9px] px-[13.5px]  rounded-l-[6px] md:rounded-l-[3.75px] border md:border-[0.75px] border-[#F1F3F7] md:border-[#e6e8ec] gap-[2.25px]">
                <div className="flex items-center gap-[6px] ">
                  <img src={Canada} alt="ca" className="w-[18px] h-[13.5px]" />
                  <span className="text-[12px] leading-[18px] text-[#061C3D]">
                    +880
                  </span>
                </div>
                <div className="flex items-center justify-center w-[12px] h-[12px]">
                  <img
                    src={Vector}
                    alt="vector"
                    className="w-[7.5px] h-[3.75px]"
                  />
                </div>
              </div>

              {/* Phone Number Input */}
              <input
                type="tel"
                placeholder="Phone Number"
                className="flex-1 px-4 md:px-[12.5px] py-[18px] md:py-[9px] rounded-r-[6px] md:rounded-r-[3.75px] border border-[#F1F3F7] md:border-[#e6e8ec] md:border-[0.75px] border-l-0 text-[14px] md:text-[12px] leading-[20px] md:leading-[18px] placeholder-[#838E9E]"
              />
            </div>
          </div>
          {/* Project */}
          <div className="flex flex-col gap-[12px] md:gap-[4.5px]">
            <label
              htmlFor="project"
              className="text-[14px] md:text-[10.5px] leading-[20px] md:leading-[15px] md:mb-[0.75px] text-[#061c3d] font-semibold md:font-medium"
            >
              Describe the project you need help with
            </label>
            <textarea
              id="project"
              name="project"
              placeholder="Please tell us how we can help..."
              className="px-4 md:px-[12.5px] py-[18px] md:py-[9px] rounded-[6px] md:rounded-[3.75px] border md:border-[0.75px] border-[#f1f3f7] md:border-[#e6e8ec] text-[14px] md:text-[12px] leading-[20px] md:leading-[18px] placeholder-[#838E9E] shadow-[0px_1px_4px_0px_#19213d14] md:shadow-none resize-y rows-5 md:rows-1 "
            />
          </div>
        </div>
        <div className="flex">
          <button className="font-semibold text-[14px] md:text-[12px] leading-[20px] md:leading-[36px] rounded-[6px] md:rounded-[5.25px] px-[18px] md:px-[24px] py-[14px] md:py-0 bg-[#061c3d] md:bg-[#1e323e] text-[#ffffff] uppercase shadow-[0px_1px_4px_0px_#19213d14] md:shadow-none w-full md:w-auto">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
