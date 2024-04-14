import React from "react";

const About = () => {
  return (
    <div className="h-screen flex justify-center align-middle ">
      <div
        className="h-[60vh] my-auto w-screen flex justify-center align-middle"
        style={{
          background:
            "linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)",
        }}
      >
        <div className="max-w-7xl mx-auto flex gap-0 md:gap-64">
          <div className="hidden md:flex">
            <img
              src="/about.png"
              alt=""
              style={{
                height: "60vh",
                width:"auto",
                maxWidth:"unset"
              }}
            />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <h1 className="text-primary text-center md:text-left text-[45px] leading-[27px] font-[600] tracking-[0px]">
              About Us
            </h1>
            <h4 className="font-[400] text-center md:text-left my-10 text-gray text-[15px] leading-[27px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. t has survived
              not only five centuries.
            </h4>
            <button className="px-[34px] mx-auto md:mx-0 w-max py-[14px] rounded-[34px] bg-red text-[18px] font-[700] text-[#ffffff]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
