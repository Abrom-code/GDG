import { useEffect, useState } from "react";

const useFetch = (url, initialValue) => {
  const [data, setData] = useState(initialValue || "");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Faild to fetch data!");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message || "Faild to fetch ");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
