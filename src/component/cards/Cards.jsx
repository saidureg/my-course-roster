import Card from "../card/Card";
import PropTypes from "prop-types";

const Cards = ({ course, handleAddToCart }) => {
  return (
    <div>
      <Card handleAddToCart={handleAddToCart} course={course}></Card>
    </div>
  );
};

Cards.propTypes = {
  course: PropTypes.object,
  handleAddToCart: PropTypes.func,
};

export default Cards;
