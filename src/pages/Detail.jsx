import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import instance from "../api";

const Detail = () => {
  const { id } = useParams();
  // <==========================> //
  const navigate = useNavigate();
  // <================================> //
  const [data, setData] = useState([]);
  // <=========================================> //
  const [loading, setLoading] = useState(false);

  // <===============================================> //
  useEffect(() => {
    const checkUserToken = () => {
      const userToken = localStorage.getItem("token");
      if (!userToken || userToken === "undefined") {
        return navigate("/dashboard");
      }
      checkUserToken();
    };
  }, []);

  // <==============================================> //
  useEffect(() => {
    setLoading(true);
    const getData = () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `/show/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      };

      instance
        .request(config)
        .then((response) => {
          setLoading(false);
          setData(response.data.data);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="justify-content-center jimu-primary-loading"></div>
      </div>
    );
  } else {
    const namaUser = localStorage.getItem("namaUser");

    return (
      <>
        <div className="">
          {data?.map((item) => {
            return (
              <div className="flex flex-col gap-y-5 md:justify-center md:items-center">
                <div className="flex justify-between items-center gap-x-[50px] h-[84px] px-4 bg-[#FFFFFF] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] md:hidden">
                  <NavLink
                    to="/dashboard"
                    className="text-5xl text-[#515151] hover:scale-110"
                  >
                    <IoIosArrowBack />
                  </NavLink>
                  <h1 className="font-Inter capitalize font-bold text-[36px] leading-[50px]">
                    Hi, {namaUser}
                  </h1>
                </div>
                <div className="font-Inter font-bold text-center text-[28px] text-[#000000] md:w-[536px] md:flex md:justify-start md:text-[32px] md:gap-20 lg:w-[1007px]">
                    <NavLink
                      to="/dashboard"
                      className="text-5xl text-left text-[#515151] hover:scale-110 hidden md:block"
                    >
                      <IoIosArrowBack />
                    </NavLink>
                  <h1>{item.name}</h1>
                </div>
                <div className="mx-4 md:flex md:justify-center md:items-center">
                  <img src={item.photo} alt="gambar wisata" className="rounded-md md:w-[536px] lg:w-[1007px]"/>
                </div>
                <div className="flex justify-start flex-row gap-4 h-[150px] mx-4 md:pr-64 lg:pr-[755px] lg:w-[1007px]">
                  <div className="w-[38px] flex flex-col gap-2">
                    <i id="location" className="w-[38px] h-[38px]"></i>
                    <i id="message" className="w-[38px] h-[38px]"></i>
                    <i id="phone" className="w-[38px] h-[38px]"></i>
                  </div>
                  <div className="flex-wrap flex flex-col leading-[45px] w-full font-Inter font-normal not-italic text-xl text-[#000000]">
                    <h1>{item.address}</h1>
                    <h1>{item.email}</h1>
                    <h1>{item.phone}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
};

export default Detail;
