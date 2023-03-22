import React from "react";
import { NavLink } from "react-router-dom";

const Detail = () => {
  return (
    <>
      <div className="flex flex-col gap-y-3 justify-start items-center h-screen">
        <div className="flex justify-start items-center gap-x-[50px] mt-10 w-[1000px]">
          <NavLink to="/dashboard" id="back" className="w-[18px] h-[40px] hover:scale-110"></NavLink>
          <h1 className="font-Inter font-bold text-left text-[32px] text-[#000000]">
            Wisata Air Terjun
          </h1>
        </div>
        <div
          id="detail-bg"
          className="w-[1007px] h-[639px] rounded-[12px]"
        ></div>
        <div className="flex justify-start flex-col gap-4 mt-3 w-[1007px] h-[150px]">
        <i id="location" className="flex justify-center items-center w-[480px] h-[38px] text-right font-Inter font-normal not-italic text-[24px] text-[#000000]">
            <h1>Jl. Manggis VII Bantul, Yogyakarta</h1>
        </i>
        <i id="message" className="flex justify-center items-center w-[305px] h-[38px] text-right font-Inter font-normal not-italic text-[24px] text-[#000000]">
        <h1>airterjun.mail.com</h1>
        </i>
        <i id="phone" className="flex justify-center items-center w-[275px] h-[38px] text-right font-Inter font-normal not-italic text-[24px] text-[#000000]">
        <h1>082313452351</h1>
        </i>
        </div>
      </div>
    </>
  );
};

export default Detail;
