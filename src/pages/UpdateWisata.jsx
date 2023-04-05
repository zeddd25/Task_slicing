import React, { useEffect, useRef, useState } from "react";
import Input from "../components/Input";
import Sidebar from "../components/Sidebar";
import InputAlamat from "../components/InputAlamat";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { BiImageAdd } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import instance from "../api";

const UpdateWisata = () => {
  // State untuk mengubah status button
  const [buttonStatus, setButtonStatus] = useState("Ubah");
  // State untuk menavigasi
  const navigate = useNavigate();
  let { id } = useParams(); // mendapatkan nilai id dari URL
  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [photo, setPhoto] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [data, setData] = useState("");
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

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fileChangeHandler = (e) => {
    // Mengambil value bukan (e.target.value) tetapi (e.target.files[0])
    setPhoto(e.target.files[0]);

    // Membuat Object URL agar bisa ditampilkan gambar yang dipilih
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setButtonStatus("Sedang diubah...");
    if (!name || !email || !phone || !address || !city || !photo) {
      alert("Semua field harus diisi!");
      setButtonStatus("Ubah");
      return;
    }

    const token = localStorage.getItem("token"); // Ambil token dari local storage
    const endpoint = `https://frontendreq.pondokprogrammer.com/api/UP/${id}`; // Ganti dengan endpoint yang diinginkan
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("photo", photo);

    axios
      .post(endpoint, formData, config)
      .then((response) => {
        console.log(response.data);
        // Merubah status button ketika proses mengirim selesai/berhasil
        setButtonStatus("Ubah");
        // Menavigasi ke halaman Tabel
        navigate(`/tabel/${id}`);
      })
      .catch((error) => {
        setErrorMessage(error.response.data);
        // Merubah status button ketika proses mengirim gagal
        setButtonStatus("Ubah");
      });
  };

  useEffect(() => {
    setLoading(true);
    const getData = () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `/show/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      };

      instance
        .request(config)
        .then((response) => {
          setLoading(false);
          setName(response.data.data[0].name);
          setEmail(response.data.data[0].email);
          setPhone(response.data.data[0].phone);
          setCity(response.data.data[0].city);
          setAddress(response.data.data[0].address);
          setImage(response.data.data[0].photo);
          fetch(response.data.data[0].photo)
            .then((response) => response.blob())
            .then((res) => {
              const file = new File([res], "image", { type: res.type });
              setPhoto(file);
            });
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
    const namaUser = localStorage.getItem("namaUser");

    return (
      <div ref={ref}>
        <nav
          className={`w-full h-full fixed justify-center items-center md:w-[125px] md:block md:pt-20 ${
            showSidebar ? "" : "hidden"
          }`}
        >
          <Sidebar onClick={() => setShowSidebar(false)} />
        </nav>
        {errorMessage && <div>{errorMessage}</div>}
        <form
          // Panggil fungsi handleSubmit dengan onSubmit
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between items-center h-[84px] px-4 bg-[#FFFFFF] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] md:hidden">
            <NavLink onClick={handleToggleSidebar}>
              <h1 className="text-[46px] text-[#515151] w-[49px] h-[5px] flex items-center ">
                <HiMenuAlt2 />
              </h1>
            </NavLink>
            <h1 className="font-Inter capitalize font-bold text-[36px] leading-[50px]">
              Hi, {namaUser}
            </h1>
          </div>
          <div className="flex justify-center h-full gap-2 items-center flex-wrap mt-7 md:w-full md:mt-0 md:pl-24 lg:hidden">
            <div className="font-sans not-italic font-bold text-[30px] justify-center w-full mx-4 md:mt-5 md:mb-4 md:text-[40px] leading-[48.41px] text-[#6889FF] md:w-[565px]">
              <h1>Ubah Wisata</h1>
            </div>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Masukan Nama Wisata"
            />
            <Input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Masukan Email"
            />
            <Input
              type="tel"
              id="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Masukan No.Telepon"
            />
            <Input
              type="text"
              id="city"
              value={city}
              onChange={handleCityChange}
              placeholder="Masukan Kota"
            />
            <InputAlamat
              type="text"
              id="address"
              value={address}
              onChange={handleAddressChange}
              placeholder="Masukan Alamat"
            />
            <div className="w-full mx-4 md:w-[565px]">
              <label
                htmlFor="tambah"
                className="flex flex-col justify-center items-center "
              >
                <div className="w-full object-cover mx-4 md:w-[565px]">
                  {image ? (
                    <div className="overflow-hidden">
                      <img
                        src={image}
                        alt="Gambar Wisata"
                        id="photo"
                        className="w-full rounded-[12px]"
                        onClick={() => {
                          document.querySelector("#input-file").click();
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        document.querySelector("#input-file").click();
                      }}
                    >
                      <div className="flex h-[280px] w-full flex-col rounded-[12px] justify-center items-center bg-[#F6F6F6] cursor-pointer">
                        <BiImageAdd className="text-[150px] text-[#6889FF]" />
                        <h1 className="font-Inter text-[24px] text-[#515151]">
                          Tambahkan Gambar
                        </h1>
                      </div>
                    </div>
                  )}
                  <input
                    id="tambah"
                    type="file"
                    hidden
                    onChange={fileChangeHandler}
                  />
                </div>
              </label>
            </div>
            <button
              type="submit"
              className="w-full h-[75px] mx-4 font-Inter font-bold text-[24px] rounded-[12px] text-[#FFFFFF] bg-[#6889FF] hover:bg-[#3D62E5] active:opacity-[0.8] border-none md:w-[565px]"
            >
              {buttonStatus}
            </button>
          </div>
        </form>
        <form
          // Panggil fungsi handleSubmit dengan onSubmit
          onSubmit={handleSubmit}
        >
          <div className="lg:flex lg:flex-row lg:justify-center lg:items-center lg:h-screen lg:gap-[60px] lg:mt-auto md:pl-20">
            <div className="lg:flex lg:justify-center lg:items-center lg:h-screen hidden">
              <div className="lg:flex lg:justify-center lg:items-center lg:flex-col lg:gap-y-[54px] lg:h-[690px] lg:mt-[80px] lg:flex-wrap lg:mb-[100px]">
                <h1 className="lg:font-sans lg:not-italic lg:font-bold lg:text-[40px] lg:leading-[48.41px] lg:text-[#6889FF]">
                  Ubah Wisata
                </h1>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukan Nama Wisata"
                  required
                />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukan Email"
                  required
                />
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Masukan No.Telepon"
                  required
                />
                <Input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Masukan Kota"
                  required
                />
              </div>
            </div>
            <div className="lg:flex lg:justify-center lg:items-center lg:h-full hidden">
              <label
                htmlFor="tambah"
                className="flex flex-col justify-center items-center "
              >
                <div className="lg:flex lg:flex-col lg:justify-end lg:flex-wrap lg:items-center lg:gap-y-[34px] lg:h-[780px] hidden">
                  <InputAlamat
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Masukan Alamat"
                  />
                  {image ? (
                    <div className="lg:w-[538px] lg:h-[367px] lg:overflow-hidden ">
                      <img
                        src={image}
                        alt=""
                        className="lg:h-full lg:w-full lg:rounded-[12px]"
                        onClick={() => {
                          document.querySelector("#input-file").click();
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        document.querySelector("#input-file").click();
                      }}
                    >
                      <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:rounded-[12px] lg:w-[538px] lg:h-[367px] lg:bg-[#F6F6F6] lg:cursor-pointer">
                        <BiImageAdd className="lg:text-[150px] lg:text-[#6889FF]" />
                        <h1 className="lg:font-Inter lg:text-[24px] lg:text-[#515151]">
                          Tambahkan Gambar
                        </h1>
                      </div>
                    </div>
                  )}
                  <input
                    type="file"
                    id="input-file"
                    onChange={fileChangeHandler}
                    hidden
                  />
                  <button
                    type="submit"
                    className="lg:w-[418px] lg:h-[75px] lg:font-Inter lg:rounded-[12px] lg:font-bold lg:text-[24px] lg:rounded-[12px]lg: text-[#FFFFFF] lg:bg-[#6889FF] lg:hover:bg-[#3D62E5] lg:active:opacity-[0.8] lg:border-none"
                  >
                    {buttonStatus}
                  </button>
                </div>
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default UpdateWisata;
