import instance from "../api";
import Input from "../components/Input";
import { BiImageAdd } from "react-icons/bi";
import Sidebar from "../components/Sidebar";
import { HiMenuAlt2 } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import InputAlamat from "../components/InputAlamat";
import { NavLink, useNavigate } from "react-router-dom";

const TambahWisata = () => {
  // State untuk mengubah status button
  const [buttonStatus, setButtonStatus] = useState("Tambah");
  // State untuk menavigasi
  const navigate = useNavigate();
  // State untuk menyimpan gambar preview sebelum dikirimkan
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
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

  // Fungsi untuk event onChange pada input type file
  const fileChangeHandler = (e) => {
    // Mengambil value bukan (e.target.value) tetapi (e.target.files[0])
    setPhoto(e.target.files[0]);

    // Membuat Object URL agar bisa ditampilkan gambar yang dipilih
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    // Agar tidak terjadi render ulang
    e.preventDefault();

    // Merubah status button ketika proses mengirim data
    setButtonStatus("Sedang ditambah...");
    if (!name || !email || !phone || !address || !city || !photo) {
      alert("Semua input harus diisi!");
      setButtonStatus("Tambah");
      return;
    }

    if (photo.size > 3145728) {
      // 3145728 byte = 3 MB
      alert("Ukuran file gambar tidak boleh melebihi 3MB!");
      setButtonStatus("Tambah");
      return;
    }

    if (!["image/jpeg", "image/png"].includes(photo.type)) {
      alert("Format file gambar harus JPG atau PNG!");
      setButtonStatus("Tambah");
      return;
    }

    let data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("phone", phone);
    data.append("city", city);
    data.append("address", address);
    data.append("photo", photo);
    // Jangan lupa mengimport instance dari file api.js
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/create",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
      data: data,
    };
    // Jangan lupa mengimport instance dari file api.js
    instance
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        // Merubah status button ketika proses mengirim selesai/berhasil
        setButtonStatus("Create");
        // Menavigasi ke halaman Tabel
        navigate(`/tabel/:id`);
      })
      .catch((error) => {
        console.log(error);
        // Merubah status button ketika proses mengirim gagal
        setButtonStatus("Create");
      });
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
      <div ref={ref}>
        <nav
          className={`w-full h-full fixed justify-center items-center md:justify-start md:w-[125px] md:items-center md:flex lg:h-[828px] ${
            showSidebar ? "" : "hidden"
          }`}
        >
          <Sidebar onClick={() => setShowSidebar(false)} />
        </nav>
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
            <h1 className="capitalize font-bold text-[36px] leading-[50px]">
              Hi, {namaUser}
            </h1>
          </div>
          <div className="flex justify-center h-full gap-2 items-center flex-wrap mt-7 md:w-full md:mt-0 md:pl-24 lg:hidden">
            <div className="font-sans not-italic font-bold text-[30px] justify-center w-full mx-4 md:mt-5 md:mb-4 md:text-[40px] leading-[48.41px] text-[#6889FF] md:w-[565px]">
              <h1>Tambahkan Wisata</h1>
            </div>
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
            <InputAlamat
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Masukan Alamat"
            />
            <div className="w-full mx-4 md:w-[565px]">
              {image ? (
                <div className="overflow-hidden ">
                  <img
                    src={image}
                    alt="Gambar Wisata"
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
                type="file"
                id="input-file"
                onChange={fileChangeHandler}
                hidden
              />
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
                  Tambahkan Wisata
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
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default TambahWisata;
