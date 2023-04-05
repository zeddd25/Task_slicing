import React from "react";

const Card = ({ key, src, nama, address, city, phone }) => {
  return (
    <>
      <div
        key={key}
        className="w-full h-[400px] flex flex-col shadow-2xl rounded-[12px] hover:scale-105 duration-200 sm:w-[400px] sm:h-[350px] md:w-[310px] lg:w-[389px] lg:h-[337px]"
      >
        <div className="rounded-[12px] overflow-hidden ">
          <img src={src} alt="photo" className="w-full h-[250px] sm:h-[200px] lg:w-[389px] lg:h-[217px]"/>
        </div>
        <div className="flex flex-wrap h-[10px]">
          <h1 className="not-italic font-bold text-[20px] leading-[24px] text-[#000000] mt-2 ml-2">
            {nama}
          </h1>
          <p className="h-full w-full font-normal text-[20px] not-italic  ml-2 text-[#000000]">
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
