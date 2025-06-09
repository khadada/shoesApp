import Button from "../components/Button";
import "./Recommended.css";
const Recommended = ({ handleClickOnButton }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-btn-container">
          <Button
            handleClickOnButton={handleClickOnButton}
            value={""}
            innerText={"All Products"}
          />
          <Button
            handleClickOnButton={handleClickOnButton}
            value={"Nike"}
            innerText={"Nike"}
          />
          <Button
            handleClickOnButton={handleClickOnButton}
            value={"Adidas"}
            innerText={"Adidas"}
          />
          <Button
            handleClickOnButton={handleClickOnButton}
            value={"Puma"}
            innerText={"Puma"}
          />
          <Button
            handleClickOnButton={handleClickOnButton}
            value={"Vans"}
            innerText={"Vans"}
          />
        </div>
      </div>
    </>
  );
};

export default Recommended;
