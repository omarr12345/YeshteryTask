import { Link } from "react-router-dom";
import "./sec-nav.scss";

const SecNav = () => {
  return (
    <div className="sec-nav">
      <div className="container my-0 h-100">
        <div className="h-100">
          <ul className="d-flex flex-row h-100">
            <li>
              <Link to="/a">Men</Link>
            </li>
            <li>
              <Link to="/a">Women</Link>
            </li>
            <li>
              <Link to="/a">Kids</Link>
            </li>
            <li>
              <Link to="/a">Sports&fitness</Link>
            </li>
            <li>
              <Link to="/a">Electronics</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecNav;
