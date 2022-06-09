import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../redux/session";
import Preloader from "../components/Preloader";

export default function login() {
  const dispatch = useDispatch();
  useEffect(() => {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      dispatch(setToken(jwt));
    }
  }, []);
  const token = useSelector((state) => state.session.token);
  useEffect(() => {
    if (token.length > 0) {
      router.replace("/");
    }
  }, [token]);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("002");
  const [password, setPassword] = useState("1234");
  const router = useRouter();

  const handleLogin = async () => {
    setIsLoading(true);
    const url = "http://localhost:3001/api/v1/users/login";
    const respone = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    await respone.json().then((data) => {
      dispatch(setToken(data.token));
      // dispatch(
      //   setUser({
      //     fname: data.fname,
      //     lname: data.lname,
      //     sex: data.sex,
      //   })
      // );
    });
    
    router.replace("/");
  };

  return isLoading ? (
    <Preloader></Preloader>
  ) : (
    <div className="flex justify-center items-center w-screen h-screen bg-sky-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center">
          Login to your account
        </h3>
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
          <a className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}
