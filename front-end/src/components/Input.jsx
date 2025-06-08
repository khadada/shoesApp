const Input = ({
  handleRadioInputChange,
  name,
  value,
  title,
  color,
  classHack,
}) => {
  return (
    <label className="sidebar-label-container ">
      <input
        type="radio"
        onChange={handleRadioInputChange}
        value={value}
        name={name}
      />
      <span
        style={{ boxShadow: `0px 0px 3px 1px ${color}` }}
        className={`checkmark ${classHack}`}
      ></span>
      {title}
    </label>
  );
};

export default Input;
