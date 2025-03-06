import React from "react";
import "../pages/DialerPage/style.css";
import { MdCall } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { useState, useEffect } from "react";

function DialerPage() {
    const [inputValue, setInputValue] = useState("");

    const handleButtonClick = (number) => {
      setInputValue((prev) => prev + number);
    };

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
          <button onClick={() => handleButtonClick(1)}  className="rounded-circle text-white px-4 py-2 buttonBg"><div>1</div></button>
          <button onClick={() => handleButtonClick(2)}  className="rounded-circle  text-white buttonBg"><div>2</div><div className="innerText">ABC</div></button>
          <button onClick={() => handleButtonClick(3)}  className="rounded-circle  text-white buttonBg"><div>3</div><div className="innerText">ABC</div></button>
        </div>
        <div className="d-flex mb-2 justify-content-around divsDiv">
          <button onClick={() => handleButtonClick(4)} className="rounded-circle text-white buttonBg"><div>4</div><div className="innerText">ABC</div></button>
          <button onClick={() => handleButtonClick(5)} className="rounded-circle text-white buttonBg"><div>5</div><div className="innerText">ABC</div></button>
          <button onClick={() => handleButtonClick(6)} className="rounded-circle  text-white buttonBg"><div>6</div><div className="innerText">ABC</div></button>
        </div>
        <div className="d-flex mb-2 justify-content-around divsDiv">
          <button onClick={() => handleButtonClick(7)} className="rounded-circle text-white buttonBg"><div>7</div><div className="innerText">ABC</div></button>
          <button onClick={() => handleButtonClick(8)} className="rounded-circle text-white buttonBg"><div>8</div><div className="innerText">ABC</div></button>
          <button onClick={() => handleButtonClick(9)} className="rounded-circle text-white buttonBg"><div>9</div><div className="innerText">ABC</div></button>
        </div>
        <div className="d-flex mb-2 justify-content-around divsDiv">
          <button onClick={() => handleButtonClick("*")} className="rounded-circle text-white buttonBg px-4 py-2"><div>*</div></button>
          <button onClick={() => handleButtonClick(0)} className="rounded-circle text-white buttonBg"><div>0</div><div className="innerText">ABC</div></button>
          <button onClick={() => handleButtonClick("#")} className="rounded-circle text-white buttonBg q px-4 py-2"><div>#</div></button>
        </div>
        <div className="functionals">
            <button  className="rounded-circle text-white bg-success px-3 py-2 fs-4 mx-2 "><MdCall /></button>
            <button  className="rounded-circle text-white bg-success px-3 py-2 fs-4 mx-2"><div className="p-0"><FaVideo /></div></button>
        </div>
      </div>
    </>
  );
}

export default DialerPage;
