import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
import moment from "moment";
import useFetch from "../customize/fetch";
const Covid = () => {
  // const [dataCovid, setdataCovid] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  //componentDidMount;
  //"https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z"
  let today = new Date(new Date().setHours(0, 0, 0, 0));
  //let today = new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" });
  //today = today.toLocaleString("en-US", { timeZone: "Asia/Jakarta" });
  let priorDate = moment().subtract(30, "days");
  //let utcpriorDate = moment.tz(priorDate, "Asia/Bangkok").utc().format();
  console.log(">>> today: ", today);
  console.log(">>> priorDate: ", priorDate);
  //console.log(">>> utcpriorDate: ", utcpriorDate);
  //priorDate = priorDate.tz("Asia/Bangkok");
  //const priorDate = moment().subtract(31, 'days');
  const {
    data: dataCovid,
    isLoading,
    isError,
  } = useFetch(
    `https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString()}&to=${today.toISOString()}`
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
