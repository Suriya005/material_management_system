import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../redux/session";

export default function login() {
    useEffect(() => {
      if (localStorage.getItem("token")) {
        router.replace("/");
      }
    });
    const dispatch = useDispatch();
  const [username, setUsername] = useState("002");
  const [password, setPassword] = useState("1234");
  const router = useRouter();
  

  const handleLogin = async () => {
    const url = "http://localhost:3001/api/v1/users/login";
    const respone = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
      
    });
    const data = await respone.json();
    dispatch(setToken(data.token));
    router.replace("/");
    
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-sky-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center">
          Login to your account
        </h3>
        {/* <form action=""> */}
          <div className="mt-4">
            <label className="block" value="Username" />
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="mt-4">
            <label className="block" value="Password" />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="flex items-baseline justify-between">
            <button
              onClick={handleLogin}
              className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            >
              Login
            </button>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
        {/* </form> */}
      </div>
    </div>
  );
}
