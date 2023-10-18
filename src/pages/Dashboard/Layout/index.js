import React from "react";
import Logo from "../../../assets/logo.svg";
import Search from "../../../assets/search.svg";
import admin1 from "../../../assets/admin1.svg";
import admin2 from "../../../assets/admin2.svg";
import admin3 from "../../../assets/admin3.svg";
import commandLine from "../../../assets/command-line.svg";

const Index = ({ children}) => {
  
  return (
    <div className="flex min-h-screen">
      <div className="bg-[#100919] flex flex-col gap-5 w-1/4 border-r-[1px] border-borderColor p-4 ">
        <div className="flex mx-auto">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex justify-between py-3 border-b-[2px]  border-borderColor">
          <img src={Search} alt="search" />
          <input
            type="search"
            placeholder="search"
            className="outline-none bg-transparent caret-white text-white text-sm placeholder:text-sm placeholder:text-white"
          />
          <div className="flex gap-2">
            <img
              src={commandLine}
              alt=""
              className="border-[2px] border-borderColor py-1 px-1 text-white text-sm rounded-[4px]"
            />
            <span className="border-[2px] border-borderColor py-1 px-2 text-white text-sm rounded-[4px]">
              K
            </span>
          </div>
        </div>
        <div className="flex flex-col py-2 pb-4 border-b-2 border-borderColor">
          <ul className="">
            {tabsData.map((tab) => (
              <li
                key={tab.id}
                className="mb-1 py-2 px-2"
                style={tab.styles}
              >
                <a href={tab.route} className="flex items-center gap-3 py-1">
                  <div className="mr-2">
                    <img src={tab.image} alt="" />
                  </div>
                  <span className="text-[#FFF] text-sm font-normal">
                    {tab.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default Index;

const tabsData = [
  {
    id: 1,
    title: "Ad Wiz",
    route: "/add_wizard",
    image: admin1,
    styles: {
      borderRadius: "10px",
      border: "1px solid var(--ad-wiz, #CA503B)",
      background:
        "linear-gradient(105deg, rgba(202, 80, 59, 0.10) -4.11%, rgba(245, 120, 98, 0.10) 66.38%, rgba(255, 176, 163, 0.10) 93.83%)",
      backdropFilter: "blur(2.5px)",
      margin: "10px 0",
    },
  },
  {
    id: 2,
    title: "The archive",
    route: "/",
    image: admin2,
    styles: {
      borderRadius: "10px",
      border: "1px solid var(--ad-wiz, #006d77)",
      background:
        "linear-gradient(105deg, rgba(100, 150, 200, 0.10) -4.11%, rgba(50, 100, 150, 0.10) 66.38%, rgba(20, 50, 100, 0.10) 93.83%)",
      backdropFilter: "blur(2.5px)",
      margin: "10px 0",
    },
  },
  {
    id: 3,
    title: "Spellbook",
    route: "/",
    image: admin3,
    styles: {
      borderRadius: "10px",
      border: "1px solid var(--ad-wiz, #8338ec)",
      background:
        "linear-gradient(105deg, rgba(202, 80, 59, 0.10) -4.11%, rgba(245, 120, 98, 0.10) 66.38%, rgba(255, 176, 163, 0.10) 93.83%)",
      backdropFilter: "blur(2.5px)",
      margin: "10px 0",
    },
  },
];
