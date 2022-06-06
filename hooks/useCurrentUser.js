import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/session";
import useSWR from "swr";
import { useEffect } from "react";

export default function useCurrentUser() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.session.token);
  const currentUserData = useSelector((state) => state.session.user);
  //   const { data, error } = useSWR(
  //     token ? `http://localhost:3001/api/v1/users/current` : null,
  //     (url) =>
  //       fetch(url, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //   );

  const fetcher = async (...args) => {
    if (args.length <= 1) {
      args.push({});
    }
    const option = args[1];
    if (!option.headers) {
      option.headers = {};
    }
    option.headers["content-type"] = "application/json";
    const response = await fetch(...args);
    const json = await response.json();
    return json;
  };

  const fetcherWithToken = async (...args) => {
    if (args.length <= 1) {
      args.push({});
    }
    const option = args[1];
    if (!option.headers) {
      option.headers = {};
    }
    option.headers.Authorization = `Bearer ${token}`;
    return await fetcher(...args);
  };

  const { data: userData, error } = useSWR(
    token.length > 0 ? "http://localhost:3001/api/v1/users/me" : null,
    fetcherWithToken
  );
  useEffect(() => {
    if (userData) {
      dispatch(setUser(userData));
    }
  }, [userData]);

  return { token, currentUserData, fetcherWithToken, fetcher };
}
