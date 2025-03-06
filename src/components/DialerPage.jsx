import React from "react";
import "../pages/DialerPage/style.css";
import { MdCall } from "react-icons/md";
import { FaVideo } from "react-icons/fa";

function DialerPage() {
  return (
    <>
      <div className="d-flex flex-column mb-3">
        <div className="inpDiv mb-2">
          <input type="text" className="custom-input" />
        </div>
        <div className="d-flex mb-2 justify-content-around divsDiv">
          <button className="rounded-circle text-white px-4 py-2 buttonBg"><div>1</div></button>
          <button className="rounded-circle  text-white buttonBg"><div>2</div><div className="innerText">ABC</div></button>
          <button className="rounded-circle  text-white buttonBg"><div>3</div><div className="innerText">ABC</div></button>
        </div>
        <div className="d-flex mb-2 justify-content-around divsDiv">
          <button className="rounded-circle text-white buttonBg"><div>4</div><div className="innerText">ABC</div></button>
          <button className="rounded-circle text-white buttonBg"><div>5</div><div className="innerText">ABC</div></button>
          <button className="rounded-circle  text-white buttonBg"><div>6</div><div className="innerText">ABC</div></button>
        </div>
        <div className="d-flex mb-2 justify-content-around divsDiv">
          <button className="rounded-circle text-white buttonBg"><div>7</div><div className="innerText">ABC</div></button>
          <button className="rounded-circle text-white buttonBg"><div>8</div><div className="innerText">ABC</div></button>
          <button className="rounded-circle text-white buttonBg"><div>9</div><div className="innerText">ABC</div></button>
        </div>
        <div className="d-flex mb-2 justify-content-around divsDiv">
          <button className="rounded-circle text-white buttonBg px-4 py-2"><div>*</div></button>
          <button className="rounded-circle text-white buttonBg"><div>0</div><div className="innerText">ABC</div></button>
          <button className="rounded-circle text-white buttonBg q px-4 py-2"><div>#</div></button>
        </div>
        <div className="functionals">
            <button className="rounded-circle text-white bg-success px-3 py-2 fs-4 mx-2 "><MdCall /></button>
            <button className="rounded-circle text-white bg-success px-3 py-2 fs-4 mx-2"><div className="p-0"><FaVideo /></div></button>
        </div>
      </div>
    </>
  );
}

export default DialerPage;
