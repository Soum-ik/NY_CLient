import axios from "axios";
import { useEffect, useState } from "react";

const cache = {}; // Cache object to store fetched data

export function useFetch(id) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Check if data is already cached
      if (cache[id]) {
        setData(cache[id]);
      } else {
        try {
          const response = await axios.get(
            `https://node-mongodb-vvwu.onrender.com/choosepath/${id}`
          );
          const responseData = response.data[0];
          // Cache the fetched data
          cache[id] = responseData;
          setData(responseData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();

    // Clean up function
    return () => {
      // You might want to clear the cache for this id when component unmounts
      delete cache[id];
    };
  }, [id]); // Re-run effect when id changes

  return data;
}
