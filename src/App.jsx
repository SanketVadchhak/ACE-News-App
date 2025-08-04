// src/App.jsx

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";

function App() {
  const [category, setCategory] = useState("technology");
  const [searchTerm, setSearchTerm] = useState("");
  const [countryQuery, setCountryQuery] = useState("India");

  const handleSetCategory = (newCategory) => {
    setCategory(newCategory);
    setSearchTerm("");
  };

  const handleSetSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const handleSetCountry = (newCountry) => {
    setCountryQuery(newCountry);
    setSearchTerm("");
  };

  return (
    <div>
      <Navbar
        setCategory={handleSetCategory}
        setSearch={handleSetSearch}
        setCountryQuery={handleSetCountry}
        countryQuery={countryQuery} 
      />
      <NewsBoard
        category={category}
        searchTerm={searchTerm}
        countryQuery={countryQuery}
      />
    </div>
  );
}

export default App;
