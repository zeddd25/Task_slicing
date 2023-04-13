const InputAlamat = ({ type, placeholder, value, onChange, required,id }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      id={id}
      className="w-full h-[75px] mx-4 rounded-[12px] font-normal p-10 bg-[#F6F6F6] text-[24px] font-Inter text-black placeholder:text-[#515151] outline-[#6889FF] md:w-[565px] lg:w-[538px]"
    />
  );
};

export default InputAlamat;
