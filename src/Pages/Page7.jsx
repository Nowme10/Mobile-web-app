import React from "react";
import Arrow from "../Image/Vectorarrow.png";
import status from "../Image/Status.png";

import round from "../Image/Ellipse 1.png";
import search from "../Image/Vector (7).png";
import group from "../Image/Group 5.png";
import victorright from "../Image/Vector (8).png";
import victorleft from "../Image/Vectorarrow.png";
import calender from "../Image/Calendar.png";
import circle from "../Image/Group 6 (1).png";
import plus from "../Image/+.png";

function Page7() {
  return (
    <div className="w-[100vw] min-h-full bg-slate-200 ">
      <div className="flex items-center justify-center">
        <div className="w-[400px] bg-white shadow-lg rounded-lg shadow-indigo-500/40   mt-1 ">
          <div>
            <img className=" " src={status} alt="" />
            <div className="flex items-center gap-14">
              <div className="w-[20px] h-[20px]  bg-[#F1F1F1] ml-3 ">
                <img className="ml-1.5" src={Arrow} alt="" />
              </div>
              <p className="text-[20px] font-Montserrat font-semibold text-[#2C2B2B] ml-8 ">
                Workout Schedule
              </p>
            </div>
            {/* second line */}
            <div className="flex justify-center items-center mt-[-20px] gap-3">
              <img src={victorleft} alt="" />
              <p className="text-[12px]">Feb 2024</p>
              <img src={victorright} alt="" />
            </div>
            {/* line-3 */}
            <div className="ml-6">
              <img src={calender} alt="" />
            </div>
          </div>
          {/* line-4 */}
          <div className=" w-full relative mb-2 mt-8 ">
            <p className="text-[12px] pl-2">06:00 AM</p>

            <p className=" text-[12px] pt-2 pl-2 border border-solid border-b-0 border-l-0 border-r-0 ">
              07:00 AM
              <span
                className=" absolute pt-1 font-Montserrat tracking-wider right-4 p-2 mt-4 text-white  ml-10 rounded-xl "
                style={{ backgroundImage: "linear-gradient(#D3A4F4, #E9B1E0)" }}
              >
                Ab Workout, 7:30am
              </span>
            </p>
            <p className=" text-[12px] pt-2 pl-2 border border-solid border-b-0 border-l-0 border-r-0 ">
              08:00 AM
            </p>
            <p className=" text-[12px] pt-2 pl-2 border border-solid border-b-0 border-l-0 border-r-0 ">
              09:00 AM
              <span
                className=" absolute pt-1 tracking-wider font-Montserrat p-2 mt-1 text-white  ml-10 rounded-xl "
                style={{ backgroundImage: "linear-gradient(#D3A4F4, #E9B1E0)" }}
              >
                Upperbody Workout, 9am
              </span>
            </p>
            <p className=" bg-white relative z-20 text-[12px] pt-1 pl-2 border border-solid border-b-0 border-l-0 border-r-0 ">
              10:00 AM
            </p>
            <p className=" text-[12px] pt-2 pl-2 border border-solid border-b-0 border-l-0 border-r-0 ">
              11:00 AM
            </p>
            <p className=" text-[12px] pt-2 pl-2 border border-solid border-b-0 border-l-0 border-r-0 ">
              12:00 AM
            </p>
            <p className=" text-[12px] pt-2 pl-2 border border-solid border-b-0 border-l-0 border-r-0 ">
              01:00 AM
            </p>

            <p className=" text-[12px] pt-2  pl-2 border border-solid border-0.5 border-b-0 border-l-0 border-r-0 ">
              02:00 AM
              <span className="border text-[12px] font-Montserrat ml-14 px-4  border-black bg-[#F1F1F1] p-2 rounded-xl">
                Lowerbody Workout, 3pm
              </span>
            </p>
            <p className=" text-[12px] pt-2  pl-2 border border-solid border-0.5 border-b-0 border-l-0 border-r-0 ">
              03:00 AM
            </p>

            <img
              className=" absolute h-16 right-2 bottom-[30px]"
              src={circle}
              alt=""
            />
            <img
              className=" absolute right-[32px] bottom-14  "
              src={plus}
              alt=""
            />

            <p className=" text-[12px] pt-2 pl-2 border border-solid border-0.5 border-0.5 border-b-0 border-l-0 border-r-0 ">
              04:00 AM
            </p>
            <p className=" text-[12px] py-2 pl-2 border border-solid border-0.5   border-b-1 border-l-0 border-r-0 ">
              05:00 AM
            </p>
          </div>
          {/* line-5 */}
          <div className=" relative mt-14">
            <div className=" text-center  z-30 mt-[-49px] top-[-20px] relative">
              <img className=" absolute bottom-6 ml-5" src={search} alt="" />
              <img className=" w-16" src={round} alt="" />
            </div>
            <div className=" w-full bg-white h-20 flex items-center justify-center mt-[-65px] z-20 relative">
              <img src={group} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page7;
