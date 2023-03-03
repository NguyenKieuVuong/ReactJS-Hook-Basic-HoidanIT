import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import useFetch from "../customize/fetch";
const Covid = () => {
  // const [dataCovid, setdataCovid] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  //componentDidMount;
  //"https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z"
  const { dataCovid, isLoading, isError } = useFetch(
    "https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z"
  );
  return (
    <div>
      <h3>Covid 19 tracking in VietNam:</h3>
      <table>
        {/* {console.log(">>> check data covid: ", dataCovid)} */}
        <thead>
          <tr>
            <th>Confirmed</th>
            <th>Deaths</th>
            <th>Recovered</th>
            <th>Active</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {isError === false &&
            isLoading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.Confirmed}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                  <td>{item.Active}</td>
                  <td>{item.Date}</td>
                </tr>
              );
            })}
          {isLoading === true && (
            <tr>
              <td colSpan={5} className="text-center">
                Loading...
              </td>
            </tr>
          )}
          {isError === true && (
            <tr>
              <td colSpan={5} className="text-center">
                Something Wrong...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Covid;
