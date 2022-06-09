import { useEffect, useState } from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { BsSearch } from "react-icons/bs";
import useSWR from "swr";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

export default function manageMaterial() {
  const [materialData, setMaterialData] = useState(null);
  const token = useSelector((state) => state.session.token);
  const [materialType, setMaterialType] = useState("all");
  const [search, setSearch] = useState("");

  const { data: materialDataReply, error } = useSWR(
    token ? `http://localhost:3001/api/v1/materials` : null,
    (url) =>
      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
      }).then((res) => res.json())
  );
  useEffect(() => {
    if (materialDataReply) {
      setMaterialData(materialDataReply);
    }
  }, [materialDataReply]);

  const searchHandler = async (e) => {
    setSearch(e.target.value);
    axios
      .post(
        `http://localhost:3001/api/v1/materials/search`,
        { search: e.target.value, materialType: materialType },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        setMaterialData(res.data);
      });
  };

  const searchButtonHandler = () => {
    axios
      .post(
        `http://localhost:3001/api/v1/materials/search`,
        { search: search, materialType: materialType },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        setMaterialData(res.data);
      });
  };

  const editMaterial = (id) => {
    
  };

  return (
    <DefaultLayout>
      <div className="flex-col mx-52">
        <div>
          <h2 className="text-2xl font-semibold leading-tight my-5 w-full">
            Invoices
          </h2>
        </div>
        <div className="flex w-full mb-2">
          <div className="flex basis-1/3">
            <span>รายการวัสดุทั้งหมด</span>
          </div>
          <div className="flex basis-1/3">
            <div className="flex justify-center items-center">
              <select
                onChange={(e) => {
                  setMaterialType(e.target.value);
                }}
                className="w-full outline-none border-solid border-2 rounded-md border-black mx-2 px-2 shadow-md"
              >
                <option value={"all"}>วัสดุทั้งหมด</option>
                <option value={"ต้องคืน"}>วัสดุต้องคืน</option>
                <option value={"ไม่ต้องคืน"}>วัสดุที่ไม่ต้องคืน</option>
              </select>
            </div>
          </div>
          <div className="flex basis-1/3">
            {/* search input */}
            <input
              onChange={searchHandler}
              type="text"
              className="w-full outline-none border-none shadow-md rounded-l ml-2 px-2 py-1"
              placeholder="Search"
            />
            <button
              onClick={searchButtonHandler}
              className="flex justify-center items-center drop-shadow-lg mr-1 py-1 px-2 bg-blue-500 hover:bg-blue-700 hover:text-white rounded-r"
            >
              <BsSearch></BsSearch>
            </button>
          </div>
        </div>

        <div className="flex w-full flex-col">
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
                    <th className="w-1/12 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      จำนวน
                    </th>
                    <th className="w-2/12 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      แก้ไข
                    </th>
                    <th className="w-2/12 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      ลบ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {materialData && materialData.length > 0 ? (
                    materialData.map((item, key) => {
                      return (
                        <tr className="border-b-2" key={item.material_id}>
                          <td className="px-5 py-5 bg-white text-sm border-r-2 border-gray-200">
                            <p className="text-gray-900 whitespace-no-wrap text-center">
                              {item.material_id}
                            </p>
                          </td>
                          <td className="px-5 py-5 bg-white text-sm border-r-2 border-gray-200">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {item.material_name}
                            </p>
                          </td>
                          <td className="px-5 py-5 bg-white text-sm border-r-2 border-gray-200">
                            <p className="text-gray-900 whitespace-no-wrap text-center">
                              {item.material_qty}
                            </p>
                          </td>
                          <td className=" px-5 py-5 bg-white text-sm border-r-2 border-gray-200">
                            <div className="flex justify-center items-center">
                              <button
                                onClick={editMaterial(item.material_id)}
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                              >
                                แก้ไข
                              </button>
                            </div>
                          </td>
                          <td className=" px-5 py-5 bg-white text-sm ">
                            <div className="flex justify-center items-center">
                              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                ลบ
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="5">
                        <div className="text-center">
                          <h1>ไม่มีข้อมูล</h1>
                        </div>
                      </td>
                    </tr>
                  )}
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
      </div>
    </DefaultLayout>
  );
}
