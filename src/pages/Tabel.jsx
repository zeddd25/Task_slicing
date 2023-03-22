import React from "react";
import { GoTrashcan } from "react-icons/go";
import { TfiPencil } from "react-icons/tfi";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import Sidebar from "../components/Sidebar";

function Table() {
  return (
    <div>
      <div className="w-[125px] h-screen absolute flex justify-center items-center">
        <Sidebar />
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="border-x-[1px] rounded-[20px] bg-[#FFFFFF] shadow-lg w-[1103px] h-[660px]">
          <table className="w-[1101px] h-[639px] divide-y rounded-t-[20px] bg-[#E7EAF9]">
            <thead className="bg-[#E7EAF0] h-[83.97px] font-poppins leading-[27.5px]">
              <tr>
                <th className="px-6 py-3 text-[16px] font-bold text-center text-[#212529] border-b rounded-tl-[20px]">
                  No
                </th>
                <th className="py-3 text-[16px] font-bold text-start text-[#212529] border-b">
                  Nama
                </th>
                <th className="px-6 py-3 text-[16px] font-bold text-center text-[#212529] border-b">
                  Alamat
                </th>
                <th className="px-6 py-3 text-left text-[16px] font-bold text-[#212529] border-b">
                  No. Telepon
                </th>
                <th className="pl-10 py-3 text-start text-[16px] font-bold text-[#212529] border-b">
                  Email
                </th>
                <th className="px-6 py-3 text-center text-[16px] font-bold text-[#212529] border-b rounded-tr-[20px]">
                  Aksi
                </th>
              </tr>
              <div className="w-[1103px] h-[5px] bg-[#E7EAF0] absolute mt-[4px]"></div>
            </thead>
            <tbody className="bg-[#FFFFFF] divide-y divide-gray-200">
              <tr className="h-[83.97px] border-b-[3px]">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-900">
                  1
                </td>
                <td className="py-4 whitespace-nowrap text-sm text-start text-gray-500">
                  Wisata Air Terjun
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                  Jl. Manggis Bantul, <br />
                  Yogyakarta
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  082313452351
                </td>
                <td className="py-4 whitespace-nowrap text-sm text-start text-gray-500 ">
                  airterjun.mail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="flex gap-2 justify-center text-[#16192C] text-[22px]">
                    <i className="flex justify-center items-center w-[44.55px] h-[51.23px] bg-[#FFFFFF] border-[1px] border-[#E8EBF0] rounded-[6px] ">
                      <MdOutlineReportGmailerrorred />
                    </i>
                    <i className="flex justify-center items-center w-[44.55px] h-[51.23px] bg-[#FFFFFF] border-[1px] border-[#E8EBF0] rounded-[6px] ">
                      <TfiPencil />
                    </i>
                    <i className="flex justify-center items-center w-[44.55px] h-[51.23px] bg-[#FFFFFF] border-[1px] border-[#E8EBF0] rounded-[6px] ">
                      <GoTrashcan />
                    </i>
                  </span>
                </td>
              </tr>
              <tr className="h-[83.97px]">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-900 border-b-[3px]">
                  2
                </td>
                <td className="py-4 whitespace-nowrap text-sm text-start text-gray-500 border-b-[3px]">
                  Kepulauan Wakatobi
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500 border-b-[3px]">
                  Jl. Manggis Bantul, <br />
                  Yogyakarta
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b-4">
                  082313452351
                </td>
                <td className="py-4 whitespace-nowrap text-sm text-start text-gray-500 border-b-[3px]">
                  airterjun.mail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b-[3px]">
                  <span className="flex gap-2 justify-center text-[#16192C] text-[22px]">
                    <i className="flex justify-center items-center w-[44.55px] h-[51.23px] bg-[#FFFFFF] border-[1px] border-[#E8EBF0] rounded-[6px] ">
                      <MdOutlineReportGmailerrorred />
                    </i>
                    <i className="flex justify-center items-center w-[44.55px] h-[51.23px] bg-[#FFFFFF] border-[1px] border-[#E8EBF0] rounded-[6px] ">
                      <TfiPencil />
                    </i>
                    <i className="flex justify-center items-center w-[44.55px] h-[51.23px] bg-[#FFFFFF] border-[1px] border-[#E8EBF0] rounded-[6px] ">
                      <GoTrashcan />
                    </i>
                  </span>
                </td>
              </tr>
              <tr className="h-[83.97px]">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-900 border-b-[3px]">
                  3
                </td>
                <td className="py-4 whitespace-nowrap text-sm text-start text-gray-500 border-b-[3px]">
                  Agrowisata Taman Turi
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500 border-b-[3px]">
                  Jl. Manggis Bantul, <br />
                  Yogyakarta
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b-[3px]">
                  082313452351
                </td>
                <td className="py-4 whitespace-nowrap text-sm text-start text-gray-500 border-b-[3px]">
                  airterjun.mail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b-[3px]">
                  <span className="flex gap-2 justify-center text-[#16192C] text-[22px]">
                    <i className="flex justify-center items-center w-[44.55px] h-[51.23px] bg-[#FFFFFF] border-[1px] border-[#E8EBF0] rounded-[6px] ">
                      <MdOutlineReportGmailerrorred />
                    </i>
                    <i className="flex justify-center items-center w-[44.55px] h-[51.23px] bg-[#FFFFFF] border-[1px] border-[#E8EBF0] rounded-[6px] ">
                      <TfiPencil />
                    </i>
                    <i className="flex justify-center items-center w-[44.55px] h-[51.23px] bg-[#FFFFFF] border-[1px] border-[#E8EBF0] rounded-[6px] ">
                      <GoTrashcan />
                    </i>
                  </span>
                </td>
              </tr>
              <tr className="h-[83.97px]">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-900 border-b-[3px]">
                  4
                </td>
                <td className="py-4 whitespace-nowrap text-sm text-start text-gray-500 border-b-[3px]">
                  Cagar Alam Maninjau
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500 border-b-[3px]">
                  Jl. Manggis Bantul, <br />
                  Yogyakarta
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b-[3px]">
                  082313452351
                </td>
                <td className="py-4 whitespace-nowrap text-sm text-start text-gray-500 border-b-[3px]">
                  airterjun.mail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b-[3px]">
                  <span className="flex gap-2 justify-center text-[#16192C] text-[22px]">
                    <i className="flex justify-center items-center w-[44.55px] h-[51.23px] bg-[#FFFFFF] border-[1px] border-[#E8EBF0] rounded-[6px] ">
                      <MdOutlineReportGmailerrorred />
                    </i>
                    <i className="flex justify-center items-center w-[44.55px] h-[51.23px] bg-[#FFFFFF] border-[1px] border-[#E8EBF0] rounded-[6px] ">
                      <TfiPencil />
                    </i>
                    <i className="flex justify-center items-center w-[44.55px] h-[51.23px] bg-[#FFFFFF] border-[1px] border-[#E8EBF0] rounded-[6px] ">
                      <GoTrashcan />
                    </i>
                  </span>
                </td>
              </tr>
              <tr className="h-[83.97px]">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-900 border-b-[3px]">
                  5
                </td>
                <td className="py-4 whitespace-nowrap text-sm text-start text-gray-500 border-b-[3px]">
                  Wisata Air Terjun
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500 border-b-[3px]">
                  Jl. Manggis Bantul, <br />
                  Yogyakarta
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b-[3px]">
                  082313452351
                </td>
                <td className="py-4 whitespace-nowrap text-sm text-start text-gray-500 border-b-[3px]">
                  airterjun.mail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b-[3px]">
                  <span className="flex gap-2 justify-center text-[#16192C] text-[22px]">
                    <i className="flex justify-center items-center w-[44.55px] h-[51.23px] bg-[#FFFFFF] border-[1px] border-[#E8EBF0] rounded-[6px] ">
                      <MdOutlineReportGmailerrorred />
                    </i>
                    <i className="flex justify-center items-center w-[44.55px] h-[51.23px] bg-[#FFFFFF] border-[1px] border-[#E8EBF0] rounded-[6px] ">
                      <TfiPencil />
                    </i>
                    <i className="flex justify-center items-center w-[44.55px] h-[51.23px] bg-[#FFFFFF] border-[1px] border-[#E8EBF0] rounded-[6px] ">
                      <GoTrashcan />
                    </i>
                  </span>
                </td>
              </tr>
              <tr className="h-[83.97px]">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-900">
                  6
                </td>
                <td className="py-4 whitespace-nowrap text-sm text-start text-gray-500">
                  Wisata Air Terjun
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500 ">
                  Jl. Manggis Bantul, <br />
                  Yogyakarta
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  082313452351
                </td>
                <td className="py-4 whitespace-nowrap text-sm text-start text-gray-500">
                  airterjun.mail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="flex gap-2 justify-center text-[#16192C] text-[22px]">
                    <i className="flex justify-center items-center w-[44.55px] h-[51.23px] bg-[#FFFFFF] border-[1px] border-[#E8EBF0] rounded-[6px] ">
                      <MdOutlineReportGmailerrorred />
                    </i>
                    <i className="flex justify-center items-center w-[44.55px] h-[51.23px] bg-[#FFFFFF] border-[1px] border-[#E8EBF0] rounded-[6px] ">
                      <TfiPencil />
                    </i>
                    <i className="flex justify-center items-center w-[44.55px] h-[51.23px] bg-[#FFFFFF] border-[1px] border-[#E8EBF0] rounded-[6px] ">
                      <GoTrashcan />
                    </i>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
