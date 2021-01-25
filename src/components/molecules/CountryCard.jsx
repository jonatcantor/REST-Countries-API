import { Link } from "react-router-dom";

function CountryCard({ flag, name, population, region, capital }) {
  return (
    <article className="country-card">
      <div className="country-card__image-container">
        <img src={flag} alt={name + " flag"} className="country-card__image" />
      </div>
      
      <div className="country-card__info">
        <h2 className="country-card__name">{name}</h2>
        <p className="country-card__text"><span className="country-card__bold">Population:</span> {population}</p>
        <p className="country-card__text"><span className="country-card__bold">Region:</span> {region}</p>
        <p className="country-card__text"><span className="country-card__bold">Capital:</span> {capital}</p>
      </div>
      <Link to={"/country/" + name} className="country-card__link" />
    </article>
  );
}

export default CountryCard;
