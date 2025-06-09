const Button = ({ handleClickOnButton, value, innerText }) => {
  return (
    <button className="xbtn" value={value} onClick={handleClickOnButton}>
      {innerText}
    </button>
  );
};

export default Button;
