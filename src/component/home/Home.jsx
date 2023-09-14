import { useState } from "react";
import Cards from "../cards/Cards";
import { useEffect } from "react";

const Home = () => {
  const [loadData, setLoadData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setLoadData(data));
  }, []);
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="grid lg:grid-cols-3 gap-4 w-5/6 lg:mx-0 p-5">
        {loadData.map((course, idx) => (
          <Cards key={idx} course={course}></Cards>
        ))}
      </div>
      <div className="mt-6 w-1/6 mx-4">
        <div className="bg-base-100 rounded-xl space-y-4 p-5">
          <p className="text-[#2F80ED] font-bold text-lg ">
            Credit Hour Remaining{" "}
          </p>
          <hr />
          <h3 className="text-[#1C1B1B] text-xl font-bold ">Course Name</h3>
          <ul className="text-[#1C1B1B99] list-decimal pl-4">
            <li> Introduction to c programming</li>
          </ul>
          <hr />
          <p className="text-[#1C1B1BCC] font-medium ">Total Credit Hour : </p>
          <hr />
          <p className="text-[#1C1B1BCC] font-semibold">
            Total Price : 48000 USD
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
