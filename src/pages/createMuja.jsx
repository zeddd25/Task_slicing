import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Sidebar from "../../components/Sidebar";
import instance from "../../api/api";

function Ubah() {
  document.title = "Ubah Wisata";

  const navigate = useNavigate();
  const [buttonStatus, setButtonStatus] = useState("Update Data");
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [photo, setPhoto] = useState("");
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState("");

  const handleInputImg = (e) => {
    const file = e.target.files[0];
    if (
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.type === "image/jpg"
    ) {
      if (file.size <= 200000) {
        setImg(URL.createObjectURL(file));
        setPhoto(file);
      } else {
        alert("Ukuran file harus dibawah 2 MB!");
      }
    } else {
      alert("Format file harus berformat = png/jpeg/jpg !");
    }
  };

  useEffect(() => {
    const checkUserToken = () => {
      const userToken = localStorage.getItem("token");
      if (!userToken || userToken === "undefined") {
        return navigate("/");
      }
    };
    checkUserToken();
  }, []);

  useEffect(() => {
    const getData = () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `/show/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      instance
        .request(config)
        .then((response) => {
          setLoading(false);
          setName(response.data.data[0].name);
          setEmail(response.data.data[0].email);
          setTelephone(response.data.data[0].phone);
          setAddress(response.data.data[0].address);
          setCity(response.data.data[0].city);
          setImg(response.data.data[0].photo);
          fetch(response.data.data[0].photo)
            .then(res => res.blob())
            .then(blob => {
              const imgname = response.data.data[0].name
              const newFile = new File([blob], imgname ,{type : blob.type})
              setPhoto(newFile)
            })
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };
    getData();
  }, [id]);


  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setButtonStatus("Updating..");

    let data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("phone", telephone);
    data.append("address", address);
    data.append("city", city);
    data.append("photo", photo);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `/UP/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Content-Type' : 'multipart/formdata'
      },
      data: data,
    };

    instance
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setButtonStatus("Update Data");
        navigate("/dashboard/tabel");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setButtonStatus("Update Data");
        setLoading(false);
      });
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {loading ? (
        <>
          <div className="top-0 bg-black bg-opacity-40 w-full h-screen flex flex-col gap-y-10 justify-center items-center fixed z-10">
            <div className="w-[330px] h-[330px] border-[40px] border-t-black rounded-[50%] bg-transparent animate-spin"></div>
            <p className="text-[50px] font-bolt italic">
              Wait, Updating Data..
            </p>
          </div>
          <Sidebar />
          <form
            className="flex justify-around items-center w-[80%]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col justify-around h-[85vh]">
              <h1 className="font-bold text-[40px] text-[#6889FF]">
                Ubah Wisata
              </h1>
              <Input
                type="text"
                className="border-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="email"
                className="border-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="number"
                className="border-none"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
              <Input
                type="text"
                className="border-none"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-evenly h-[100vh] mt-[310px]">
              <Input
                type="text"
                className="py-[40px]"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <label
                htmlFor="tambah"
                className="flex justify-center items-center cursor-pointer h-[367px] w-[538px] rounded-xl bg-[#F6F6F6] mt-[-50px]"
              >
                <div className="flex flex-col justify-center items-center opacity-100">
                  <img src={img} className="h-[367px]" />
                  <input
                    id="tambah"
                    type="file"
                    hidden
                    onChange={handleInputImg}
                  />
                  <p className="text-[24px] pt-10 hidden">Tambah Gambar</p>
                </div>
              </label>
              <div className="flex justify-center mt-[-50px]">
                <Button className="w-[418px]" buttonStatus={buttonStatus} />
              </div>
            </div>
          </form>{" "}
        </>
      ) : (
        <>
          <Sidebar />
          <form
            className="flex justify-around items-center w-[80%]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col justify-around h-[85vh]">
              <h1 className="font-bold text-[40px] text-[#6889FF]">
                Ubah Wisata
              </h1>
              <Input
                type="text"
                className="border-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="email"
                className="border-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="number"
                className="border-none"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
              <Input
                type="text"
                className="border-none"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-evenly h-[100vh] mt-[310px]">
              <Input
                type="text"
                className="py-[40px]"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <label
                htmlFor="tambah"
                className="flex justify-center items-center cursor-pointer h-[367px] w-[538px] rounded-xl bg-[#F6F6F6] mt-[-50px]"
              >
                <div className="flex flex-col justify-center items-center opacity-100">
                  <img src={img} className="h-[367px]" />
                  <input
                    id="tambah"
                    type="file"
                    className="hidden"
                    onChange={handleInputImg}
                  />
                  <p className="text-[24px] pt-10 hidden">Tambah Gambar</p>
                </div>
              </label>
              <div className="flex justify-center mt-[-50px]">
                <Button className="w-[418px]" buttonStatus={buttonStatus} />
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default Ubah;