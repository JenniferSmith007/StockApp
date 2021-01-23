import "./App.css";
// import Header from "./components/Header";
// import Stocks from "./components/Stocks";
// import SearchedStocks from "./components/SearchedStocks";
import StockRow from "./components/StockRow";
import Input from "./components/Input";

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
          <StockRow ticker="tsla" />
          <StockRow ticker="spy" />
          <StockRow ticker="fb" />
          <StockRow ticker="snap" />
        </tbody>
      </table>
      <div className="container">
        <Input />
      </div>
    </div>
  );
}

export default App;
