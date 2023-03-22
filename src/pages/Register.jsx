import React, { useState } from "react";
import Rectangle from "../components/Rectangle";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (
      nama === "" ||
      email === "" ||
      password === "" ||
      password_confirmation === ""
    ) {
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
        url: "https://frontendreq.pondokprogrammer.com/api/register",
        headers: {},
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center">
          <div className="absolute w-[165px] h-[48px] top-[170px] mx-[233px] font-sans not-italic font-bold text-[40px] leading-[48.41px] text-[#6889FF]">
            <h1>Register</h1>
          </div>
          <div>
            <Rectangle />
          </div>
          <div className="flex justify-center flex-col absolute top-[260px] gap-5">
            <input
              type="text"
              placeholder="Masukan Nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
              className="w-[418px] h-[75px] border-none rounded-[12px] font-normal p-10 bg-[#F6F6F6] text-[24px] font-Inter text-black placeholder:text-[#515151] outline-[#6889FF] left-[0%] right-[0%] top-[0%] bottom-[0%]"
            />
            <input
              type="text"
              placeholder="Masukan Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-[418px] h-[75px] border-none rounded-[12px] font-normal p-10 bg-[#F6F6F6] text-[24px] font-Inter text-black placeholder:text-[#515151] outline-[#6889FF] left-[0%] right-[0%] top-[0%] bottom-[0%]"
            />
            <input
              type="password"
              placeholder="Masukan Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-[418px] h-[75px] border-none rounded-[12px] font-normal p-10 bg-[#F6F6F6] text-[24px] font-Inter text-black placeholder:text-[#515151] outline-[#6889FF] left-[0%] right-[0%] top-[0%] bottom-[0%]"
            />
            <input
              type="password"
              placeholder="Masukan Konfirmasi Password"
              value={password_confirmation}
              onChange={(e) => setPassword_confirmation(e.target.value)}
              required
              className="w-[418px] h-[75px] border-none rounded-[12px] font-normal p-10 bg-[#F6F6F6] text-[24px] font-Inter text-black placeholder:text-[#515151] outline-[#6889FF] left-[0%] right-[0%] top-[0%] bottom-[0%]"
            />
          </div>
          <div className="flex justify-center absolute top-[670px]">
            <Button />
          </div>
          <div className="absolute w-[256px] h-[24px] top-[755px] mr-[110px] font-Inter not-italic font-normal text-[20px] leading-[24px] text-[#000000]">
            <h1>
              Sudah memiliki akun,{" "}
              <Link to="/" className="text-[#0038FF]">
                Login
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
