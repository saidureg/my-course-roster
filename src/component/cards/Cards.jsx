import Card from "../card/Card";
import PropTypes from "prop-types";

const Cards = ({ course }) => {
  return (
    <div>
      <Card course={course}></Card>
    </div>
  );
};

Cards.propTypes = {
  course: PropTypes.object,
};

export default Cards;
