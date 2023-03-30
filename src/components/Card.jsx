import React from "react";

const Card = ({ key, src, nama, address, city, phone }) => {
  return (
    <>
      <div
        key={key}
        className="w-[466px] h-[400px] shadow-2xl rounded-[12px] bg-[#FFFFFF] min-h-max hover:scale-105 duration-200"
      >
        <div className="w-[466px] h-[258px] rounded-[12px] min overflow-hidden">
          <img src={src} alt="photo" className="w-full" />
        </div>
        <div className="flex flex-wrap w-[466px] h-[10px]">
          <h1 className="w-full h-full font-Inter not-italic font-bold text-[20px] leading-[24px] text-[#000000] mt-2 ml-6">
            {nama}
          </h1>
          <p className="w-[450px] h-full font-Inter font-normal text-[20px] not-italic leading-[36px] ml-6 mt-3 text-[#000000]">
            {address}, {city}
            <br />
            {phone}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
