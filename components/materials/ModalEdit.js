import { useState } from "react";
import axios from "axios";
import {useRouter} from "next/router";

export default function Modal(props) {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(props.item);
  const router = useRouter();
  return (
    <>
      <button
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        แก้ไข
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-6/12 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    แก้ไขวัสดุรหัส {data.material_id}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <label className="block text-xl mt-1">ชื่อวัสดุ</label>
                  <input
                    className="mt-1 px-2 py-1 text-4xl form-input block w-full sm:text-sm sm:leading-5 rounded-md shadow-md outline-none focus:border-2 focus:border-gray-400 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out"
                    placeholder="ชื่อวัสดุ"
                    type="text"
                    value={data.material_name}
                    onChange={(e) =>
                      setData({ ...data, material_name: e.target.value })
                    }
                  />
                  <label className="block text-xl mt-1">จำนวน</label>
                  <input
                    className="mt-1 px-2 py-1 text-4xl form-input block w-full sm:text-sm sm:leading-5 rounded-md shadow-md outline-none focus:border-2 focus:border-gray-400 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out"
                    placeholder="จำนวน"
                    type="number"
                    value={data.material_qty}
                    onChange={(e) =>
                      setData({ ...data, material_qty: e.target.value })
                    }
                  />
                  <label className="block text-xl mt-1">หน่วย</label>
                  <input
                    className="mt-1 px-2 py-1 text-4xl form-input block w-full sm:text-sm sm:leading-5 rounded-md shadow-md outline-none focus:border-2 focus:border-gray-400 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out"
                    placeholder="หน่วย"
                    type="text"
                    value={data.material_unit}
                    onChange={(e) =>
                      setData({ ...data, material_unit: e.target.value })
                    }
                  />
                  <label className="block text-xl mt-1">ประเภท</label>
                  <input
                    className="mt-1 px-2 py-1 text-4xl form-input block w-full sm:text-sm sm:leading-5 rounded-md shadow-md outline-none focus:border-2 focus:border-gray-400 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out"
                    placeholder="ประเภท"
                    type="text"
                    value={data.material_type}
                    onChange={(e) =>
                      setData({ ...data, material_type: e.target.value })
                    }
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-red-500 text-white hover:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setData(props.item);
                    }}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white hover:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      console.log("this item ", data);
                      axios
                        .put(
                          `http://localhost:3001/api/v1/materials`,
                          {
                            editData: data,
                          },
                          {
                            headers: {
                              Authorization: `Bearer ${localStorage.getItem(
                                "token"
                              )}`,
                            },
                          }
                        )
                        .then((res) => {
                            // router.replace("/manageMaterial");
                            // window.location.reload();
                            props.updateData();
                          
                        });
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
