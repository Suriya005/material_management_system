import React from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { BsSearch } from "react-icons/bs";

export default function materialRent() {
  return (
    <DefaultLayout>
      <div>
        <h2 className="text-2xl font-semibold leading-tight my-5">Invoices</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex mb-2">
          <div className="flex basis-1/2">
            <span>รายการวัสดุทั้งหมด</span>
          </div>
          <div className="flex basis-1/2">
            {/* search input */}
            <input
              type="text"
              className="w-full outline-none border-none shadow-md rounded-l ml-2 px-2 py-1"
              placeholder="Search"
            />
            <button className="flex justify-center items-center drop-shadow-lg mr-1 py-1 px-2 bg-blue-500 hover:bg-blue-700 hover:text-white rounded-r">
              <BsSearch></BsSearch>
            </button>
          </div>
        </div>
        <div className="flex mb-2">
          <span className="flex justify-center items-center ">รายการเบิก</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>

          {/* วัสดุทั้งหมด */}
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <div>
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="w-2/12 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      รหัสวัสดุ
                    </th>
                    <th className="w-6/12 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      ชื่อวัสดุ
                    </th>
                    <th className="w-2/12 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      จำนวน
                    </th>
                    <th className="w-2/12 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      เบิกวัสดุ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 bg-white text-sm border-r-2 border-gray-200">
                      <p className="text-gray-900 whitespace-no-wrap">
                        1
                      </p>
                    </td>
                    <td className="px-5 py-5 bg-white text-sm border-r-2 border-gray-200">
                      <p className="text-gray-900 whitespace-no-wrap">
                        lorem adwadnklndipanwdinawdi
                      </p>
                    </td>
                    <td className="px-5 py-5 bg-white text-sm border-r-2 border-gray-200">
                      <p className="text-gray-900 whitespace-no-wrap">6 อัน</p>
                    </td>
                    <td className="flex justify-center items-center px-5 py-5 bg-white text-sm ">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        เบิก
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-gray-100 border-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 rounded-l">
              back
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 ">
              1
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 ">
              2
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-r">
              next
            </button>
          </div>
        </div>

        <div>
          {/* รายการเบิก */}
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="w-2/12 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    รหัสวัสดุ
                  </th>
                  <th className="w-6/12 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    ชื่อวัสดุ
                  </th>
                  <th className="w-2/12 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    จำนวน
                  </th>
                  <th className="w-2/12 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    ลบ
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-5 py-5 bg-white text-sm border-r-2 border-gray-200">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Frederick Nicholas
                    </p>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm border-r-2 border-gray-200">
                    <p className="text-gray-900 whitespace-no-wrap">
                      lorem adwadnklndipanwdinawdi
                    </p>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm border-r-2 border-gray-200">
                    {/* <p className="text-gray-900 whitespace-no-wrap">6 อัน</p> */}
                    <div className="flex justify-center items-center">
                      <input
                        type="number"
                        className="text-gray-900 w-14 pl-1 mr-1 border-gray-900 border-2 rounded text-center "
                      />
                    </div>
                  </td>
                  <td className="flex justify-center items-center px-5 py-5 bg-white text-sm">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      ลบ
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-end">
            <button className="bg-yellow-400 border-yellow-200 hover:bg-yellow-700 hover:text-white py-2 px-4 mr-1 rounded">
              ตรวจสอบ
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded ">
              ยืนยันการเบิก
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
