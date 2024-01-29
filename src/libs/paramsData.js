import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(id) {
  const [data, setData] = useState([]);
//   console.log(id.id, "Datat");
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`https://node-mongodb-vvwu.onrender.com/choosepath/${id}`);
      setData(data.data[0]);
    };
    getData();
  }, [id]);

  return data;
}
