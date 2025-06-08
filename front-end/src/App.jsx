// ! ||--------------------------------------------------------------------------------||
// ! ||                             Import necessary tools                             ||
// ! ||--------------------------------------------------------------------------------||
import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import SideBar from "./SideBar/SideBar";
// ! ||--------------------------------------------------------------------------------||
// ! ||                                    Database;                                   ||
// ! ||--------------------------------------------------------------------------------||
import data from "./db/data";
import Card from "./components/Card";
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                               Input search filter                              ||
  // ! ||--------------------------------------------------------------------------------||
  const [query, setQuery] = useState("");
  const handleSearchInputChange = (e) => setQuery(e.target.value);

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                               Input Radio Filter                               ||
  // ! ||--------------------------------------------------------------------------------||

  const handleRadioInputChange = (e) => setSelectedCategory(e.target.value);
  // ! ||--------------------------------------------------------------------------------||
  // ! ||                           Buttons Recommended filter                           ||
  // ! ||--------------------------------------------------------------------------------||
  const handleClickOnButton = (e) => setSelectedCategory(e.target.value);
  // ! ||--------------------------------------------------------------------------------||
  // ! ||                             Engine Search & Filter                             ||
  // ! ||--------------------------------------------------------------------------------||
  const engineApp = (db, selected, query) => {
    const filtersProducts = db;
    // ! ||--------------------------------------------------------------------------------||
    // ! ||                           Search input functionality                           ||
    // ! ||--------------------------------------------------------------------------------||
    if (query) {
      const searchedItems = data.filter(({ title }) =>
        title.toLowerCase().indexOf(query.toLowerCase())
      );
      filtersProducts = searchedItems;
    }
    // ! ||--------------------------------------------------------------------------------||
    // ! ||                        Input Radio Filter functionality                        ||
    // ! ||--------------------------------------------------------------------------------||
    if (selected) {
      const filtersProducts = db.filter(
        ({ title, newPrice, color, company, category }) => {
          title.toLowerCase() === selected ||
            newPrice.toLowerCase() === selected ||
            company.toLowerCase() === selected ||
            category.toLowerCase() === selected ||
            color.toLowerCase() === selected;
        }
      );
    }
    return filtersProducts.map(
      ({
        title,
        color,
        img,
        category,
        star,
        company,
        newPrice,
        prevPrice,
        reviews,
      }) => (
        <Card
          key={Math.random()}
          title={title}
          color={color}
          img={img}
          category={category}
          star={star}
          company={company}
          newPrice={newPrice}
          prevPrice={prevPrice}
          reviews={reviews}
        />
      )
    );
  };
  const result = engineApp(data, selectedCategory, query);

  return (
    <>
      <SideBar handleRadioInputChange={handleClickOnButton} />
      <Nav />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
