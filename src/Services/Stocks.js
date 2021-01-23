import { constant } from "../Services/constant.js";
import Input from "../components/Input";

export const Stocks = {
  latestPrice: (ticker, second) => {
    fetch(Stocks.latestPriceURL(ticker))
      .then((response) => response.json())
      .then((data) => {
        second(Stocks.styledDataAv(data));
      });
  },
  latestPriceURL: (ticker) => {
    return `${constant.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${constant.api_token}`;
  },
  styledDataAv: (data) => {
    const stockData = data[data.length - 1];
    const styledData = {};
    styledData.average = stockData.close;
    styledData.date = stockData.date;
    styledData.high = stockData.high;
    styledData.low = stockData.low;

    return styledData;
  },

  getChangepercentage: (ticker, date, second) => {
    fetch(Stocks.yesterdayClosing(ticker, date))
      .then((response) => response.json())
      .then((data) => second(Stocks.styledDataAv(data)));
  },
  yesterdayClosing: (ticker, date) => {
    return `${constant.base_url}/stock/${ticker}/intraday-prices?chartLast=1&exactDate=20210121&token=${constant.api_token}`;
  },
};
export default Stocks;
