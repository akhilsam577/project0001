import { Link, useParams } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <Link to="/" className="tree bt">
            WIX
          </Link>
          <Link to="/creation" className="tree">
            Creation
          </Link>
          <Link to="/business" className="tree">
            Business
          </Link>
          <Link to="/growth" className="tree">
            Growth
          </Link>
          <Link to="/resource" className="tree">
            Resource
          </Link>
          <Link to="/" className="tree">
            |
          </Link>
          <Link to="/pricing" className="tree">
            Pricing
          </Link>
          <Link to="/support" className="tree">
            Support
          </Link>
        </div>
        <div>
          <button className="btn">
            <span>signup</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
