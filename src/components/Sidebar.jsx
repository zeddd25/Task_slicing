import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { TbClipboardCheck, TbSquareRoundedArrowRight, TbSquareRoundedPlus } from "react-icons/tb";
// import { RxPencil2 } from "react-icons/rx";
import { TbHome } from "react-icons/tb";
import { TfiClose } from "react-icons/tfi";

const Sidebar = ({ onClick }) => {
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("namaUser");
  };

  const [namaUser, setNamaUser] = useState("");

  useEffect(() => {
    const namaUserLocal = localStorage.getItem("namaUser");
    if (namaUserLocal) {
      setNamaUser(namaUserLocal);
    }
  }, []);

  const [show, setShow] = useState(false);

  return (
    <>
      <div className="w-[250px] h-full flex flex-col fixed pl-10 gap-y-10 bg-[#FFFFFF] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] md:w-[100px] md:h-[720px] md:justify-center md:items-center md:rounded-r-3xl md:pl-0 md:pt-10">
        <h1 className="capitalize font-bold text-[30px] leading-[50px] mt-14 md:hidden">
          Hi, {namaUser}!
        </h1>
        <NavLink
          to="/dashboard"
          className="flex flex-row-reverse justify-end items-end gap-6 text-[#292D32] hover:text-[#0038FF] hover:scale-105 duration-200"
        >
          <p className="text-[22px] md:hidden">Beranda</p>
          <TbHome className="icon w-[50px] h-[50px]"/>
        </NavLink>
        <NavLink
          to="/tabel/:id"
          className=" flex flex-row-reverse justify-end items-end gap-6 text-[#292D32] hover:text-[#0038FF] hover:scale-105 duration-200"
        >
          <p className="text-[22px] md:hidden">Tabel</p>
          <TbClipboardCheck className="icon w-[50px] h-[50px]"/>
        </NavLink>
        <NavLink
          to="/tambahwisata"
          className="flex flex-row-reverse justify-end items-end gap-6 text-[#292D32] hover:text-[#0038FF] hover:scale-105 duration-200"
        >
          <p className="text-[22px] md:hidden">Tambah</p>
          <TbSquareRoundedPlus className="icon w-[50px] h-[50px]"/>
        </NavLink>
        {/* <NavLink
        to="/updatewisata"
        className="text-[50px] text-[#292D32] hover:text-[#0038FF] mt-20 hover:scale-105 duration-200"
      >
        <RxPencil2 className="icon" />
      </NavLink> */}
        <NavLink
          to="#"
          onClick={() => setShow(true)}
          className="text-[58px] flex flex-row-reverse justify-end items-center gap-4 mt-60 md:mt-80 text-[#444658] hover:text-[#0038FF]"
        >
          <p className="text-[22px] md:hidden">Keluar</p>
          <TbSquareRoundedArrowRight />
        </NavLink>
        <div></div>
      </div>
      {show ? (
        <div className="bg-black bg-opacity-50 w-screen flex h-screen items-center lg:h-[100vw]">
          <div className="z-10 w-full">
            <div className="h-screen flex justify-center items-center md:w-screen">
              <div className=" h-[263px] w-[400px] rounded-[20px] px-4 bg-[#FFFFFF] shadow-xl lg:w-[830px] lg:h-[428px] lg:text-[48px]">
                <div className="h-[15%] flex justify-end items-center">
                  <NavLink onClick={() => setShow(false)}>
                    <TfiClose className="text-[30px] text-[#515151]" />
                  </NavLink>
                </div>
                <div className="h-[85%] flex flex-col items-center justify-center gap-16 pb-5">
                  <div>
                    <h1 className="font-bold text-[28px] text-[#6889ff] lg:text-[48px]">
                      Anda yakin ingin Logout?
                    </h1>
                  </div>
                  <div className="w-full flex gap-5 lg:justify-center">
                    <NavLink
                      onClick={() => setShow(false)}
                      className="w-[170px] h-[65px] bg-[#F6F6F6] hover: text-[24px] flex justify-center items-center px-[121] py-[20px] font-extrabold rounded-[12px] text-[#696969] lg:w-[303px] lg:h-[75px]"
                    >
                      Batal
                    </NavLink>
                    <NavLink
                      to="/"
                      onClick={logOut}
                      className="w-[170px] h-[65px] bg-[#6889ff] hover:bg-[#3D62E6] text-[24px] flex justify-center items-center px-[121] py-[20px] font-extrabold rounded-[12px] text-[#FFFFFF] lg:w-[303px] lg:h-[75px]"
                    >
                      Logout
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div
        className="bg-black -z-50 max-w-full h-full bg-opacity-50 md:hidden"
        onClick={onClick}
      ></div>
    </>
  );
};

export default Sidebar;
