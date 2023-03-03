import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
const useFetch = (url) => {
  const [dataCovid, setdataCovid] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(async () => {
    try {
      async function fetchData() {
        // You can await here
        let res = await axios.get(url);
        
        //console.log("check res ", res.data);
        //Neu có res tra ve va res.data co du lieu se tra ve res.data neu khong tra ve rong []
        let data = res && res.data ? res.data : []; // true,false
        //neu data khong rong [] va data du lieu ban ghi > 0 se loc qua data ham map
        if (data && data.length > 0) {
          data.map((item) => {
            //get item date item.Date va dung thu vien moment de format lai data date
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            // tra luu nguoc lai ve du lieu item tren dong
            return item;
          });
          //dao nguoc data tu duoi len tren
          data = data.reverse();
        }
        setdataCovid(data);
        setIsLoading(false);
        setIsError(false);
        // ...
      }
      fetchData();
    } catch (e) {
      console.log(">>> check error: ", e);
      console.log(e.name, "-", e.message);
      setIsError(true);
      setIsLoading(false);
    }
  }, []);
  return {
    dataCovid,
    isLoading,
    isError,
  };
};
export default useFetch;
