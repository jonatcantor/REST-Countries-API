import { useEffect, useState } from "react";
import CountryCard from "../molecules/CountryCard";
import TopPanel from "../organisms/TopPanel";

function Countries() {
  const [countries, setCountries] = useState([]);

  async function handleSearch(name) {
    const response = await fetch("https://restcountries.eu/rest/v2/name/" + name);
    const data = await response.json();
    setCountries(data);
  }

  async function fetchCountriesData() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    setCountries(data);
  }

  useEffect(() => {
    fetchCountriesData();
  }, []);

  return (
    <>
      <TopPanel isSearch onSearch={handleSearch} />

      <main className="main-grid">
        { countries.map((country) =>
          <CountryCard
            key={country.alpha3Code}
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        )}
      </main>
    </>
  );
}

export default Countries;
