import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faDollarSign } from "@fortawesome/free-solid-svg-icons";

const Card = ({ course, handleAddToCart }) => {
  const { img, title, credit_hour, details, price } = course;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full px-3 pt-3" src={img} alt={title} />
      </figure>
      <div className="card-body lg:h-80">
        <h2 className="card-title text-[#1C1B1B] font-semibold">{title}</h2>
        <p className="text-[#1C1B1B99] ">{details}</p>
        <div className="flex justify-between text-[#1C1B1B99] font-medium">
          <div className="flex items-center gap-5">
            <p className="text-xl lg:text-2xl">
              <FontAwesomeIcon icon={faDollarSign} />
            </p>
            <h4>Price: {price} </h4>
          </div>

          <div className="flex items-center gap-5">
            <p className="text-xl lg:text-2xl">
              <FontAwesomeIcon icon={faBookOpen} />
            </p>
            <h4>Credit: {credit_hour}hr </h4>
          </div>
        </div>

        <button
          onClick={() => handleAddToCart(course)}
          className="btn btn-primary"
        >
          Select
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  course: PropTypes.object,
  handleAddToCart: PropTypes.func,
};

export default Card;
