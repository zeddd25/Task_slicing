import React from "react";

const Input = ({type, placeholder, value, onChange, required, hidden, id}) => {
  return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        hidden={hidden}
        id={id}
        className="w-full mx-4 h-[75px] rounded-[12px] font-normal p-10 bg-[#F6F6F6] text-[24px] font-Inter text-black placeholder:text-[#515151] outline-[#6889FF] md:w-[565px] lg:w-full"
      />
  );
};

export default Input;
