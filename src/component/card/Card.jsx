import PropTypes from "prop-types";

const Card = ({ course }) => {
  const { img, title, credit_hour, details, price } = course;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full px-3 pt-3" src={img} alt="Shoes" />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>
        <div className="flex justify-between">
          <h4>Price: {price} </h4>
          <h4>Credit: {credit_hour}hr </h4>
        </div>

        <button className="btn btn-primary">Select</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  course: PropTypes.object,
};

export default Card;
