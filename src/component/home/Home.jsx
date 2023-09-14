import { useState } from "react";
import Cards from "../cards/Cards";
import { useEffect } from "react";
import Cart from "../cart-title/Cart";

const Home = () => {
  const [loadData, setLoadData] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setLoadData(data));
  }, []);

  const handleAddToCart = (course) => {
    // let credit_hr = course.credit_hour;
    const isExist = selectedCourse.find((item) => item.id === course.id);
    if (isExist) {
      return alert("Your already added this course!! Try another course");
    }
    setSelectedCourse([...selectedCourse, course]);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="grid lg:grid-cols-3 gap-4 w-5/6 lg:mx-0 p-5">
        {loadData.map((course, idx) => (
          <Cards
            key={idx}
            handleAddToCart={handleAddToCart}
            course={course}
          ></Cards>
        ))}
      </div>
      <div className="mt-6 w-1/6 mx-4">
        <div className="bg-base-100 text-[#1C1B1BCC] rounded-xl space-y-4 p-5">
          <p className="text-[#2F80ED] font-bold text-lg ">
            Credit Hour Remaining{" "}
          </p>
          <hr />
          <h3 className="text-[#1C1B1B] text-xl font-bold ">Course Name</h3>
          <div className="list-decimal">
            {selectedCourse.map((course, idx) => (
              <Cart key={idx} course={course}></Cart>
            ))}
          </div>
          <hr />
          <p className="font-medium ">Total Credit Hour : </p>
          <hr />
          <p className="font-semibold">Total Price : 48000 USD</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
