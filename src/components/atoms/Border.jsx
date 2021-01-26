import {Link} from "react-router-dom";

function Border({border}) {
  return (
    <Link to={"" + border} className="border">{border}</Link>
  );
}

export default Border;
