import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import InputSearch from "../components/InputSearch";
import instance from "../api";

const Dashboard = () => {
  // <==========================> //
  const navigate = useNavigate();
  // <================================> //
  const [data, setData] = useState([]);
  // <=========================================> //
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

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
    // <=============================================> //
    const namaUser = localStorage.getItem("namaUser");

    // <==========================================================================================> //
    return (
      <div>
        <nav className="w-[125px] h-screen absolute flex justify-center items-center">
          <Sidebar />
        </nav>
        <div className="absolute left-[278px] top-[80px]">
          <h1 className="font-Inter capitalize font-bold text-[36px] leading-[50px] pl-[50px] mb-[54px]">
            Hi, {namaUser}
          </h1>
        </div>
        <header className="flex justify-end mr-[80px] p-5">
          <InputSearch value={searchQuery} onChange={setSearchQuery} />
        </header>
        <main className="ml-[220px] flex-col flex justify-end mt-[62px]">
          {searchResult.length > 0 ? (
            <div className="w-full flex justify-center flex-wrap mr-[100px] gap-x-[92px] gap-y-[42px] ">
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
            <div className="flex justify-center items-center w-full h-full font-poppins text-[36px] text-gray-500">
            <p>No results found</p>
            </div>
          )}
        </main>
        <footer className="w-full bg-[#6889FF]  h-[160px] flex justify-center items-center mt-[195px]">
          <p className="text-center font-poppins text-[#FFFFFF] text-[20px] ">
            Footer Component
            <br />
            Copyright 2023 AII right reserved
          </p>
        </footer>
      </div>
    );
  }
};

export default Dashboard;
