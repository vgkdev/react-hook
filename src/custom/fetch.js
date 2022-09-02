import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        try {
          let response = await axios.get(url);
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
        } catch (e) {
          setIsError(true);
          setIsLoading(false);
        }
      }, 2000);
    };

    fetchData();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useFetch;
