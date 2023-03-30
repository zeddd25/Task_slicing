import React, { useEffect, useState } from "react";
import { GoTrashcan } from "react-icons/go";
import { TfiPencil } from "react-icons/tfi";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import Sidebar from "../components/Sidebar";
import { NavLink, useNavigate } from "react-router-dom";
import instance from "../api";
import axios from "axios";
import { useParams } from "react-router-dom";

const Table = () => {
  // <==========================> //
  const navigate = useNavigate();
  // <================================> //
  const [data, setData] = useState([]);
  // <=========================================> //
  const [loading, setLoading] = useState(false);
  // <=========================================> //
  const { id } = useParams(); // mendapatkan nilai id dari URL
  // <===============================================> //
  useEffect(() => {
    const checkUserToken = () => {
      const userToken = localStorage.getItem("token");
      if (!userToken || userToken === "undefined") {
        return navigate("/");
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
        url: "/index",
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

  const handleDelete = (id) => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `https://frontendreq.pondokprogrammer.com/api/delete/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        const newData = data.filter((item) => item.id !== id)
        setData(newData)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) {
    return (
      <div className="loader">
        <div className="justify-content-center jimu-primary-loading"></div>
      </div>
    );
  } else {
    // <=============================================> //

    return (
      <div>
        <div className="w-[125px] h-screen absolute z-10 flex justify-center items-center">
          <Sidebar />
        </div>
        <div className="flex justify-center items-center h-screen">
          <div className="flex justify-center items-center rounded-[20px] shadow-lg w-full fixed h-full">
            <table className="w-[1101px] h-[639px] rounded-t-[20px] bg-[#E7EAF9]">
              <thead className="bg-[#E7EAF0] h-[83.97px] font-poppins leading-[27.5px]">
                <tr>
                  <th className="px-6 py-3 text-[16px] font-bold text-center text-[#212529] border-b rounded-tl-[20px]">
                    No
                  </th>
                  <th className="py-3 text-[16px] font-bold text-start text-[#212529] border-b">
                    Nama
                  </th>
                  <th className="px-6 py-3 text-[16px] font-bold text-center text-[#212529] border-b">
                    Alamat
                  </th>
                  <th className="px-6 py-3 text-left text-[16px] font-bold text-[#212529] border-b">
                    No. Telepon
                  </th>
                  <th className="pl-10 py-3 text-start text-[16px] font-bold text-[#212529] border-b">
                    Email
                  </th>
                  <th className="px-6 py-3 text-center text-[16px] font-bold text-[#212529] border-b rounded-tr-[20px]">
                    Aksi
                  </th>
                </tr>
                <hr className="w-[1103px] h-[5px] bg-[#E7EAF0] fixed mt-[4px]"></hr>
              </thead>
              <tbody className="bg-[#FFFFFF] divide-gray-200">
                {data?.map((item, index) => (
                  <tr key={item.id} className="h-[50px] border-b-[3px]">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="py-4 whitespace-nowrap text-sm text-start text-gray-500">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      {item.address} <br />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.phone}
                    </td>
                    <td className="py-4 whitespace-nowrap text-sm text-start text-gray-500 ">
                      {item.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="flex gap-2 justify-center text-[#16192C] text-[22px]">
                        <NavLink to={`/detail/${item.id}`}>
                          <button className="flex justify-center items-center w-[44.55px] h-[51.23px] bg-[#FFFFFF] border-[1px] border-[#E8EBF0] rounded-[6px] text-yellow-400 hover:scale-105 hover:text-slate-500 active:opacity-[0.8]">
                            <MdOutlineReportGmailerrorred />
                          </button>
                        </NavLink>
                        <NavLink to={`/updateWisata/${item.id}`}>
                          <button className="flex justify-center items-center w-[44.55px] h-[51.23px] bg-[#FFFFFF] border-[1px] border-[#E8EBF0] rounded-[6px] text-blue-400 hover:scale-105 hover:text-slate-500">
                            <TfiPencil />
                          </button>
                        </NavLink>
                        <button className="flex justify-center items-center w-[44.55px] h-[51.23px] bg-[#FFFFFF] border-[1px] border-[#E8EBF0] rounded-[6px] text-red-400 hover:scale-105 hover:text-slate-500">
                          <GoTrashcan onClick={() => handleDelete(item.id)} />
                        </button>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};

export default Table;
