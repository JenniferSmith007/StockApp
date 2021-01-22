import React, { Component } from "react";

import { stock } from "../Services/Stocks";

class StockRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      average: null,
      date: null,
      high: null,
      low: null,
      changeDollar: null,
      change_Percentage: null,
    };
  }
  setData(data) {
    console.log(data);
    this.setState({
      average: data.average.toFixed(2),
      date: data.date,
      high: data.high,
      low: data.low,
    });
    stock.getChangepercentage(this.props.ticker, data.date, (yesterday) => {
      console.log(this.props.ticker, yesterday);
      const changeDollar = (data.average - yesterday.average).toFixed(2);
      this.setState({
        changeDollar: changeDollar,
        change_Percentage: (100 * changeDollar / yesterday.average).toFixed(
          1
        ),
      });
    });
  }
  componentDidMount() {
    stock.latestPrice(this.props.ticker, this.setData.bind(this));
  }
  // bind returns a new function, sets to a specific value.
  render() {
    return (
      <tr>
        <td>{this.props.ticker}</td>
        <td>{this.state.average}</td>
        <td>{this.state.date}</td>
        <td>{this.state.high}</td>
        <td>{this.state.low}</td>
        <td>{this.state.changeDollar}</td>
        <td>{this.state.change_Percentage}</td>
        <td>4</td>
      </tr>
    );
  }
}

export default StockRow;
