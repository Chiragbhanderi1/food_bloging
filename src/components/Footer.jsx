import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font bg-[#F8F8F8]">
        <div className="container px-3 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 justify-center flex flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <img src="/foodcart.png" alt="" srcset="" />
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-left  justify-between">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-[600] text-[18px]  text-primary tracking-widest mb-3">
                Contact Us
              </h2>
              <nav className="list-none mb-10 flex justify-between flex-col">
                <li className="mb-3 font-[400] text-[14px] ">
                  <a href="/" className="text-[#646874]">
                    Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near
                    YTM Market, XYZ-343434
                  </a>
                </li>
                <li className="mb-3 font-[400] text-[14px] ">
                  <a href="/" className="text-[#646874]">
                    example2020@gmail.com
                  </a>
                </li>
                <li className="mb-3 font-[400] text-[14px] ">
                  <a href="/" className="text-[#646874]">
                    (904) 443-0343
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-[600] text-[18px]  text-primary tracking-widest mb-3">
                More
              </h2>
              <nav className="list-none mb-10 flex justify-between flex-col">
                <li className="mb-3 font-[400] text-[14px] ">
                  <a href="/" className="text-[#646874]">
                    About Us
                  </a>
                </li>
                <li className="mb-3 font-[400] text-[14px] ">
                  <a href="/" className="text-[#646874]">
                    Products
                  </a>
                </li>
                <li className="mb-3 font-[400] text-[14px] ">
                  <a href="/" className="text-[#646874]">
                    Career
                  </a>
                </li>
                <li className="mb-3 font-[400] text-[14px] ">
                  <a href="/" className="text-[#646874]">
                    Contact Us
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font md:ml-16 font-[600] text-[18px]  text-primary tracking-widest mb-3">
                Social Links
              </h2>
              <nav className="list-none mb-10 flex justify-between flex-col">
                <li className="mb-3 md:ml-16 font-[400] text-[14px] ">
                  <span className="inline-flex gap-4 sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <a href="/" className="text-primary">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                    <a href="/" className="ml-3 text-primary">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a href="/" className="text-primary ml-3">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                  </span>
                </li>
                <li className="mt-14 font-[400] text-[14px] text-[#646874]">
                © 2022 Food Truck Example
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
