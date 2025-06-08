import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import Category from "./Category/Category";
import { FaOpencart } from "react-icons/fa6";
import "./SideBar.css";
const SideBar = ({ handleRadioInputChange }) => {
  return (
    <section className="side-bar">
      <div className="logo-container">
        <FaOpencart className="sidebar-logo" />
      </div>
      <div className="filters-container">
        <Category handleRadioInputChange={handleRadioInputChange} />
        <Price handleRadioInputChange={handleRadioInputChange} />
        <Colors handleRadioInputChange={handleRadioInputChange} />
      </div>
    </section>
  );
};

export default SideBar;
