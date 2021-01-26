import {Link} from "react-router-dom";
import SearchZone from "./../molecules/SearchZone";

function TopPanel({isSearch}) {
  return(
    <div className="top-panel">
      {
        isSearch
        ?
          <SearchZone />
        :
          <Link to="/" className="back-button">Back</Link>
      }
    </div>
  );
}

export default TopPanel;
