import { useEffect, useState } from "react"
import "./App.css"
import axios from "axios";
import Card from "./componet/Card.jsx"
import Search from "./componet/Search";
import './App.css'

// import Search from "./componet/Search.jsx";

import Search from "./componet/Search"

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const Response = await axios.get("https://fakestoreapi.com/products");
         console.log(Response.data);//optional code if see the output
        setImages(Response.data);

        const allData = Response.data

        allData.map((t) => {
          <Search title={t.title} />
        } )

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (

    <div>
      <div><Search /></div>

      <div className="App1">
        {images.map((c) => (
          <Card images={c.image} price={c.price} title={c.title} />
        ))}
      </div>

    </div>
  );

}
export default App;