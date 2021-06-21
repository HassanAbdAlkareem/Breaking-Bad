import { useEffect, useState } from "react";
import Home from "./component/Home";
import logo from "./img/logo.png";
import Search from "./component/Search";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    //

    fetchItems();
  }, [query]);
  const fetchItems = async () => {
    setLoading(true);
    const result = await fetch(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    );
    const data = await result.json();
    setItems(data);
    setLoading(false);
  };
  //
  return (
    <div className="app">
      <div className="container">
        <div className="title">
          <img className="title-logo" src={logo} />
        </div>
        <Search getQuery={(q) => setQuery(q)} />
        <Home items={items} loading={loading} />
      </div>
    </div>
  );
}

export default App;
