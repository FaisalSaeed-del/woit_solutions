import React from "react";

const Filter = () => {
  return (
    <div className="bg-[#1D1627]">
      <div className="container mt-10">
        <div className="flex  justify-betweenborder-[1px] border-borderColor w-full rounded-[20px]">
          <div>
            <button className="flex items-center text-white text-[15px] border-borderColor border-[1px] rounded-[20px] py-2 px-3 gap-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M2.5 5.83301H17.5M5 9.99967H15M8.33333 14.1663H11.6667"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              Filters
            </button>
          </div>
          <div className="border-borderColor border-[1px] flex gap-2 items-center py-2 px-2 rounded-[20px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M15.862 15.862L12.2248 12.2248M12.2248 12.2248C13.382 11.0674 14.0978 9.46865 14.0978 7.70272C14.0978 4.17081 11.2347 1.30762 7.70272 1.30762C4.17081 1.30762 1.30762 4.17081 1.30762 7.70272C1.30762 11.2347 4.17081 14.0978 7.70272 14.0978C9.46865 14.0978 11.0674 13.382 12.2248 12.2248Z"
                stroke="white"
                stroke-width="1.58775"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input type="text" placeholder="search" className="outline-none caret-borderColor bg-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
