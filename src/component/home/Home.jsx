import { useState } from "react";
import Cards from "../cards/Cards";
import { useEffect } from "react";
import Cart from "../cart-title/Cart";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [loadData, setLoadData] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [remaining, setRemaining] = useState(20);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setLoadData(data));
  }, []);

  const handleAddToCart = (course) => {
    let credit_hr = course.credit_hour;
    let total_price = course.price;
    const isExist = selectedCourse.find((item) => item.id === course.id);
    if (isExist) {
      return toast.warning(
        "You already taken this course !!! Try another course",
        {
          position: "top-center",
          autoClose: 5000,
        }
      );
    }
    selectedCourse.forEach((element) => {
      credit_hr += element.credit_hour;
      total_price += element.price;
    });
    const creditRemaining = 20 - credit_hr;
    if (credit_hr > 20) {
      return toast.warning(
        "You have already exceeded the credit hour limit !!!",
        {
          position: "top-center",
          autoClose: 5000,
        }
      );
    }
    setTotalCreditHour(credit_hr);
    setTotalPrice(total_price);
    setRemaining(creditRemaining);
    setSelectedCourse([...selectedCourse, course]);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="grid lg:grid-cols-3 gap-4 w-4/5 mx-auto lg:mx-0 p-5">
        {loadData.map((course, idx) => (
          <Cards
            key={idx}
            handleAddToCart={handleAddToCart}
            course={course}
          ></Cards>
        ))}
      </div>
      <div className="mt-6 lg:w-1/5 mx-4">
        <div className="bg-base-100 text-[#1C1B1BCC] rounded-xl space-y-4 p-5">
          <p className="text-[#2F80ED] font-bold text-lg ">
            Credit Hour Remaining {remaining} hr
          </p>
          <hr />
          <h3 className="text-[#1C1B1B] text-xl font-bold ">Course Name</h3>
          <div className="list-decimal">
            {selectedCourse.map((course, idx) => (
              <Cart key={idx} course={course}></Cart>
            ))}
          </div>
          <hr />
          <p className="font-medium ">Total Credit Hour : {totalCreditHour} </p>
          <hr />
          <p className="font-semibold">Total Price : {totalPrice} USD</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
