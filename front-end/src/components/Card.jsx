import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = ({
  title,
  color,
  img,
  category,
  star,
  company,
  newPrice,
  prevPrice,
  reviews,
}) => {
  return (
    <div className="card">
      <img src={img} alt="Shoes" className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <div className="card-reviews">
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          {/* {star}
          {star}
          {star}
          {star}
          {star}
          {star} */}
          <span className="total-reviews">{reviews}</span>
        </div>
        <div className="card-price">
          <div className="price">
            <del>{prevPrice}</del> ${newPrice}
          </div>
          <div className="bag">
            <BsFillBagHeartFill className="bag-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
