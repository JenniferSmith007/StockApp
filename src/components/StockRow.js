import React, { Component } from "react";
import Input from "../components/Input";
import { Stocks } from "../Services/Stocks";

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
  styler() {
    let color;
    if (this.state.changeDollar > 0) {
      color = `#00ff00`;
    } else {
      color = `#ff3300`;
    }
    return {
      color: color,
      fontSize: `0.8rem`,
      marginLeft: 5,
    };
  }
  setData(data) {
    console.log(data);
    this.setState({
      average: data.average,
      date: data.date,
      high: data.high,
      low: data.low,
    });
    Stocks.getChangepercentage(this.props.ticker, data.date, (yesterday) => {
      console.log(this.props.ticker, yesterday);
      const changeDollar = (data.average - yesterday.average).toFixed(2);
      const change_Percentage = (
        (100 * changeDollar) /
        yesterday.average
      ).toFixed(1);
      this.setState({
        changeDollar: `${changeDollar}`,
        change_Percentage: `(${change_Percentage}%)`,
      });
    });
  }
  componentDidMount() {
    Stocks.latestPrice(this.props.ticker, this.setData.bind(this));
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

        <span className="change" style={this.styler()}>
          <td>{this.state.changeDollar}</td>
          <td>{this.state.change_Percentage}</td>
          {Input}
        </span>
      </tr>
    );
  }
}

export default StockRow;
