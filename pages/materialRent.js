import React from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";

export default function materialRent() {
  return (
    <DefaultLayout>
      <div>
        <h2 className="text-2xl font-semibold leading-tight my-5">Invoices</h2>
      </div>
      <div className="flex m-1">
            {/* search input */}
            <span className="flex justify-center items-center ">Search</span>
            <input className="w-24 outline-none border-solid border-2 rounded-md border-black mx-2 px-2 shadow-md" />
          </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
         
          <div>
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    รหัสวัสดุ
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    ชื่อวัสดุ
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    จำนวน
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    เบิกวัสดุ
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-5 py-5 bg-white text-sm border-r-2 border-gray-200">
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Frederick Nicholas
                      </p>
                    </div>
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

        <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Client / Invoice
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Issued / Due
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-5 py-5 bg-white text-sm">
                  <div className="flex">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img
                        className="w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Frederick Nicholas
                      </p>
                      <p className="text-gray-600 whitespace-no-wrap">000001</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">$12,000</p>
                  <p className="text-gray-600 whitespace-no-wrap">USD</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Sept 6, 2019
                  </p>
                  <p className="text-gray-600 whitespace-no-wrap">
                    Due 3 weeks ago
                  </p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">Overdue</span>
                  </span>
                </td>
                <td className="px-5 py-5 bg-white text-sm text-right">
                  <button
                    type="button"
                    className="inline-block text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      className="inline-block h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DefaultLayout>
  );
}
