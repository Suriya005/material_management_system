import React, { useState, useEffect } from "react";
import { FaChartPie, FaSignOutAlt, FaShare } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { resetAll, setToken } from "../../redux/session";
import useCurrentUser from "../../hooks/useCurrentUser";
import { BiLogIn } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

export default function SideBar() {
  const { token, fetcherWithToken, currentUserData } = useCurrentUser();

  const dispatch = useDispatch();
  useEffect(() => {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      dispatch(setToken(jwt));
    }
    if (token) {
      console.log("token", token);
    }
  }, []);

  useEffect(() => {
    console.log("currentUserData", currentUserData);
    if (currentUserData && token) {
      if (currentUserData.fname === undefined) {
        dispatch(resetAll());
        router.replace("/login");
        window.location.reload();
      }
      // fetcherWithToken("http://localhost:3001/api/v1/users").then((res) => {
      //   console.log("user", currentUserData);
      // });
    }
  });

  const router = useRouter();
  const [open, setOpen] = useState(true);
  const [navOpen, setNavOpen] = useState(true);
  const [subBar, setSubBar] = useState([
    { name: "dashboard", toggle: false },
    { name: "audience", toggle: false },
    { name: "income", toggle: false, sub2: [{ toggle: false }] },
    { name: "promote", toggle: false },
  ]);
  const toggle = (tab) => {
    subBar.map((item, index) => {
      if (item.name === tab) {
        item.toggle = !item.toggle;
        setSubBar([...subBar]);
      } else {
        item.toggle = false;
      }
    });
  };
  const sub2Toggle = (tab, arr) => {
    subBar.map((item, index) => {
      if (item.name === tab) {
        item.sub2[arr].toggle = !item.sub2[arr].toggle;
        setSubBar([...subBar]);
      }
    });
  };

  const activeClass = "bg-gray-800 text-gray-200";
  const expandedClass = "border-l border-gray-400 ml-4 pl-4";
  const shrinkedClass =
    "sm:absolute top-0 left-20 sm:shadow-md sm:z-10 sm:bg-gray-900 sm:rounded-md sm:p-4 border-l sm:border-none border-gray-400 ml-4 pl-4 sm:ml-0 w-28";
  const sub_expandedClass = "border-l border-gray-400 ml-4 pl-4";
  const sub_shrinkedClass =
    "sm:absolute top-0 left-28 sm:shadow-md sm:z-10 sm:bg-gray-900 sm:rounded-md sm:p-4 border-l sm:border-none border-gray-400 ml-4 pl-4 sm:ml-0 w-28";

  return (
    <>
      {/* <div className="h-screen mx-auto antialiased flex justify-between"> */}
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => {
          setNavOpen(!navOpen);
          setOpen(!navOpen);
        }}
        className="sm:hidden absolute top-5 right-5 focus:outline-none"
      >
        {/* Menu Icons */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${navOpen ? "hidden" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>

        {/* Close Menu */}
        <svg
          x-cloak
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${navOpen ? "" : "hidden"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div
        className={`h-screen bg-gray-900 transition-all duration-75 space-y-2 fixed sm:relative ${
          open ? "w-64 sticky" : "w-64 sm:w-20 "
        } ${navOpen ? "top-0 left-0" : "top-0 -left-64 sm:left-0"}`}
      >
        <Link href="/">
          <h1
            className={`text-white font-black py-4 ${
              open ? "text-2xl px-4" : "text-xl px-4 sm:px-2"
            }`}
          >
            LOGO
          </h1>
        </Link>
        <div className="px-4 space-y-2">
          {/* SideBar Toggle */}
          <button
            className="hidden sm:block focus:outline-none absolute p-1 -right-3 top-10 bg-gray-900 rounded-full shadow-md"
            onClick={() => {
              setOpen(!open);
              setNavOpen(!navOpen);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-4 transition-all duration-300 transform text-white ${
                open ? "rotate-90" : "-rotate-90"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          {/* Profile */}
          <div className="relative ">
            <div
              className={`flex justify-between text-gray-400 hover:text-gray-200 space-x-2 rounded-md p-2 ${
                open ? "justify-start" : "sm:justify-center"
              }`}
            >
              <div
                onClick={() => {
                  dispatch(resetAll());
                  router.replace("/");
                }}
                className="relative flex space-x-2 items-center"
              >
                <div>
                  <CgProfile className="text-2xl"></CgProfile>
                </div>

                <div className={`flex flex-col pl-1 ${open ? "" : "hidden"}`}>
                  <span className={`text-white text-md text-sm`}>
                    {currentUserData?.fname + " " + currentUserData?.lname}
                  </span>
                  <span className={`text-white text-sm`}>jhon@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Home */}
          <div className="relative ">
            <div
              onClick={() => toggle("dashboard")}
              className={`flex justify-between text-gray-400 hover:text-gray-200 hover:bg-gray-800 space-x-2 rounded-md p-2 cursor-pointer ${
                open ? "justify-start" : "sm:justify-center"
              }`}
            >
              <div className="relative flex space-x-2 items-center">
                <FaChartPie className="text-2xl"></FaChartPie>
                <h1 className={`${open ? "" : "hidden"}`}>Dashboard</h1>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ${open ? "" : "hidden"}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            {/* Dropdow content*/}
            <div
              className={`text-gray-400 space-y-3 ${
                open ? expandedClass : shrinkedClass
              } ${subBar[0].toggle ? "" : "hidden"}`}
            >
              <h1 className="hover:text-gray-200 cursor-pointer">Item 1</h1>
              <h1 className="hover:text-gray-200 cursor-pointer">Item 2</h1>

              <h1 className="hover:text-gray-200 cursor-pointer">Item 4</h1>
            </div>
          </div>

          {/* Rent */}
          <Link href="/materialRent">
            <div className="relative ">
              <div
                className={`flex justify-between text-gray-400 hover:text-gray-200 hover:bg-gray-800 space-x-2 rounded-md p-2 cursor-pointer ${
                  open ? "justify-start" : "sm:justify-center"
                }`}
              >
                <div className="relative flex space-x-2 items-center">
                  <FaSignOutAlt className="text-2xl"></FaSignOutAlt>
                  {/* เบิกวัสดุ */}
                  <h1 className={`${open ? "" : "hidden"}`}>Material Rent</h1>
                </div>
              </div>
            </div>
          </Link>

          {/* Return */}
          <Link href="/materialReturn">
            <div className="relative ">
              <div
                className={`flex justify-between text-gray-400 hover:text-gray-200 hover:bg-gray-800 space-x-2 rounded-md p-2 cursor-pointer ${
                  open ? "justify-start" : "sm:justify-center"
                }`}
              >
                <div className="relative flex space-x-2 items-center">
                  <FaShare className="text-2xl"></FaShare>
                  {/* คืนวัสดุ */}
                  <h1 className={`${open ? "" : "hidden"}`}>Material Return</h1>
                </div>
              </div>
            </div>
          </Link>

          {/* Request */}
          <Link href="/materialRequest">
            <div className="relative ">
              <div
                className={`flex justify-between text-gray-400 hover:text-gray-200 hover:bg-gray-800 space-x-2 rounded-md p-2 cursor-pointer ${
                  open ? "justify-start" : "sm:justify-center"
                }`}
              >
                <div className="relative flex space-x-2 items-center">
                  <FaShare className="text-2xl"></FaShare>
                  {/* คืนวัสดุ */}
                  <h1 className={`${open ? "" : "hidden"}`}>
                    Material Request
                  </h1>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Logout */}
        <div className="absolute inset-x-0 bottom-0">
          <div
            className="relative"
            onClick={() => {
              dispatch(resetAll());
              router.replace("/");
            }}
          >
            <div
              className={`flex justify-between text-gray-400 hover:text-gray-200 hover:bg-red-400 space-x-2 rounded-md p-2 cursor-pointer ${
                open ? "justify-start" : "sm:justify-center"
              }`}
            >
              <div
                onClick={() => {
                  dispatch(resetAll());
                  router.replace("/");
                }}
                className="relative flex space-x-2 items-center"
              >
                <BiLogIn className="text-2xl"></BiLogIn>

                <div className={`flex flex-col pl-1 ${open ? "" : "hidden"}`}>
                  <span className={`text-white text-md text-md`}>Logout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
