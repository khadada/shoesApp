import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import SideBar from "./SideBar/SideBar";

function App() {
  return (
    <>
      <SideBar />
      <Nav />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
