import React, { useState } from "react";
import MenuItem from "../button/MenuItem";
import Logo from "../../assets/icons/logo.svg.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full  sticky top-0 z-[9999] bg-[#FFFFFFCC]">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between py-[14px] pl-[32px] pr-[26px]  backdrop-blur-[12px]">
        {/* Logo */}
        <a 
          href="https://jacobirobotics.com/"
          className="w-[158px] h-[48.05px] p-[6px] shrink-0"
        >
          <img src={Logo} alt="Logo" />
        </a>
        <button
          onClick={() => setOpen(!open)}
          id="navbarToggler"
          className={` ${
            open && "navbarTogglerActive"
          } absolute right-4 top-1/2 -translate-y-1/2 rounded-lg ring-primary focus:ring-2 md:hidden`}
        >
          <span className="relative my-[6px] block h-[2px] w-[30px]  bg-[#353E5C]"></span>
          <span className="relative my-[6px] block h-[2px] w-[30px]  bg-[#353E5C]"></span>
          <span className="relative my-[6px] block h-[2px] w-[30px]  bg-[#353E5C]"></span>
        </button>

        {/* Menu Items */}
        <nav
          id="navbarCollapse"
          // className={`flex flex-row ${!open && "hidden"}`}
          className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow md:static md:block md:w-full md:max-w-full md:shadow-none md:bg-transparent ${
            !open && "hidden"
          } `}
        >
          <div className="flex flex-col md:flex-row items-center md:justify-end">
            <div className="flex flex-col md:flex-row items-center pr-0 md:pr-[110px] pb-12 md:pb-0 gap-12">
              <MenuItem
                url="https://account.jacobirobotics.com/"
                item="Developers"
              />
              <MenuItem
                url="https://account.jacobirobotics.com/"
                item="Solutions"
              />
              <MenuItem
                url="https://account.jacobirobotics.com/"
                item="Company"
              />
              <MenuItem
                url="https://account.jacobirobotics.com/"
                item="Blog"
                button={false}
              />
            </div>

            {/* Request Button */}
            <a href="https://account.jacobirobotics.com/" className="menu-btn">
              Request a Demo
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
