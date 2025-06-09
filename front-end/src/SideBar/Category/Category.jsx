import Input from "../../components/Input";
import "./Category.css";

const Category = ({ handleRadioInputChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <Input
          title={"All"}
          handleRadioInputChange={handleRadioInputChange}
          value={""}
          name={"x"}
        />

        <Input
          title={"Flats"}
          handleRadioInputChange={handleRadioInputChange}
          value={"flats"}
          name={"x"}
        />
        <Input
          title={"Sneakers"}
          handleRadioInputChange={handleRadioInputChange}
          value={"sneakers"}
          name={"x"}
        />
        <Input
          title={"Sandals"}
          handleRadioInputChange={handleRadioInputChange}
          value={"sandals"}
          name={"x"}
        />
        <Input
          title={"Heels"}
          handleRadioInputChange={handleRadioInputChange}
          value={"heels"}
          name={"x"}
        />
      </div>
    </div>
  );
};

export default Category;
