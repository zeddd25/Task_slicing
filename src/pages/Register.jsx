import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import instance from "../api";

const Register = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [password_confirmation, setPassword_confirmation] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    if (
      nama === "" ||
      email === "" ||
      password === "" ||
      password_confirmation === ""
    ) {
      setLoading(false);
      return false;
    } else {
      let data = new FormData();
      data.append("name", nama);
      data.append("email", email);
      data.append("password", password);
      data.append("password_confirmation", password_confirmation);

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "/register",
        headers: {},
        data: data,
      };

      instance
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setLoading(false);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {loading ? (
        <div className="loader">
          <div className="justify-content-center jimu-primary-loading"></div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <div className="max-w-md mx-4 md:max-w-md flex justify-center items-center h-screen">
            <div className="max-w-md px-5 w-full flex justify-end items-center pb-10 flex-col gap-y-4 h-[700px] rounded-[12px] bg-[#FFFFFF] shadow-2xl">
              <h1 className="font-sans not-italic font-bold text-[40px] mb-5 text-[#6889FF]">
                Register
              </h1>
              <input
                type="text"
                placeholder="Masukan Nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
                className="w-full h-[50px] border-none rounded-[12px] font-normal p-10 bg-[#F6F6F6] text-[24px] font-Inter text-black placeholder:text-[#515151] outline-[#6889FF]"
              />
              <input
                type="email"
                placeholder="Masukan Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-[50px] border-none rounded-[12px] font-normal p-10 bg-[#F6F6F6] text-[24px] font-Inter text-black placeholder:text-[#515151] outline-[#6889FF]"
              />
              <input
                type="password"
                placeholder="Masukan Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-[50px] border-none rounded-[12px] font-normal p-10 bg-[#F6F6F6] text-[24px] font-Inter text-black placeholder:text-[#515151] outline-[#6889FF]"
              />
              <input
                type="password"
                placeholder="Konfirmasi Password"
                value={password_confirmation}
                onChange={(e) => setPassword_confirmation(e.target.value)}
                required
                className="w-full h-[50px] border-none rounded-[12px] font-normal p-10 bg-[#F6F6F6] text-[24px] font-Inter text-black placeholder:text-[#515151] outline-[#6889FF]"
              />
              <button
                type="submit"
                className="w-full h-[72px] font-Inter font-bold text-[24px] mx-8 rounded-[12px] text-[#FFFFFF] bg-[#6889FF] hover:bg-[#3D62E5] active:opacity-[0.8] border-none"
              >
                Register
              </button>
              <div className=" flex flex-col justify-start w-full px-4 font-Inter not-italic font-normal text-[20px] leading-[24px] text-[#000000]">
                <h1>
                  Sudah memiliki akun,{" "}
                  <Link to="/" className="text-[#0038FF]">
                    Login
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default Register;
