import { constant } from "../Services/constant.js";

export const stock = {
  latestPrice: (ticker, second) => {
    fetch(stock.latestPriceURL(ticker))
      .then((response) => response.json())
      .then((data) => {
        second(stock.styledDataAv(data));
      });
  },
  latestPriceURL: (ticker) => {
    return `${constant.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${constant.api_token}`;
  },
  styledDataAv: (data) => {
    const stockData = data[data.length - 1];
    const styledData = {};
    styledData.average = stockData.average;
    styledData.date = stockData.date;
    styledData.high = stockData.high;
    styledData.low = stockData.low;
    styledData.marketPercent = stockData.marketPercent;
    return styledData;
  },
  getChangepercentage: (ticker, date, second) => {
    fetch(stock.yesterdayClosing(ticker, date))
      .then((response) => response.json())
      .then((data) => second(stock.styledDataAv(data)));
  },
  yesterdayClosing: (ticker, data) => {
    return `${constant.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${constant.api_token}`;
  },
};
