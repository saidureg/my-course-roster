import PropTypes from "prop-types";

const Cart = ({ course }) => {
  const { title } = course;
  return <li className="text-[#1C1B1B99] pl-2 mt-1"> {title}</li>;
};

Cart.propTypes = {
  course: PropTypes.object,
};

export default Cart;
