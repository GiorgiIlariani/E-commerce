import React from "react";
import { Routes, Route } from "react-router-dom";

// import pages
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Index";
import About from "./pages/about/Index";
import Error from "./pages/error/Index";
import Carts from "./pages/cart/Index.";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/carts" element={<Carts />}></Route>
      </Routes>
    </React.Fragment>
  );
}
