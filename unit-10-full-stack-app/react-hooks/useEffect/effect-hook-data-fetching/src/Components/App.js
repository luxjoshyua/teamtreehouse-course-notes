import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

import SearchForm from "./SearchForm";
import GifList from "./GifList";

function App() {
  // declare state and setData function to update the state
  // the data state holds the array of GIF objects returned from the Giphy API
  const [data, setData] = useState([]);
  // declare state variable named query and state updater function named setQuery
  // the query state will be updated with the value the user types into the search field
  const [query, setQuery] = useState("cats");
  // declare isLoading state and setIsLoading state updater function
  const [isLoading, setIsLoading] = useState(true);

  // updates the query state with the value the user submits
  const performSearch = (value) => setQuery(value);

  // similar to componentDidMount and componentDidUpdate and componentWillUnmount
  useEffect(() => {
    axios(
      `http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=KUyDpwjtygeZJr70006xWPN0nPFnJ73v`
    )
      .then((response) => setData(response.data.data))
      .catch((error) => console.log("Error fetching and parsing data", error))
      .finally(() => setIsLoading(false));
  }, [query]); // add the query dependency

  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={performSearch} />
        </div>
      </div>
      <div className="main-content">
        {/* pass down the data state */}
        {/* render the loading indicator if the isLoading state is true, or render GifList component it it's false */}
        {isLoading ? <p>Loading...</p> : <GifList data={data} />}
      </div>
    </>
  );
}

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{windowWidth}</div>;
}

export default App;
