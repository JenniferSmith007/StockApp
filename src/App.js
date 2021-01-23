import "./App.css";
// import Header from "./components/Header";
// import Stocks from "./components/Stocks";
// import SearchedStocks from "./components/SearchedStocks";
import StockRow from "./components/StockRow";
import Input from "./components/Input";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="holder">
        <StockRow ticker="ndaq" />
        <StockRow ticker="spy" />
        <StockRow ticker="fb" />
        <StockRow ticker="snap" />
        <div classname="input">
          <Input />
        </div>
      </div>
    </div>
  );
}

export default App;
