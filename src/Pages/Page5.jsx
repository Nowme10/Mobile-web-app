import React from "react";
import Google from "../Image/flat-color-icons_google.png";
import Facebok from "../Image/Vector.png";
import status from "../Image/Status.png";

function Page5() {
  return (
    <div className="w-[100vw] min-h-full bg-slate-200 ">
      <div className="flex items-center justify-center">
        <div className="w-[360px] bg-white shadow-lg shadow-indigo-500/40 p-5 mt-1">
          <img className="mt-[-20px] " src={status} alt="" />
          <p className="text-[20px] font-Montserrat font-semibold text-[#2C2B2B] text-center">
            What are your goals?
          </p>
          <div className="flex flex-col gap-4 mt-10">
            <div className=" h-[50px] relative rounded-lg border-none bg-[#F1F1F1] pl-6 flex items-center justify-between">
              <p className="text-[12px]">Weight Loss</p>
              <input className="mr-6 w-[22px] " type="Checkbox" />
            </div>
            <div className=" h-[50px] relative rounded-lg border-none bg-[#F1F1F1] pl-6 flex items-center justify-between">
              <p className="text-[12px]">Muscle Gain</p>
              <input className="mr-6 w-[22px] " type="Checkbox" />
            </div>

            <div className=" h-[50px] relative rounded-lg border-none bg-[#F1F1F1] pl-6 flex items-center justify-between">
              <p className="text-[12px]">Flexibility and Mobility</p>
              <input className="mr-6 w-[22px] " type="Checkbox" />
            </div>

            <div className=" h-[50px] relative rounded-lg border-none bg-[#F1F1F1] pl-6 flex items-center justify-between">
              <p className="text-[12px]">General Fitness</p>
              <input className="mr-6 w-[22px] " type="Checkbox" />
            </div>

            <div className=" h-[50px] relative rounded-lg border-none bg-[#F1F1F1] pl-6 flex items-center justify-between">
              <p className="text-[12px]">Event - specific training</p>
              <input className="mr-6 w-[22px] " type="Checkbox" />
            </div>

            <div className=" h-[50px] relative rounded-lg border-none bg-[#F1F1F1] pl-6 flex items-center justify-between">
              <p className="text-[12px]">Mindfulness and Mental Health</p>
              <input className="mr-6 w-[22px] " type="Checkbox" />
            </div>
          </div>
          <button className="w-[100%] h-[50px] cursor-pointer mt-20 mb-8 rounded-lg border-none  bg-[#7B91FF] text-white font-medium ">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page5;
