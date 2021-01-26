import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountryDetails from "./../molecules/CountryDetails";
import TopPanel from "../organisms/TopPanel";

function Country() {
  const [countryDetails, setCountryDetails] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    async function fetchCountryData() {
      const response = await fetch("https://restcountries.eu/rest/v2/name/" + name);
      const data = await response.json();
  
      setCountryDetails(data[0]);
    }

    fetchCountryData();
  }, [name]);

  return (
    <>
      <TopPanel />

      <main className="country-main">
        {
          countryDetails
          ?
            <CountryDetails
              flag={countryDetails.flag}
              name={countryDetails.name}
              nativeName={countryDetails.nativeName}
              topLevelDomain={countryDetails.topLevelDomain}
              population={countryDetails.population}
              currencies={countryDetails.currencies}
              region={countryDetails.region}
              languages={countryDetails.languages}
              subRegion={countryDetails.subRegion}
              capital={countryDetails.capital}
              borderCountries={countryDetails.borders}
            />
          :
            <p>Loading...</p>
        }
      </main>
    </>
  );
}

export default Country;
