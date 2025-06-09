import { FiHeart } from "react-icons/fi";
import "./Nav.css";
import { AiOutlineShopping, AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({ query, handleSearchInputChange }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          placeholder="Enter your search shoes..."
          value={query}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShopping className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
