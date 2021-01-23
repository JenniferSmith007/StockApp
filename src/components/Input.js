import { useState } from "react";
import axios from "axios";
import { constant } from "../Services/constant";
import StockInput from "../components/StockInput";

function Input() {
  const [ticker, setSearchTicker] = useState("");
  const [searchedTicker, setSearchedTicker] = useState(undefined);
  const searchUrl = `${constant.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${constant.api_token}`;
  function getDataTwo() {
    console.log(searchUrl);
    axios.get(searchUrl).then(({ data }) => {
      setSearchedTicker(data[0]);
      console.log(data);
    });
  }
  return (
    <div>
      <input
        className="inputbar"
        onChange={(event) => {
          setSearchTicker(event.target.value);
          console.log(event.target.value);
        }}
      ></input>
      <button className="searched" onClick={getDataTwo}>
        Click Me!
      </button>
    </div>
  );
}
export default Input;
