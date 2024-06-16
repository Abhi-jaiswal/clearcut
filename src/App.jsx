import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SayHello from "./pages/SayHello";


const App = () => {
  return (<div className="bg-[#18181C] w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/say-hello" element={<SayHello/>}/>
      </Routes>
    </div>
  )
};

export default App;
