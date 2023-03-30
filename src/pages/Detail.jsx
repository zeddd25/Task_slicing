import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

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
        url: `https://frontendreq.pondokprogrammer.com/api/show/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      };

      axios
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
    return (
      <>
        <div className="flex flex-col gap-y-3 justify-start items-center h-screen">
          {data?.map((item) => {
            return (
              <div className="">
                <div className="flex justify-start items-center gap-x-[50px] mt-10 w-[1000px]">
                  <NavLink
                    to="/dashboard"
                    id="back"
                    className="w-[18px] h-[40px] hover:scale-110"
                  ></NavLink>
                  <h1 className="font-Inter font-bold text-left text-[32px] text-[#000000]">
                    {item.name}
                  </h1>
                </div>
                <div className="w-[1007px] h-[639px]">
                  <img src={item.photo} alt="" className="w-full h-full" />
                </div>
                <div className="flex justify-start flex-row gap-4 mt-3 w-[1007px] h-[150px]">
                  <div className="w-[50px] flex flex-col gap-4">
                    <i
                      id="location"
                      className="flex justify-center items-center w-[300px] h-[38px]"
                    ></i>
                    <i
                      id="message"
                      className="flex justify-center items-center w-[330px] h-[38px]"
                    ></i>
                    <i
                      id="phone"
                      className="flex justify-center items-center w-[260px] h-[38px]"
                    ></i>
                  </div>
                  <div className="w-[500px] h-[100px] flex flex-col gap-5 text-left font-Inter font-normal not-italic text-[24px] text-[#000000]">
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
