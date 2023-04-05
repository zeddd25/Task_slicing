import React from 'react'

const InputSearch = ({ value, onChange }) => {
  return (
    <div className="flex flex-row justify-between items-center h-[68px] rounded-[36px] bg-[#F6F6F6] gap-3 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] sm:w-[500px] md:w-[800px]">
    <div className="flex items-center">
    <span
      className="w-[42px] h-[42px] py-8 px-5 ml-[22.5px] mt-[20px] hover:opacity-[0.8]"
      id="search"
    ></span>
    </div>
    <div className="flex justify-between">
    <input
      id="cari"
      type="text"
      value={value}
      placeholder="Cari wisata..."
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-full border-none outline-none font-normal bg-[#F6F6F6] text-[24px] rounded-[36px] text-black placeholder:text-[#515151]"
    />
    </div>
    <div className="">
    <button className="w-[105.27px] h-[68px] rounded-[36px] bg-[#6889FF] font-bold text-[24px] text-[#FFFFFF] not-italic hover:bg-[#3D62E5] active:opacity-[0.8]">
      <label className="cursor-pointer" htmlFor="cari">
        Cari
      </label>
    </button>
    </div>
  </div>
  )
}

export default InputSearch