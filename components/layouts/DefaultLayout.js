import React from "react";
import SideBar from "./SideBar";

export default function DefaultLayout({ children }) {
  return (
    <div className="w-screen h-screen flex">
      <SideBar></SideBar>
      <div className="w-full h-full flex flex-col mt-8 mx-10">
        {children}
      </div>
    </div>
  );
}
