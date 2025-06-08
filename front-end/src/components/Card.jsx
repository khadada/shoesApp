import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = () => {
  return (
    <div className="card">
      <img
        src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
        alt="Shoes"
        className="card-img"
      />
      <div className="card-details">
        <h3 className="card-title">title</h3>
        <div className="card-reviews">
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <span className="total-reviews">4</span>
        </div>
        <div className="card-price">
          <div className="price">
            <del>400$</del> 200$
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
