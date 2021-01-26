function CountryDetails({
  flag, name, nativeName, topLevelDomain, population,
  currencies, region, languages, subRegion, capital, borderCountries
}) {
  return (
    <article className="country-details">
      <div className="country-details__image-container">
        <img src={flag} alt={name + " flag"} className="country-details__image" />
      </div>
      
      <div className="country-details__info">
        <h2 className="country-details__name">{name}</h2>
        <p className="country-details__text"><span className="country-details__bold">Native Name:</span> {nativeName}</p>
        <p className="country-details__text">
          <span className="country-details__bold">Top Level Domain:</span>
           {
            topLevelDomain.map((domain) => <span>{domain}</span>)
           }
        </p>
        <p className="country-details__text"><span className="country-details__bold">Population:</span> {population}</p>
        <p className="country-details__text">
          <span className="country-details__bold">Currencies:</span>
          {
            currencies.map((currencie) => <span>{currencie.name}</span>)
          }
        </p>
        <p className="country-details__text"><span className="country-details__bold">Region:</span> {region}</p>
        <p className="country-details__text">
          <span className="country-details__bold">Languages:</span>
          {
            languages.map((language) => <span>{language.name}</span>)
          }
        </p>
        <p className="country-details__text"><span className="country-details__bold">Sub Region:</span> {subRegion}</p>
        <p className="country-details__text"><span className="country-details__bold">Capital:</span> {capital}</p>
        <p className="country-details__text"><span className="country-details__bold">Border Countries:</span>
          {
            borderCountries.map((border) => <span>{border}</span>)
          }
        </p>
      </div>
    </article>
  );
}

export default CountryDetails;
