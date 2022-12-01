import React, { useState } from "react";
import FirstTime from "../components/timeline/FirstTime";
import SecondTime from "../components/timeline/SecondTime";
import ThirdTime from "../components/timeline/ThirdTime";

const TimeLine = () => {
  const [isActive, setIsActive] = useState("timeline1");

  const renderTimeline = () => {
    if (isActive === "timeline1") {
      return <FirstTime />;
    } else if (isActive === "timeline2") {
      return <SecondTime />;
    } else if (isActive === "timeline3") {
      return <ThirdTime />;
    }
  };

  return (
    <div className=" flex justify-between items-center px-72 mt-40">
      {/* timeline */}
      <div className="flex-1 ">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li
            className="hover:cursor-pointer"
            onClick={() => setIsActive("timeline1")}
          >
            <div className="mb-20 ml-4">
              <div
                className={`absolute w-10 h-10 bg-gray-200 rounded-full mt-1.5 -left-5 border border-white ${
                  isActive === "timeline1"
                    ? "dark:border-lightpurple dark:bg-lightpurple"
                    : "dark:border-gray-900 dark:bg-gray-700"
                }  flex items-center justify-center`}
              >
                1
              </div>
              <div className="ml-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Section Talks #1
                </h3>
                {/* <p className=" text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p> */}
                <time className="mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  4 Desember 2022
                </time>
              </div>
            </div>
          </li>
          <li
            className="hover:cursor-pointer"
            onClick={() => setIsActive("timeline2")}
          >
            <div className="mb-20 ml-4">
              <div
                className={`absolute w-10 h-10 bg-gray-200 rounded-full mt-1.5 -left-5 border border-white ${
                  isActive === "timeline2"
                    ? "dark:border-lightpurple dark:bg-lightpurple"
                    : "dark:border-gray-900 dark:bg-gray-700"
                }  flex items-center justify-center`}
              >
                2
              </div>
              <div className="ml-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Section Talks #2
                </h3>
                {/* <p className=" text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p> */}
                <time className="mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  5 Desember 2022
                </time>
              </div>
            </div>
          </li>
          <li
            className="hover:cursor-pointer"
            onClick={() => setIsActive("timeline3")}
          >
            <div className="mb-1 ml-4">
              <div
                className={`absolute w-10 h-10 bg-gray-200 rounded-full mt-1.5 -left-5 border border-white ${
                  isActive === "timeline3"
                    ? "dark:border-lightpurple dark:bg-lightpurple"
                    : "dark:border-gray-900 dark:bg-gray-700"
                } dark:border-gray-900 dark:bg-gray-700 flex items-center justify-center`}
              >
                3
              </div>
              <div className="ml-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Section Talks #2
                </h3>
                {/* <p className=" text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p> */}
                <time className="mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  12 Desember 2022
                </time>
              </div>
            </div>
          </li>
        </ol>
      </div>

      <div className="flex-1">{renderTimeline()}</div>
    </div>
  );
};

export default TimeLine;
