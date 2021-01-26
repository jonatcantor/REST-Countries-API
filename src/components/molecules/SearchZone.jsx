import { useState } from "react";

function SearchZone({onSearch, onSelect}) {
  const [countrieValue, setCountrieValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  function handleSelectChange(e) {
    e.preventDefault();

    setSelectValue(e.target.value);
    onSelect(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(countrieValue === "") {
      return;
    }

    onSearch(countrieValue);
  }

  function handleInputChange(e) {
    e.preventDefault();
    setCountrieValue(e.target.value);
  }

  return (
    <form className="search-zone" onSubmit={handleSubmit}>
      <div className="search">
        <button type="submit">Search</button>
        <input type="text" onChange={handleInputChange} value={countrieValue} placeholder="Search"/>
      </div>

      <div className="select">
        <select value={selectValue} onChange={handleSelectChange}>
          <option value="">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </form>
  );
}

export default SearchZone;
