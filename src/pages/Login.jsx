import InputCheckbox from "../components/InputCheckbox";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import instance from "../api";

const Login = () => {
  const [email, setEmail] = useState("");
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
      url: "/login",
      data: data,
    };

    instance
      .request(config)
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
          // Menangani kesalahan HTTP dari server
          const { data, status } = error.response;
          if (status === 401) {
            alert(data.message);
          } else {
            alert(`Terjadi kesalahan: ${data.message}`);
          }
        } else {
          // Menangani kesalahan jaringan
          alert("Terjadi kesalahan jaringan. Mohon cek koneksi internet Anda.");
        }
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center h-screen">
          <div className="px-5 w-[350px] flex justify-end items-center pb-10 flex-col gap-y-5 h-[600px] rounded-[12px] bg-[#FFFFFF] shadow-2xl md:w-[466px] md:h-[717px]">
            <h1 className="font-sans not-italic font-bold text-[40px] mb-10 md:mb-20 text-[#6889FF]">
              Login
            </h1>
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
            <button
              type="submit"
              className="w-full h-[72px] font-Inter font-bold text-[24px] mx-8 rounded-[12px] text-[#FFFFFF] bg-[#6889FF] hover:bg-[#3D62E5] active:opacity-[0.8] border-none"
            >
              Login
            </button>
            <div className="flex flex-col justify-start w-full px-4 gap-10">
              <InputCheckbox />
              <h1 className="font-Inter not-italic font-normal text-[20px] leading-[24px] text-[#000000]">
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
