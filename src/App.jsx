import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DialerPage from "./components/DialerPage";
import { Route, Routes } from "react-router-dom";
import CallScreen from "./components/CallScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dialerscreen" element={<DialerPage />} />
        <Route path="/callscreen" element={<CallScreen />} />
      </Routes>
    </>
  );
}  

export default App;
