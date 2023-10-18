import React, { useState } from "react";
import admin1 from "../../assets/admin1.svg";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("myAds");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };


  return (
    <div className="">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={admin1} alt="" />
            <div>
              <span className="text-white font-medium text-xl ">AdWiz</span>
              <p className="text-[#625275] text-sm font-normal -tracking-[0.56px]">
                Ads you saved from FB, TikTok & LinkedIn
              </p>
            </div>
          </div>
          <div className="flex items-center border-[1px] border-borderColor rounded-full">
          <button
        className={`${
          activeButton === "myAds" ? "bg-white" : "bg-transparent"
        } flex rounded-[100px] py-2 px-5 gap-2 ${
          activeButton === "myAds" ? "text-black" : "text-white"
        } font-medium`}
        onClick={() => handleButtonClick("myAds")}
      >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M11.1096 11.7151C11.0366 11.7059 10.9627 11.7059 10.8896 11.7151C10.1122 11.6889 9.37547 11.3616 8.83496 10.8023C8.29444 10.243 7.99252 9.49543 7.99296 8.71761C7.99296 7.05844 9.33129 5.71094 10.9996 5.71094C11.7874 5.70957 12.5442 6.01785 13.1069 6.56931C13.6695 7.12077 13.9929 7.87124 14.0073 8.65893C14.0218 9.44662 13.7261 10.2084 13.184 10.7801C12.642 11.3518 11.897 11.6876 11.1096 11.7151ZM17.178 17.7651C15.4934 19.3134 13.2877 20.1708 10.9996 20.1668C8.61629 20.1668 6.45296 19.2593 4.82129 17.7651C4.91296 16.9034 5.46296 16.0601 6.44379 15.4001C8.95546 13.7318 13.0621 13.7318 15.5555 15.4001C16.5363 16.0601 17.0863 16.9034 17.178 17.7651Z"
                  stroke="#100919"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.9997 20.1663C16.0624 20.1663 20.1663 16.0624 20.1663 10.9997C20.1663 5.93692 16.0624 1.83301 10.9997 1.83301C5.93692 1.83301 1.83301 5.93692 1.83301 10.9997C1.83301 16.0624 5.93692 20.1663 10.9997 20.1663Z"
                  stroke="#100919"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              My Ads
            </button>
            <button
        className={`${
          activeButton === "brands" ? "bg-white" : "bg-transparent"
        } flex rounded-[100px] py-2 px-5 gap-2 ${
          activeButton === "brands" ? "text-black" : "text-white"
        } font-medium`}
        onClick={() => handleButtonClick("brands")}
      >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
              >
                <path
                  d="M4.85383 18.5625V5.27084C4.85383 4.25831 5.67465 3.4375 6.68717 3.4375H16.3122C17.3247 3.4375 18.1455 4.25831 18.1455 5.27084V18.5625M4.85383 18.5625H18.1455M4.85383 18.5625H3.02051M18.1455 18.5625H19.9788M8.52051 7.10416H9.89551M13.1038 7.10416H14.4788M8.52051 10.7708H9.89551M13.1038 10.7708H14.4788M8.52051 14.4375H9.89551M13.1038 14.4375H14.4788"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Brands
            </button>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.33301 9.99983V7.03316C3.33301 3.34983 5.94134 1.8415 9.13301 3.68316L11.708 5.1665L14.283 6.64983C17.4747 8.4915 17.4747 11.5082 14.283 13.3498L11.708 14.8332L9.13301 16.3165C5.94134 18.1582 3.33301 16.6498 3.33301 12.9665V9.99983Z"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="text-white font-medium text-[15px]">Tutorial</span>
          </div>
          <div className="flex gap-2 py-3 items-center px-6 border-[1px] rounded-[10px] border-[#CA503B]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_2255_39117)">
                <path
                  d="M6.66699 13.3337H4.52533C2.61699 13.3337 1.66699 12.3837 1.66699 10.4753V4.52533C1.66699 2.61699 2.61699 1.66699 4.52533 1.66699H8.33366C10.242 1.66699 11.192 2.61699 11.192 4.52533"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.3919 12.5003H15.1086M13.7503 13.8587V11.142M15.4753 18.3337H11.6669C9.75859 18.3337 8.80859 17.3837 8.80859 15.4753V9.52533C8.80859 7.61699 9.75859 6.66699 11.6669 6.66699H15.4753C17.3836 6.66699 18.3336 7.61699 18.3336 9.52533V15.4753C18.3336 17.3837 17.3836 18.3337 15.4753 18.3337Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2255_39117">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-white text-[15px] font-medium">
              Create New
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
