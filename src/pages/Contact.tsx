import React from "react";
import ContactForm from "../components/contact/ContactForm";
import Navbar from "../components/layout/Navbar";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-[124px] lg:py-[93px] px-auto gap-[54px] bg-[#f5f6f7]">
        <div className="flex flex-col items-center gap-[24px] w-[360px] lg:w-[519px] ">
          <h1 className="font-inter w-full lg:w-[388px] text-[36px] lg:text-[42px] font-extrabold lg:font-bold leading-[40px] lg:leading-[45px] tracking-tighter lg:tracking-[-0.02em] text-center text-[#061C3D]">
            Have a project in mind! Book a demo.
          </h1>
          <span className="text-[#061c3d] text-center text-base lg:text-[15px]  leading-[24px] lg:leading-[21px]">
            Got a project? Drop me a line if you want to work together on
            something exciting. Or do you need our help? Feel free to contact
            us.
          </span>
        </div>
        {/* Contact Form */}
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Contact;
