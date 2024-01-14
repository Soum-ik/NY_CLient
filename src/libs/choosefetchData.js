import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch(api) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(api);
      setData(data.data);
    };
    getData();
  }, [api]);

  return data;
}
