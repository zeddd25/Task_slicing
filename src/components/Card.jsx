import React from "react";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
      <NavLink to="/detail" className=" w-[466px] h-[400px] shadow-2xl rounded-[12px] bg-[#FFFFFF] hover:scale-105 duration-200">
        <div id="card" className="w-[466px] h-[258px] rounded-[12px]"></div>
        <div>
        <h1 className="w-[169px] h-[24px] font-Inter not-italic font-bold text-[20px] leading-[24px] text-[#000000] mt-2 ml-6">Wisata Air Terjun</h1>
        <p className="w-[321px] h-[24px] font-Inter font-normal text-[20px] not-italic leading-[36px] ml-6 mt-3 text-[#000000]">JI. Manggis VII Bantul, Yogyakarta<br />08313245783</p>
        </div>
    </NavLink>
  );
};

export default Card;
