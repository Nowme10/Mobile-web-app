import React from "react";
import Google from "../Image/flat-color-icons_google.png";
import Facebok from "../Image/Vector.png";
import EyeOff from "../Image/eye-off.png";
import status from "../Image/Status.png";

function Page4() {
  return (
    <div className="w-[100vw] min-h-full bg-slate-200 ">
      <div className="flex items-center justify-center">
        <div className="w-[360px] bg-white shadow-lg rounded-lg shadow-indigo-500/40 p-5 mt-1">
          <img className="mt-[-20px] " src={status} alt="" />
          <p className="text-[20px] font-Montserrat font-semibold text-[#2C2B2B]">
            Welcome Back
          </p>
          <div className="flex flex-col gap-8 mt-10 relative">
            <input
              className="h-[50px] rounded-lg border-none bg-[#F1F1F1] pl-6"
              type="email"
              placeholder="Email"
            />
            <div className="absolute right-4 bottom-4">
              <img className="h-4 " src={EyeOff} alt="" />
            </div>
            <input
              className="h-[50px] rounded-lg border-none bg-[#F1F1F1] pl-6"
              type="password"
              placeholder="Password"
            />
          </div>
          <p className="leading-[19.5px] font-Montserrat text-[12px] ml-4 tracking-[0.07rem] font-medium text-[#7F7F7F]">
            <a href="#">Forgot your password?</a>{" "}
          </p>

          <button className="w-[100%] h-[50px] cursor-pointer mt-16 mb-3 rounded-lg border-none  bg-[#7B91FF] text-white font-medium ">
            Sign In
          </button>
          <div className="flex items-center gap-2   my-3 ml-2">
            <div className="w-[155px] h-[1px] bg-[#7F7F7F]"></div>
            <div>Or</div>
            <div className="w-[155px] h-[1px] bg-[#7F7F7F]"></div>
          </div>
          <div className="flex justify-center gap-5 mt-4">
            <div className="w-[44px] h-[44px]  border-solid border-[1px] rounded-md border-[#7F7F7F] flex justify-center items-center ">
              <img src={Google} alt="" />
            </div>
            <div className="w-[44px] h-[44px]  border-solid border-[1px] rounded-md border-[#7F7F7F] flex justify-center items-center ">
              <img src={Facebok} alt="" />
            </div>
          </div>
          <p className="text-center my-5 font-Montserrat font-medium text-[#565656]">
            Don’t have an account yet? <a href="#">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page4;
