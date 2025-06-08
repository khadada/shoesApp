import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleRadioInputChange }) => {
  return (
    <div className="ml-hack">
      <h2 className="sidebar-title price-title">Price</h2>
      <Input
        title={"All"}
        handleRadioInputChange={handleRadioInputChange}
        value={""}
        name={"xx"}
      />
      <Input
        title={"$0 - $50"}
        handleRadioInputChange={handleRadioInputChange}
        value={50}
        name={"xx"}
      />
      <Input
        title={"$50 - $100"}
        handleRadioInputChange={handleRadioInputChange}
        value={100}
        name={"xx"}
      />
      <Input
        title={"$100 - $150"}
        handleRadioInputChange={handleRadioInputChange}
        value={150}
        name={"xx"}
      />
      <Input
        title={"Over $150"}
        handleRadioInputChange={handleRadioInputChange}
        value={200}
        name={"xx"}
      />
    </div>
  );
};

export default Price;
