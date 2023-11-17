import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import './App.css'
import Card from "./components/Cards/Card.jsx";
import Filter from "./components/Filters/Filter.jsx";
import Pagination  from "./components/Pagination/Pagination.jsx"
import Search from "./components/Search/Search."

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("Smith");

  console.log(pageNumber);
  let [fetchedData, updateFetchedData] = useState([])
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

useEffect(() => {
  (async function () {
    let data = await fetch(api).then((res) => res.json());
    updateFetchedData(data);
  })();
}, [api]);

  return (
  <div className="App">
    <h1 className="text-center ubuntu my-4">
      Rick and Morty <span className="text-primary">Wiki</span>
    </h1>
   <Search setPageNumber={setPageNumber} setSearch={setSearch} />
  <div className="container">
  <div className="row">
    <Filter />
    <div className="col-8">
      <div className="row">
        <Card results = {results} />
      </div>
    </div>
  </div>
  </div>
  <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
  </div>
);
}
export default App;
