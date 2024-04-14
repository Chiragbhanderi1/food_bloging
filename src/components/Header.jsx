import React from "react";

const Header = () => {
  return (
    <div className="h-screen">
      <div className="flex md:flex-row flex-col-reverse max-w-screen">
        <div className="md:pl-[100px] md:pt-[33px] w-full md:w-1/2">
          <div className="md:block hidden">
            <img src="/foodcart.png" alt="" />
          </div>
          <div className="md:max-w-[475px] mx-5 md:mx-0 mt-8 md:mt-24 flex flex-col md:justify-start justify-center">
            <h1 className="text-primary text-center md:text-left text-[40px] md:text-[69px] md:leading-[69px] font-[700] md:tracking-[0px]">
              Discover the <span className="text-red">Best</span> Food and
              Drinks
            </h1>
            <h4 className="font-[400] my-5 md:my-10 text-gray text-center md:text-left md:text-[20px] leading-[27px] tracking-[1px]">
              Naturally made Healthcare Products for the better care & support
              of your body.
            </h4>
            <button className="md:px-[34px] px-[17px] w-max mx-auto md:mx-0 py-[8px] md:py-[14px] rounded-[34px] bg-red text-[12px] md:text-[18px] font-[700] text-[#ffffff]">
              Explore Now!
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-[50vh] md:h-[90vh] relative ">
          <button className="text-[#ffffff] rounded-[21px] px-[13px] md:px-[26px] py-[4px] text-sm md:text-md md:py-[8px] border border-[#fff]  absolute z-10 top-5 right-5 md:top-10 md:right-10">Get In Touch</button>
          <div
            className="w-full h-[50vh] md:h-[90vh] relative "
            // style={{ overflow: "hidden" }}
          >
            <img
              src="/heroposter.png"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                right:"0",
                position:"absolute"
                // objectFit: "cover",
              }}
            />
          </div>

          <div class="w-full h-50vh md:h-[90vh] overflow-hidden absolute top-0 right-0">

            <img
              src="/Vector.png"
              alt=""
              style={{
                width: "100%",
                height: "100%",

                // objectFit: "cover",
              }}
              className="scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
