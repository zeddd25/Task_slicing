import React from "react";

const InputCheckbox = () => {
  return (
    <div className="flex gap-2 ">
      <input
        type="checkbox"
        className="w-[21px] h-[20px] cursor-pointer focus-visible: border-none outline-none bg-[#D9D9D9]"
        id="nama"
      />
      <label
        className="w-[207px] font-Inter font-normal text-[20px] leading-[24px] cursor-pointer"
        htmlFor="nama"
      >
        Ingat saya untuk login
      </label>
    </div>
  );
};

export default InputCheckbox;
