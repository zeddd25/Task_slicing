import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsClipboardCheck } from "react-icons/bs";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { RxPencil2 } from "react-icons/rx";
import { HiOutlineLogout } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi"

const Sidebar = () => {
  
  const [show, setShow] = useState(false)

  return (
    <>
    <div className="w-[125px] h-[828px] flex flex-col fixed items-center gap-1 bg-[#FFFFFF] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-tr-[20px] rounded-br-[20px]">
      <NavLink
        to="/dashboard"
        className="text-[50px] text-[#292D32] hover:text-[#0038FF] mt-20 hover:scale-105 duration-200"
      >
        <AiOutlineHome className="icon" />
      </NavLink>

      <NavLink
        to="/tabel"
        className="text-[50px] text-[#292D32] hover:text-[#0038FF] mt-20 hover:scale-105 duration-200"
      >
        <BsClipboardCheck className="icon" />
      </NavLink>
      <NavLink
        to="/tambahwisata"
        className="text-[50px] text-[#292D32] hover:text-[#0038FF] mt-20 hover:scale-105 duration-200"
      >
        <AiOutlineFolderAdd className="icon" />
      </NavLink>
      <NavLink
        to="/ubahwisata"
        className="text-[50px] text-[#292D32] hover:text-[#0038FF] mt-20 hover:scale-105 duration-200"
      >
        <RxPencil2 className="icon" />
      </NavLink>
      <div className="w-[40.36px] h-[48px] top-[739px] left-[43px] absolute ">
        <NavLink
          to="#"
          onClick={() => setShow(true)}
          className="w-[50px] h-[50px] text-[60px] text-[#444658] hover:text-[#0038FF] mt-20"
        >
          <HiOutlineLogout />
        </NavLink>
      </div>
    </div>
    <div className="flex w-full items-center">
    {show ? (
        <div className="fixed w-full h-screen bg-black bg-opacity-50 flex justify-center items-center">
          <div className="w-[930px] h-[528px] rounded-[20px] bg-[#FFFFFF] flex flex-col">
            <div className="w-full h-[15%]  flex justify-end items-center px-4">
              <NavLink onClick={() => setShow(false)}>
                <TfiClose className="text-[40px] text-[#515151]" />
              </NavLink>
            </div>
            <div className="w-full h-[85%]  flex flex-col items-center justify-center gap-16 pb-5">
              <div>
                <h1 className="font-Inter font-bold text-[48px] text-[#6889ff]">
                  Anda yakin ingin Logout?
                </h1>
              </div>
              <div className="flex gap-10">
                <NavLink
                  onClick={() => setShow(false)}
                  className="w-[303px] h-[75px] bg-[#f6f6f6] px-[121px] py-[23px] text-[24px] text-center font-Inter font-bold rounded-[12px] text-[#515151]"
                >
                  Batal
                </NavLink>
                <NavLink to='/' className="w-[303px] h-[75px]  bg-[#6889ff] hover:bg-[#3D62E6] text-[24px] text-center px-[121] py-[20px] font-extrabold rounded-[12px] text-[#FFFFFF]">
                  Logout
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      </div>
    </>
  );
};

export default Sidebar;
