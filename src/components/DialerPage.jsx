import React from "react";
import "../pages/DialerPage/style.css";
import { MdCall } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";



function DialerPage() {
    const [inputValue, setInputValue] = useState("");

    const handleButtonClick = (number) => {
      setInputValue((prev) => prev + number);
    };

    const navigator = useNavigate()

    useEffect(() => {
        const handleKeyPress = (event) => {
          const validKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "#"];
          if (validKeys.includes(event.key)) {
            setInputValue((prev) => prev + event.key);
          } else if (event.key === "Backspace") {
            setInputValue((prev) => prev.slice(0, -1));
          }
        };
    
        window.addEventListener("keydown", handleKeyPress);
        return () => {
          window.removeEventListener("keydown", handleKeyPress);
        };
      }, []);

  return (
    <>
        <div className="d-flex flex-column mb-3">
            <div className="inpDiv mb-2">
                <input type="text" className="custom-input" value={inputValue}/>
            </div>
            <div className="d-flex mb-2 justify-content-around divsDiv">
                <button onClick={() => handleButtonClick(1)}  className="rounded-circle text-white buttonBg">1</button>
                <button onClick={() => handleButtonClick(2)}  className="rounded-circle  text-white buttonBg">2</button>
                <button onClick={() => handleButtonClick(3)}  className="rounded-circle  text-white buttonBg">3</button>
            </div>
            <div className="d-flex mb-2 justify-content-around divsDiv">
                <button onClick={() => handleButtonClick(4)} className="rounded-circle text-white buttonBg">4</button>
                <button onClick={() => handleButtonClick(5)} className="rounded-circle text-white buttonBg">5</button>
                <button onClick={() => handleButtonClick(6)} className="rounded-circle  text-white buttonBg">6</button>
            </div>
            <div className="d-flex mb-2 justify-content-around divsDiv">
                <button onClick={() => handleButtonClick(7)} className="rounded-circle text-white buttonBg">7</button>
                <button onClick={() => handleButtonClick(8)} className="rounded-circle text-white buttonBg">8</button>
                <button onClick={() => handleButtonClick(9)} className="rounded-circle text-white buttonBg">9</button>
            </div>
            <div className="d-flex mb-2 justify-content-around divsDiv">
                <button onClick={() => handleButtonClick("*")} className="rounded-circle text-white buttonBg ">*</button>
                <button onClick={() => handleButtonClick(0)} className="rounded-circle text-white buttonBg">0</button>
                <button onClick={() => handleButtonClick("#")} className="rounded-circle text-white buttonBg">#</button>
            </div>
            <div className="functionals">
                <NavLink to="/callscreen">
                    <button  className="rounded-circle text-white bg-success mx-2 "><MdCall /></button>
                </NavLink>
                <button  className="rounded-circle text-white bg-success mx-2"><FaVideo /></button>
            </div>
        </div>
    </>
  );
}

export default DialerPage;
