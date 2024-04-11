import React from "react";
import Image from "../Image/img-1.png";
import Ellise from "../Image/Ellipse 2.png";
import Chevron from "../Image/chevron-right.png";
import round from "../Image/Ellipse 1.png";

function Page1() {
  return (
    <div className="w-[100vw] min-h-full bg-slate-200">
      <div className="flex items-center justify-center">
        <div className="w-[360px] bg-white shadow-lg shadow-indigo-500/40 p-5 mt-1">
          <p className="text-right">
            <a className="text-blue-700 underline" href="#">
              skip
            </a>
          </p>
          <img
            className="w-[290px]  mt-8 ml-8 text-center"
            src={Image}
            alt=""
          />
          <h3 className="mt-10 font-semibold text-[20px] font-Montserrat ">
            Track Your Goal
          </h3>
          <div className="leading-[19.5px] text-[16px] font-medium mt-2 text-[#787878] font-Montserrat tracking-widest ">
            Don’t worry if you have trouble <br />
            determining your goals, We can help you determine your goals and
            track your goals
          </div>
          <div className="w-[60px] h-[60px] relative mt-16 mb-3 float-right ">
            <img className="absolute left-6 bottom-5 " src={Ellise} alt="" />
            <img className="absolute z-10 top-3 left-3" src={Chevron} alt="" />
            <img className="absolute" src={round} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
