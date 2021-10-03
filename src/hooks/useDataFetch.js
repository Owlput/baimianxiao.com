import { useState, useEffect } from "react";
import APIGet from "../PAI";

export const useDataFetch = (target) => {

  const [data, setData] = useState({});

  const handleData = async () => {
    try {
      const result = await APIGet(target);
      setData(result);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    handleData();
  }, []);
  return data;
};
