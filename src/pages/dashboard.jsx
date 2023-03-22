import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputSearch from "../components/InputSearch";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkUserToken = () => {
      const userToken = localStorage.getItem("token");
      if (!userToken || userToken === "undefined") {
        return navigate("/");
      }
      checkUserToken();
    };
  }, []);

  const namaUser = localStorage.getItem("namaUser")

  return (
    <div>
      <nav className="w-[125px] h-screen absolute flex justify-center items-center">
        <Sidebar />
      </nav>
      <div className="absolute left-[278px] top-[80px]">
       <h1 className="font-Inter font-bold text-[36px] leading-[50px] pl-[50px] mb-[54px]">Hi, {namaUser}</h1>
       </div>
      <header className="flex justify-end mr-[80px] p-5">
        <InputSearch />
      </header>
      <main className="ml-[220px] flex-col flex justify-end mt-[62px]">
        <div className="w-full flex justify-center flex-wrap mr-[100px] gap-x-[92px] gap-y-[42px] ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
      <footer className="w-full bg-[#6889FF] h-[160px] flex justify-center items-center mt-[195px]">
        <p className="text-center font-poppins text-[#FFFFFF] text-[20px] ">
          Footer Component
          <br />
          Copyright 2023 AII right reserved
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
