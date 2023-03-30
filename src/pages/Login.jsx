import Rectangle from "../components/Rectangle";
import Button from "../components/Button";
import InputCheckbox from "../components/InputCheckbox";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  // Email
  const [email, setEmail] = useState("");
  // Password
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
  e.preventDefault();

  if (email === "" || password === "") {
    alert("Email dan Password harus diisi!");
    return;
  }

  const data = new FormData();
  data.append("email", email);
  data.append("password", password);

  const config = {
    method: "post",
    url: "https://frontendreq.pondokprogrammer.com/api/login",
    data: data,
  };

  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("namaUser", response.data.user.name);
        navigate("/dashboard");
      } else {
        alert("Email atau Password salah!");
      }
    })
    .catch((error) => {
      console.log(error);
      if (error.response) {
        // Handling HTTP errors from the server
        const { data, status } = error.response;
        if (status === 401) {
          alert(data.message);
        } else {
          alert(`Terjadi kesalahan: ${data.message}`);
        }
      } else {
        // Handling network errors
        alert("Terjadi kesalahan jaringan. Mohon cek koneksi internet Anda.");
      }
    });
}
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center">
          <div className="absolute w-[109px] h-[48px] top-[257px] mx-[233px] font-sans not-italic font-bold text-[40px] leading-[48.41px] text-[#6889FF]">
            <h1>Login</h1>
          </div>
          <div>
            <Rectangle />
          </div>
          <div className="flex justify-center flex-col gap-5 absolute top-[400px] ">
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
          </div>
          <div className="flex justify-center absolute top-[600px]">
            <Button />
          </div>
          <div className="flex justify-center absolute top-[688px] mr-36">
            <InputCheckbox />
          </div>
          <div className="absolute w-[281px] h-[24px] top-[750px] mr-[65px] font-Inter not-italic font-normal text-[20px] leading-[24px] text-[#000000]">
            <h1>
              Belum memiliki akun,{" "}
              <Link to="/register" className="text-[#0038FF]">
                Register
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
