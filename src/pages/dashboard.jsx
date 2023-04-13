import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import InputSearch from "../components/InputSearch";
import instance from "../api";
import { TbAlignJustified } from "react-icons/tb";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
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
    localStorage.getItem("!namaUser");
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

  useEffect(() => {
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResult(results);
  }, [searchQuery, data]);

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
        <div className="w-full" ref={ref}>
          <nav
            className={`w-full h-full fixed justify-center items-center md:justify-start md:w-[125px] md:items-center md:flex lg:h-[828px] ${
              showSidebar ? "" : "hidden"
            }`}
          >
            <Sidebar onClick={() => setShowSidebar(false)} />
          </nav>
          <div className="w-full h-[84px] bg-[#FFFFFF] flex justify-between px-3 items-center shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] md:hidden">
            <NavLink onClick={handleToggleSidebar}>
              <h1 className="text-[46px] text-[#515151] flex items-center">
                <TbAlignJustified />
              </h1>
            </NavLink>
            {isSidebarOpen && (
            <h1 className="capitalize font-bold text-[32px] leading-[50px]">
              Hi, {namaUser}!
            </h1>
            )}
          </div>
          <header className="p-5 sm:flex sm:justify-center sm:w-full sm:items-center">
            <h1 className="capitalize font-bold text-[32px] leading-[50px] hidden md:block sm:pr-20 sm:w-full md:pl-32 md:pt-10 lg:pl-80">
              Hi, {namaUser}!
            </h1>
            <InputSearch value={searchQuery} onChange={setSearchQuery} />
          </header>
          <main className="flex w-full justify-center md:justify-end">
            {searchResult.length > 0 ? (
              <div className="w-full flex justify-center flex-wrap gap-y-[42px] mx-6 sm:gap-x-4 md:w-[84%] md:mx-2 lg:w-[90%]">
                {searchResult.map((item) => {
                  return (
                    <NavLink to={`/detail/${item.id}`}>
                      <Card
                        key={item.id}
                        src={item.photo}
                        nama={item.name}
                        address={item.address}
                        city={item.city}
                        phone={item.phone}
                      />
                    </NavLink>
                  );
                })}
              </div>
            ) : (
              <div className="flex justify-center items-center w-full h-screen font-poppins text-[36px] text-gray-500">
                <p>Hasil pencarian tidak ada!</p>
              </div>
            )}
          </main>
          <footer className="bg-[#6889FF] w-full h-[100px] flex justify-center items-center mt-[383px]">
            <p className="text-center font-poppins text-[#FFFFFF] text-[20px]">
              Footer Component
              <br />
              Copyright 2023 AII right reserved
            </p>
          </footer>
        </div>
      </>
    );
  }
};

export default Dashboard;
