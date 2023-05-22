import { useEffect, useState } from "react";
function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const list = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const result = await response.json();

      if (result) {
        setData(result);
      } else {
        setData([]);
      }
      setIsLoading(false);
      setIsError(false);
    } catch {
      setIsError(true);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    list();
  }, []);

  return { isError, isLoading, data };
}

export { useFetch };
