import React, { useState } from "react";

const Articles = () => {
  const data = [
    {
      title: "Grilled  Tomatoes at Home",
      img: "/tomato.png",
    },
    {
      title: "Snacks for Travel",
      img: "/apple.png",
    },
    {
      title: "Post-workout Recipes",
      img: "/meal.png",
    },
    {
      title: "How To Grill Corn",
      img: "/grilled-tomatoes.png",
    },
    {
      title: "Crunchwrap Supreme",
      img: "/sandwhich.png",
    },
    {
      title: "Broccoli Cheese Soup",
      img: "/soup.png",
    },
  ];
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleData = data.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className="md:px-36 px-5 my-36 mx-auto">
      <h1 className="text-primary text-[30px] text-center md:text-left md:text-[56px] leading-[42px] font-[600] tracking-[4%]">
        Latest Articles
      </h1>
      <div className="flex md:flex-row flex-col gap-14 mt-4 md:mt-24">
        {visibleData.map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl border border-[#93a2d35b]"
          >
            <img src={item.img} alt="" style={{ width: "100%" }} />
            <div className="p-2">
              <h1 className="mt-12 text-primary text-[31px] leading-[27px] font-[800] ">
                {item.title}
              </h1>
              <p className="my-8 font-[300] text-[20px] leading-[27px] tracking-[1%] text-gray">
                PLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard...
              </p>
              <button className="px-[26px] py-[8px] border border-[#424961] rounded-[21px] text-[#424961]">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 justify-center mt-14 align-middle items-center">
        <button
          className={`px-[26px] py-[8px] border rounded-[21px] ${
            currentPage !== 0
              ? "border-[#424961]  text-[#424961]"
              : "border-[#AFAFAF]  text-[#AFAFAF]"
          } `}
          onClick={prevPage}
          disabled={currentPage === 0}
        >
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.44189 15.8523C9.99486 15.5393 10.1753 14.7427 9.80834 14.234C9.70603 14.0921 8.12567 12.6312 6.29636 10.9875L2.97042 7.99899L6.2973 5.01011C8.12699 3.36619 9.70744 1.90503 9.80928 1.76312C9.92885 1.59653 9.99467 1.35683 9.99505 1.08643C9.99562 0.714453 9.95488 0.630597 9.62964 0.333876C9.29554 0.0291567 9.21935 0 8.75851 0H8.25353L4.12681 3.76388L0 7.52768V7.959C0 8.21418 0.062993 8.47719 0.154181 8.60293C0.377575 8.91117 7.52253 15.452 7.95885 15.7478C8.38772 16.0386 9.03263 16.084 9.44189 15.8523Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <span className="text-gray">
          {currentPage + 1}/{totalPages}
        </span>
        <button
          className={`px-[26px] py-[8px] border rounded-[21px] ${
            currentPage !== totalPages - 1
              ? "border-[#424961]  text-[#424961]"
              : "border-[#AFAFAF]  text-[#AFAFAF]"
          } `}
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
        >
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.558107 0.147705C0.00513666 0.460681 -0.175258 1.25727 0.19166 1.766C0.293975 1.9079 1.87433 3.3688 3.70364 5.01247L7.02958 8.00101L3.7027 10.9899C1.87301 12.6338 0.292561 14.095 0.190718 14.2369C0.0711464 14.4035 0.00532551 14.6432 0.00494831 14.9136C0.00438252 15.2855 0.0451198 15.3694 0.370358 15.6661C0.70446 15.9708 0.780652 16 1.24149 16H1.74647L5.87319 12.2361L10 8.47232V8.041C10 7.78582 9.93701 7.52281 9.84582 7.39707C9.62243 7.08883 2.47747 0.547977 2.04115 0.252202C1.61228 -0.0385846 0.967365 -0.0839958 0.558107 0.147705Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Articles;
