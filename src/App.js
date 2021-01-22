import "./App.css";
// import Header from "./components/Header";
// import Stocks from "./components/Stocks";
// import SearchedStocks from "./components/SearchedStocks";
import StockRow from "./components/StockRow";

function App() {
  return (
    <div className="App">
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Average</th>
            <th>Date</th>
            <th>High</th>
            <th>Low</th>
            <th>percent</th>
          </tr>
        </thead>
        <tbody>
          <StockRow ticker="aapl" />
          <StockRow ticker="goog" />
          <StockRow ticker="msft" />
          <StockRow ticker="tsla" />
        </tbody>
      </table>
      <div className="container">Hello</div>
    </div>
  );
}

export default App;
