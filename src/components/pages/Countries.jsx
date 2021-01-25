import { useEffect, useState } from "react";
import CountryCard from "../molecules/CountryCard";

function Countries() {
  const [countries, setCountries] = useState([]);

  async function fetchCountriesData() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    setCountries(data);
  }

  useEffect(() => {
    fetchCountriesData();
  }, []);

  return (
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
  );
}

export default Countries;
