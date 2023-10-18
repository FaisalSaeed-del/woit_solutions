import React from "react";

const Filter = () => {
  return (
    <div className="bg-[#1D1627] border-[1px] border-borderColor w-full rounded-[20px] mt-4  ">
      <div className="container">
        <div className="flex  justify-between">
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
            <input
              type="text"
              placeholder="search"
              className="outline-none caret-borderColor bg-transparent"
            />
          </div>
          <div className="flex gap-4">
          <div>
            <button className="flex border-borderColor border-[1px] items-center rounded-[20px] py-2 px-2 text-white text-[15px] gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M10.3866 8.49995C10.3866 9.81995 9.31995 10.8866 7.99995 10.8866C6.67995 10.8866 5.61328 9.81995 5.61328 8.49995C5.61328 7.17995 6.67995 6.11328 7.99995 6.11328C9.31995 6.11328 10.3866 7.17995 10.3866 8.49995Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.9999 14.0138C10.3532 14.0138 12.5466 12.6271 14.0732 10.2271C14.6732 9.28713 14.6732 7.70713 14.0732 6.76713C12.5466 4.36713 10.3532 2.98047 7.9999 2.98047C5.64656 2.98047 3.45323 4.36713 1.92656 6.76713C1.32656 7.70713 1.32656 9.28713 1.92656 10.2271C3.45323 12.6271 5.64656 14.0138 7.9999 14.0138Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              visible
            </button>
          </div>
          <div>
            <button className="flex items-center gap-1 text-white text-[15px] font-medium border-borderColor border-[1px] py-2 px-2 rounded-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M9.56545 7.33334L10.3737 5.66666M10.3737 5.66666L11.667 3L12.9558 5.66666M10.3737 5.66666H12.9558M12.9558 5.66666L13.7614 7.33334M9.83369 9.66664H13.5003L9.83369 14H13.5003M4.66699 3V14M4.66699 14L2.66699 12M4.66699 14L6.66699 12"
                  stroke="white"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Sortby
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
