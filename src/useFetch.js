import { useEffect, useState } from "react";
import { useGlobalContext } from "./context";
import { mainData } from "./data";

function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const list = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();

      if (result) {
        console.log(data);
        setData(result);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(data);
      setData(mainData);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    list();
  }, []);

  return { isError, isLoading, data };
}

export { useFetch };
