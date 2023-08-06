import "./App.css";
import AddUsers from "./Users/AddUsers";
import Admin from "./Admin";
import { clearAll } from "./store/actions";
import { useDispatch } from "react-redux";
import Product from "./Product";

function App() {
  const dispatch = useDispatch();
  const handleClear = () => {
    console.log("clear");
    dispatch(clearAll());
  };
  return (
    <div className="App">
      <button onClick={handleClear}>clear all</button>
      <Admin />
      <AddUsers />
      <Product/>
    </div>
  );
}

export default App;
