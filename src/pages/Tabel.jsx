import axios from "axios";
import instance from "../api";
import { GoTrashcan } from "react-icons/go";
import { TfiPencil } from "react-icons/tfi";
import Sidebar from "../components/Sidebar";
import { HiMenuAlt2 } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

const Table = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams(); //
  const [showSidebar, setShowSidebar] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
    setIsSidebarOpen(!isSidebarOpen);
    if (isSidebarOpen) {
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowSidebar(false);
        setIsSidebarOpen(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    const checkUserToken = () => {
      const userToken = localStorage.getItem("token");
      if (!userToken || userToken === "undefined") {
        return navigate("/");
      }
      checkUserToken();
    };
  }, []);

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
    const isConfirmed = window.confirm("Anda yakin ingin menghapus data ini?");
    if (isConfirmed) {
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
          const newData = data.filter((item) => item.id !== id);
          setData(newData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  if (loading) {
    return (
      <div className="loader">
        <div className="justify-content-center jimu-primary-loading"></div>
      </div>
    );
  } else {
    
    const namaUser = localStorage.getItem("namaUser");

    return (
      <div className="w-full" ref={ref}>
        <div className="w-full flex">
          <nav
            className={`w-full h-full fixed justify-center items-center md:justify-start md:w-[125px] md:items-center md:flex lg:h-[828px] ${
              showSidebar ? "" : "hidden"
            }`}
          >
            <Sidebar onClick={() => setShowSidebar(false)} />
          </nav>
        </div>
        <div className="flex justify-between items-center h-[84px] px-4 bg-[#FFFFFF] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] md:hidden">
          <NavLink onClick={handleToggleSidebar}>
            <h1 className="text-[46px] text-[#515151] w-[49px] h-[5px] flex items-center ">
              <HiMenuAlt2 />
            </h1>
          </NavLink>
          <h1 className="capitalize font-bold text-[36px] leading-[50px]">
            Hi, {namaUser}
          </h1>
        </div>
        <div className="font-sans not-italic font-bold text-[40px] justify-center w-full pt-4 pl-10 md:pl-32 lg:pl-52 text-[#6889FF]">
          <h1>Tabel Wisata</h1>
        </div>
        <div className="flex justify-center items-center md:pl-14">
          <div className="rounded-[20px] w-[84%] h-full table-container p-[20px]">
            <table className="w-full rounded-t-[20px] bg-[#E7EAF9] mt-2">
              <thead className="bg-[#E7EAF0] h-[83.97px] font-poppins">
                <tr>
                  <th className="text-[16px] font-bold text-center text-[#212529] border-b rounded-tl-[20px]">
                    No
                  </th>
                  <th className="text-[16px] font-bold text-start text-[#212529] border-b">
                    Nama
                  </th>
                  <th className="px-6 text-[16px] font-bold text-center text-[#212529] border-b">
                    Alamat
                  </th>
                  <th className="text-center text-[16px] font-bold text-[#212529] border-b">
                    No. Telepon
                  </th>
                  <th className="text-center text-[16px] font-bold text-[#212529] border-b">
                    Email
                  </th>
                  <th className="px-6 text-center text-[16px] font-bold text-[#212529] border-b rounded-tr-[20px]">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#FFFFFF] divide-gray-200">
                {data?.map((item, index) => (
                  <tr key={item.id} className="border-b-[3px]">
                    <td className="px-6 text-sm text-center font-medium text-[#465170]">
                      {index + 1}
                    </td>
                    <td className=" text-sm text-start text-gray-500">
                      {item.name}
                    </td>
                    <td className="w-[200px] text-sm text-center text-gray-500">
                      {item.address} <br />
                    </td>
                    <td className="text-sm text-center text-gray-500">
                      {item.phone}
                    </td>
                    <td className=" text-sm text-center text-gray-500 ">
                      {item.email}
                    </td>
                    <td className="py-2 text-sm text-gray-500">
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
