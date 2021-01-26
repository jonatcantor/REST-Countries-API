import {Link} from "react-router-dom";
import SearchZone from "./../molecules/SearchZone";

function TopPanel({isSearch, onSearch, onSelect}) {
  return(
    <div className="top-panel">
      {
        isSearch
        ?
          <SearchZone onSearch={onSearch} onSelect={onSelect} />
        :
          <Link to="/" className="back-button">Back</Link>
      }
    </div>
  );
}

export default TopPanel;
