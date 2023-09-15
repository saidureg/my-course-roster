import "./App.css";
import Home from "./component/home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-[#F3F3F3]">
      <h1 className="text-4xl font-bold text-center text-[#312D2D] pt-12 pb-8">
        Course Registration
      </h1>
      <ToastContainer></ToastContainer>
      <Home></Home>
    </div>
  );
}

export default App;
