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
      <div className="grid lg:grid-cols-3 gap-4 w-3/4 p-5">
        {loadData.map((course, idx) => (
          <Cards key={idx} course={course}></Cards>
        ))}
      </div>
      <div>
        <h3>Here add Bookmark section</h3>
      </div>
    </div>
  );
};

export default Home;
