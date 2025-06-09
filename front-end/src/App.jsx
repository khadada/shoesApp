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
import database from "./db/data";
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

  const handleRadioInputChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  // ! ||--------------------------------------------------------------------------------||
  // ! ||                           Buttons Recommended filter                           ||
  // ! ||--------------------------------------------------------------------------------||
  const handleClickOnButton = (e) => setSelectedCategory(e.target.value);
  // ! ||--------------------------------------------------------------------------------||
  // ! ||                             Engine Search & Filter                             ||
  // ! ||--------------------------------------------------------------------------------||
  const engineApp = (data, selected, query) => {
    let filtersProducts = data;
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
      filtersProducts = filtersProducts.filter(
        ({ title, newPrice, color, company, category }) =>
          title === selected ||
          newPrice == selected ||
          company === selected ||
          category === selected ||
          color === selected
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
  let result = engineApp(database, selectedCategory, query);
  console.log(`The value of category selected is: ${selectedCategory}`);

  console.log(result);

  return (
    <>
      <SideBar handleRadioInputChange={handleRadioInputChange} />
      <Nav query={query} handleRadioInputChange={handleRadioInputChange} />
      <Recommended handleClickOnButton={handleClickOnButton} />
      <Products result={result} />
    </>
  );
}

export default App;
