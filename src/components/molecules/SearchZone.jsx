import { useState } from "react";

function SearchZone({onSearch}) {
  const [countrieValue, setCountrieValue] = useState("");

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
    </form>
  );
}

export default SearchZone;
