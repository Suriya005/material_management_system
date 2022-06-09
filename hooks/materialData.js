import { useSelector, useDispatch } from "react-redux";
import useSWR from "swr";
import { useEffect, useState } from "react";
import useCurrentUser from "./useCurrentUser";
import { setMaterial } from "../redux/material";



export default function materialData() {
  const dispatch = useDispatch();
  const { fetcherWithToken } = useCurrentUser();
  const materialDataSend = useSelector((state) => state.material.material);

  const { data: materialData, error } = useSWR(
    "http://localhost:3001/api/v1/materials",
    fetcherWithToken
  );
  useEffect(() => {
    if (materialData) {
      dispatch(setMaterial(materialData));
      console.log(materialData);
    }
  });

  return { materialDataSend, error };
}
