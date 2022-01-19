import { Link, useParams } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/" className="tree bt">
          WIX
        </Link>
        <Link to="/" className="tree">
          Creation
        </Link>
        <Link to="/" className="tree">
          Business
        </Link>
        <Link to="/" className="tree">
          Growth
        </Link>
        <Link to="/" className="tree">
          Resource
        </Link>
        <Link to="/" className="tree">
          |
        </Link>
        <Link to="/" className="tree">
          Pricing
        </Link>
        <Link to="/" className="tree">
          Support
        </Link>
        <button className="btn">signup</button>
      </div>
    </>
  );
};

export default Header;
