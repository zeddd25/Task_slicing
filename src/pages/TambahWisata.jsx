import { useState } from "react";
import Input from "../components/Input";
import { BiImageAdd } from "react-icons/bi";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import InputAlamat from "../components/InputAlamat";
import instance from "../api";

const TambahWisata = () => {
  // State untuk mengubah status button
  const [buttonStatus, setButtonStatus] = useState("Tambah");
  // State untuk menavigasi
  const navigate = useNavigate();
  // State untuk menyimpan gambar preview sebelum dikirimkan
  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);

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

  return (
    <>
      <div className="w-[125px] h-screen absolute flex justify-center items-center ">
        <Sidebar />
      </div>
      <form
        // Panggil fungsi handleSubmit dengan onSubmit
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row justify-center items-center h-screen gap-[99px] mt-auto">
          <div className="flex justify-center items-center h-screen">
            <div className="absolute top-[110px] left-[435px] font-sans not-italic font-bold text-[40px] leading-[48.41px] text-[#6889FF]">
              <h1>Tambahkan Wisata</h1>
            </div>
            <div className="flex justify-center items-center flex-col gap-y-[63px] h-[690px] mt-12 flex-wrap">
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
          <div className="flex flex-col  justify-end flex-wrap items-center gap-y-[34px] h-[780px]">
            <InputAlamat
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Masukan Alamat"
            />
            {image ? (
              <div className="w-[538px] h-[367px] overflow-hidden ">
                <img
                  src={image}
                  alt=""
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
            <input
              type="file"
              id="input-file"
              onChange={fileChangeHandler}
              hidden
            />
            <button
              type="submit"
              className="w-[418px] h-[75px] font-Inter font-bold text-[24px] rounded-[12px] text-[#FFFFFF] bg-[#6889FF] hover:bg-[#3D62E5] active:opacity-[0.8] border-none"
            >
              {buttonStatus}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
}

export default TambahWisata;
