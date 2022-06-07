import { useEffect } from "react";
import SideBar from "./SideBar";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
// import Preloader from "../Preloader";

export default function DefaultLayout({ children }) {
  const token = useSelector((state) => state.session.token);
  useEffect(() => {
    if (!token) {
      router.replace("/login");
    }
  }, [token]);
  const router = useRouter();
  return (
    <>
      {/* <Preloader> */}
        <div className="w-screen h-screen flex ">
          <SideBar></SideBar>
          <div className="w-screen h-screen flex flex-col justify-between overflow-auto box-border">
            <div div className="mt-8 mx-10">
              {children}
            </div>
            <div className="sticky bottom-0">
              <footer className="bg-gray-800 ">
                <div className="flex py-5 m-auto  text-white text-sm flex-col items-center border-t">
                  <p>© Copyright 2022. All Rights Reserved.</p>
                </div>
              </footer>
            </div>
          </div>
        </div>
      {/* </Preloader> */}
    </>
  );
}
