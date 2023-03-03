import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
const Covid = () => {
  const [dataCovid, setdataCovid] = useState([]);
  //componentDidMount;
  useEffect(async () => {
    let res = await axios.get(
      "https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z"
    );
    //console.log("check res ", res.data);
    //Neu có res tra ve va res.data co du lieu se tra ve res.data neu khong tra ve rong []
    let data = res && res.data ? res.data : [];
    //neu data khong rong [] va data du lieu ban ghi > 0 se loc qua data ham map
    if (data && data.length > 0) {
      data.map((item) => {
        //get item date item.Date va dung thu vien moment de format lai data date
        item.Date = moment(item.Date).format("DD/MM/YYYY");
        // tra luu nguoc lai ve du lieu item tren dong
        return item;
      });
    }
    setdataCovid(data);
  }, []);
  return (
    <div>
      <h3>Covid 19 tracking in VietNam:</h3>
      <table>
        {console.log(">>> check data covid: ", dataCovid)}
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
          {dataCovid &&
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
        </tbody>
      </table>
    </div>
  );
};

export default Covid;
