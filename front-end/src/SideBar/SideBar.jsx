import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import Category from "./Category/Category";
import { FaOpencart } from "react-icons/fa6";
import "./SideBar.css";
const SideBar = () => {
  return (
    <section className="side-bar">
      <div className="logo-container">
        <FaOpencart className="sidebar-logo" />
      </div>
      <div className="filters-container">
        <Category />
        <Price />
        <Colors />
      </div>
    </section>
  );
};

export default SideBar;
