import React, { Children } from "react";
import Navbar from "./Navbar";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-min-full">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
