import React from "react";
import Arrow from "../Image/Vectorarrow.png";
import status from "../Image/Status.png";
import union from '../Image/Union.png'
import value from '../Image/Value.png'
import Frame from '../Image/Frame 17.png'
import Ellipse from '../Image/Ellipse 53.png'
import Elipse from '../Image/Ellipse 54.png'
import Toggle from '../Image/Toggle.png'

function Page6() {
  return (
    <div className="w-[100vw] min-h-full bg-slate-200 ">
      <div className="flex items-center justify-center">
        <div className="w-[360px] bg-white shadow-lg shadow-indigo-500/40 p-5 mt-1 ">
        <img className="mt-[-20px] " src={status} alt="" />
          <div className="flex items-center gap-11" >          
            <div className="w-[20px] h-[20px]  bg-[#F1F1F1] ml-3 "  >
              <img className="ml-1.5"  src={Arrow} alt="" />
            </div>
            <p className="text-[20px] font-Montserrat font-semibold text-[#2C2B2B] ml-8 ">
              Workout Tracker?
            </p>
          </div>
          {/* second line */}
         <div className="flex justify-center gap-12 ml-24">
            <div className="flex flex-col items-center mr-2 " >
                <p className="text-[11.2px] font-Montserrat ">Good job</p>
                <img className="mt-[-10px]" src={union} alt="" />
            </div>
            <div className="flex flex-col items-center mr-1  ">
            <p className="text-[11.2px] font-Montserrat">less then 320cal</p>
                <img className="mt-[-10px] " src={union} alt="" />
            </div>
         </div>
          {/* third line  */}
           <div className="ml-2">
        <img src={value} alt="" />
           </div>
           {/* forth line */}
           <div className="mt-3 ml-2">
            <img src={Frame} alt="" />
           </div>
           {/* line-5 */}
           <div className="mt-8 flex justify-between items-center">
            <p className=" font-Montserrat font-semibold tracking-wide text-[#2C2B2B]">Upcoming Workout</p>
            <p className="text-[12px] text-[#7F7F7F] mr-1 ">See more</p>
           </div>
           {/* line-6 */}
           <div className="w-[343px] h-[75px] shadow-lg flex rounded-md justify-between items-center px-3 my-1 ">
            <div className="flex items-center gap-3">
                <div>
                <img src={Ellipse} alt="" />
                </div>
                <div>
                    <p className="text-[12px] font-Montserrat tracking-wider">Full Body Workout</p>
                    <p className="text-[10px] font-Montserrat tracking-wider mt-[-8px] text-[#7F7F7F]">Today 3pm</p>
                </div>
            </div>
            <div>
              <img src={Toggle} alt="" />
            </div>
           </div>
           {/* line-7 */}
           <div className="w-[343px] h-[75px] shadow-lg flex rounded-md justify-between items-center px-3 my-1 mt-1 ">
            <div className="flex items-center gap-3">
                <div>
                <img src={Elipse} alt="" />
                </div>
                <div>
                    <p className="text-[12px] font-Montserrat tracking-wider">Upper Body Workout</p>
                    <p className="text-[10px] font-Montserrat tracking-wider text-[#7F7F7F] mt-[-8px]">4 Feb, 3:30 pm</p>
                </div>
            </div>
            <div>
              <img src={Toggle} alt="" />
            </div>
           </div>
           {/* line-8 */}
           <p className="text-[16px] tracking-wider font-semibold">What Do You Want to Train</p>
           {/* line-9 */}
        </div>
      </div>
    </div>
  );
}

export default Page6;
