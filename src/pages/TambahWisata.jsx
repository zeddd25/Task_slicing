import React from "react";
import Button from "../components/Button";
import Sidebar from "../components/Sidebar";

const TambahWisata = () => {
  const InputAlamat = (props) => {
    return (
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="w-[536px] h-[112px] rounded-[12px] font-normal p-10 bg-[#F6F6F6] text-[24px] font-Inter text-black placeholder:text-[#515151] outline-[#6889FF] left-[0%] right-[0%] top-[0%] bottom-[0%]"
      />
    );
  };

  const Input = (props) => {
    return (
      <input
        type={props.type}
        placeholder={props.placeholder}
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
            <h1>Tambahkan Wisata</h1>
          </div>
          <div className="flex justify-center items-center flex-col gap-y-[63px] h-[690px] mt-12 flex-wrap">
            <Input type="text" placeholder="Masukan Nama" />
            <Input type="email" placeholder="Masukan Email" />
            <Input type="text" placeholder="Masukan No. Telepon" />
            <Input type="email" placeholder="Masukan Kota" />
          </div>
        </div>
        <div className="flex flex-col justify-end flex-wrap items-center gap-y-[34px] h-[780px]">
          <InputAlamat
            type="text"
            placeholder="Masukan Alamat"
            className="w-[500px]"
          />
          <label htmlFor="gambar">
            <div className="flex flex-col justify-center items-center w-[538px] h-[367px] rounded-[12px] bg-[#F6F6F6] cursor-pointer">
              <img src="/public/images/gambar.svg" alt="" />
              <h1 className="font-Inter font-medium text-[24px] pt-5 text-[#515151]">
                Tambahkan Gambar
              </h1>
              <input type="file" id="gambar" hidden />
            </div>
          </label>
          <Button />
        </div>
      </div>
    </>
  );
};

export default TambahWisata;
