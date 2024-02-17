/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";
import config from "../../config";
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${config.apiUrl}choosepath`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to find data by ID
  const findDataById = (id) => {
    return data.find((item) => item.id === id);
  };
  return (
    <DataContext.Provider value={{ findDataById, data }}>
      {children}
    </DataContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => useContext(DataContext);
