import React from "react";
import Button from "../components/Button";
import Sidebar from "../components/Sidebar";

const UbahWisata = () => {
  const InputAlamat = (props) => {
    return (
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        readOnly={props.readOnly}
        className="w-[536px] h-[112px] rounded-[12px] font-normal p-10 bg-[#F6F6F6] text-[24px] font-Inter text-black placeholder:text-[#515151] outline-[#6889FF] left-[0%] right-[0%] top-[0%] bottom-[0%]"
      />
    );
  };

  const Input = (props) => {
    return (
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        readOnly={props.readOnly}
        className="w-[418px] h-[75px] rounded-[12px] font-normal p-10 bg-[#F6F6F6] text-[24px] font-Inter text-black placeholder:text-[#515151] outline-[#6889FF] left-[0%] right-[0%] top-[0%] bottom-[0%]"
      />
    );
  };

  return (
    <>
      <div className="w-[125px] h-screen absolute flex justify-center items-center ">
        <Sidebar />
      </div>
      <div className="flex flex-row justify-center items-center h-screen gap-[99px] mt-auto ">
        <div className="flex justify-center items-center h-screen">
          <div className="absolute top-[110px] left-[435px] font-sans not-italic font-bold text-[40px] leading-[48.41px] text-[#6889FF]">
            <h1>Ubah Wisata</h1>
          </div>
          <div className="flex justify-center items-center flex-col gap-y-[63px] h-[690px] mt-12 flex-wrap">
          <Input type="text" value="Wisata Air Terjun" readOnly />
            <Input type="email" value="airterjun@mail.com" readOnly />
            <Input type="text" value="082313452351" readOnly />
            <Input type="email" value="Yogyakarta" readOnly />
          </div>
        </div>
        <div className="flex flex-col justify-end flex-wrap items-center gap-y-[34px] h-[780px]">
          <InputAlamat
            type="text"
            value="Jl. Manggis VII Bantul"
            className="w-[500px]"
            readOnly
          />
          <label htmlFor="gambar">
            <div className="flex flex-col justify-center items-center w-[538px] h-[367px] rounded-[12px] bg-[#F6F6F6] cursor-pointer">
              <img
                src="/public/images/my.jpg"
                className="w-[538px] h-[367px] rounded-xl"
                alt=""
              />
              <input type="file" id="gambar" hidden />
            </div>
          </label>
          <Button />
        </div>
      </div>
    </>
  );
};

export default UbahWisata;
