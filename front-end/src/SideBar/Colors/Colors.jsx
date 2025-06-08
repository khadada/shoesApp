import Input from "../../components/Input";
import "./Colors.css";

const Colors = (handleRadioInputChange) => {
  return (
    <div className="minus-ml">
      <h2 className="sidebar-title">Colors</h2>
      <Input
        classHack="mixColor"
        title={"All"}
        handleRadioInputChange={handleRadioInputChange}
        value={""}
        color={"#fff"}
        name={"xx"}
      />
      <Input
        title={"Black"}
        handleRadioInputChange={handleRadioInputChange}
        value={"black"}
        name={"xx"}
        color={"black"}
      />
      <Input
        title={"Blue"}
        handleRadioInputChange={handleRadioInputChange}
        value={"blue"}
        color={"#4287f5"}
        name={"xx"}
      />
      <Input
        title={"Green"}
        handleRadioInputChange={handleRadioInputChange}
        value={"green"}
        name={"xx"}
        color={"#09b82c"}
      />
      <Input
        title={"Red"}
        handleRadioInputChange={handleRadioInputChange}
        value={"red"}
        name={"xx"}
        color={"#d1490f"}
      />
      <Input
        title={"White"}
        handleRadioInputChange={handleRadioInputChange}
        value={"white"}
        name={"xx"}
        color={"#aaa"}
      />
    </div>
  );
};

export default Colors;
