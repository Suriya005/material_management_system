import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { BsSearch } from "react-icons/bs";
import useSWR from "swr";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import Modal from "../components/materials/ModalEdit";
import ReactPaginate from "react-paginate";
import DeleteButton from "../components/materials/deleteButton";
import AddMaterial from "../components/materials/ModalAdd";

export default function manageMaterial() {
  const [materialData, setMaterialData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalPage, setTotalPage] = useState(0);
  const [totalData, setTotalData] = useState(0);
  const token = useSelector((state) => state.session.token);
  const [materialType, setMaterialType] = useState("all");
  const [search, setSearch] = useState("");
  const [editMaterial, setEditMaterial] = useState(false);
  const [materialTEM, setMaterialTEM] = useState([]);

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
      setTotalPage(Math.ceil(materialDataReply.length / rowsPerPage));
      setTotalData(materialDataReply.length);
      setMaterialData(materialDataReply.slice(0, rowsPerPage));
      setMaterialTEM(materialDataReply);
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
        setTotalPage(Math.ceil(res.data.length / rowsPerPage));
        setTotalData(res.data.length);
        setMaterialData(res.data.slice(0, rowsPerPage));
        setMaterialTEM(res.data);
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
        setTotalPage(Math.ceil(res.data.length / rowsPerPage));
        setTotalData(res.data.length);
        setMaterialData(res.data.slice(0, rowsPerPage));
        setMaterialTEM(res.data);
      });
  };

  const getMaterialData = async () => {
    axios
      .get(`http://localhost:3001/api/v1/materials`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setTotalPage(Math.ceil(res.data.length / rowsPerPage));
        setTotalData(res.data.length);
        setMaterialData(res.data.slice(0, rowsPerPage));
        setMaterialTEM(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;
    setPage(currentPage);
    setMaterialData(
      materialTEM.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
      )
    );
  };

  const deleteMaterial = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        axios.delete(`http://localhost:3001/api/v1/materials/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        getMaterialData();
      }
    });
  };

  return (
    <DefaultLayout>
      <div className="flex-col mx-52">
        <div>
          <h2 className="text-2xl font-semibold leading-tight my-5 w-full">
            รายการวัสดุทั้งหมด
          </h2>
        </div>
        <div className="flex w-full mb-2">
          <div className="flex basis-1/2">
            <div className="flex flex-col">
              <AddMaterial
                updateData={() => {
                  getMaterialData();
                }}
              ></AddMaterial>
            </div>
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
          <div className="flex basis-1/2">
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
                              <Modal
                                item={item}
                                updateData={() => {
                                  getMaterialData();
                                }}
                              ></Modal>
                            </div>
                          </td>
                          <td className=" px-5 py-5 bg-white text-sm ">
                            <div className="flex justify-center items-center">
                              <DeleteButton
                                deleteMaterial={() => {
                                  deleteMaterial(item.material_id);
                                }}
                              ></DeleteButton>
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
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={totalPage}
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName={"flex justify-center items-center mt-4"}
            pageClassName={
              "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-1 rounded"
            }
            pageLinkClassName={"text-white"}
            previousClassName={
              "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mr-1 rounded"
            }
            previousLinkClassName={"text-white py-2 px-4 box-border"}
            nextClassName={
              "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
            }
            nextLinkClassName={"text-white py-2 px-4 box-border"}
            breakClassName={
              "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
            }
            breakLinkClassName={"text-white py-2 px-4 box-border"}
            activeClassName={
              "border-blue-500 hover:border-blue-700 text-blue-700 border-4"
            }
          />
        </div>
      </div>
    </DefaultLayout>
  );
}
