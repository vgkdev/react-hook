import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        try {
          let response = await axios.get(
            "https://api.covid19api.com/country/vietnam?from=2021-11-01T00%3A00%3A00Z&to=2021-11-20T00%3A00%3A00Z"
          );
          let data = response && response.data ? response.data : [];
          if (data && data.length > 0) {
            data.map((item) => {
              item.Date = moment(item.Date).format("DD/MM/YYYY");
              return item;
            });
            data = data.reverse();
          }
          setDataCovid(data);
          setIsLoading(false);
          setIsError(false);
        } catch (e) {
          setIsError(true);
          setIsLoading(false);
          //console.log(e.message);
        }
      }, 2000);
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Covid 19 tracking in VietNam</h2>
      <table>
        {console.log("check data covid: ", dataCovid)}
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {isError === false &&
            isLoading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}

          {isLoading === true && (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          )}

          {isError === true && (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                Something wrong.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Covid;
