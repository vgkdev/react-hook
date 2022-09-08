import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const ourRequest = axios.CancelToken.source(); // <-- 1st step

    const fetchData = async () => {
      setTimeout(async () => {
        try {
          let response = await axios.get(url, {
            cancelToken: ourRequest.token, // <-- 2nd step
          });
          let data = response && response.data ? response.data : [];
          if (data && data.length > 0) {
            data.map((item) => {
              item.Date = moment(item.Date).format("DD/MM/YYYY");
              return item;
            });
            data = data.reverse();
          }
          setData(data);
          setIsLoading(false);
          setIsError(false);
        } catch (err) {
          if (axios.isCancel(err)) {
            console.log("Request canceled", err.message);
          } else {
            setIsError(true);
            setIsLoading(false);
          }
        }
      }, 3000);
    };

    fetchData();

    return () => {
      ourRequest.cancel("Operation canceled by the user."); // <-- 3rd step
    };
  }, [url]);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useFetch;
