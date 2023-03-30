import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import Sidebar from "../components/Sidebar";
import InputAlamat from "../components/InputAlamat";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BiImageAdd } from "react-icons/bi";
import { useParams } from "react-router-dom";

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
  const [data, setData] = useState("")

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
        url: `https://frontendreq.pondokprogrammer.com/api/show/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      };

      axios
      .request(config)
      .then((response) => {
        setLoading(false);
        setName(response.data.data[0].name);
        setEmail(response.data.data[0].email);
        setPhone(response.data.data[0].phone);
        setCity(response.data.data[0].city);
        setAddress(response.data.data[0].address);
        setImage(response.data.data[0].photo)
        fetch(response.data.data[0].photo)
        .then((response) => response.blob())
        .then((res) => {
        const file = new File([res], 'image', { type : res.type,})
        setPhoto(file)
        })
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
    return (
      <div>
        <div className="w-[125px] h-screen absolute flex justify-center items-center ">
          <Sidebar />
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <form
          // Panggil fungsi handleSubmit dengan onSubmit
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row justify-center items-center h-screen gap-[99px] mt-auto">
            <div className="flex justify-center items-center h-screen">
              <div className="absolute top-[110px] left-[435px] font-sans not-italic font-bold text-[40px] leading-[48.41px] text-[#6889FF]">
                <h1>Ubah Wisata</h1>
              </div>
              <div className="flex justify-center items-center flex-col gap-y-[63px] h-[690px] mt-12 flex-wrap">
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
              </div>
            </div>
            <div className="flex flex-col  justify-end flex-wrap items-center gap-y-[34px] h-[790px]">
              <InputAlamat
                type="text"
                id="address"
                value={address}
                onChange={handleAddressChange}
                placeholder="Masukan Alamat"
              />
              <label
                htmlFor="tambah"
                className="flex flex-col justify-center items-center cursor-pointer h-[367px] w-[538px] rounded-xl bg-[#F6F6F6]"
              >
                <BiImageAdd className="text-[150px] text-[#6889FF]" />
                <div className="flex flex-col justify-center items-center opacity-100">
                  <input
                    id="tambah"
                    type="file"
                    hidden
                    onChange={fileChangeHandler}
                  />
                  {image ? (
                    <div className="w-[538px] h-[367px] overflow-hidden ">
                      <img
                        src={image}
                        alt="Gambar Wisata"
                        id="photo"
                        className="h-full w-full"
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
                      <div className="flex flex-col justify-center items-center w-[538px] h-[367px] bg-[#F6F6F6] cursor-pointer">
                        <BiImageAdd className="text-[150px] text-[#6889FF]" />
                        <h1 className="font-Inter text-[24px] text-[#515151]">
                          Tambahkan Gambar
                        </h1>
                      </div>
                    </div>
                  )}
                </div>
              </label>

              <button
                type="submit"
                className="w-[418px] h-[75px] font-Inter font-bold text-[24px] rounded-[12px] text-[#FFFFFF] bg-[#6889FF] hover:bg-[#3D62E5] active:opacity-[0.8] border-none"
              >
                {buttonStatus}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default UpdateWisata;
