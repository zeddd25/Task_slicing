import React from "react";

const InputAlamat = ({ type, placeholder, value, onChange, required,id }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      id={id}
      className="w-[536px] h-[112px] rounded-[12px] font-normal p-10 bg-[#F6F6F6] text-[24px] font-Inter text-black placeholder:text-[#515151] outline-[#6889FF] left-[0%] right-[0%] top-[0%] bottom-[0%]"
    />
  );
};

export default InputAlamat;
