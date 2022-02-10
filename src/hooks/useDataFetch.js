import { useState, useEffect } from "react";
import APIGet from "../API";

export default function useDataFetch(target) {
  const [data, setData] = useState();

  useEffect(() => {
    const handleData = async () => {
      try {
        const result = await APIGet(target);
        setData(result);
      } catch (e) {
        console.error(e);
      }
    };
    handleData();
  },[target]);
  return data;
}
