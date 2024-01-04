import "./App.css";
import React from "react";
import Home from "./spritHome";
import Navbar from "./navbar";
import Footer from "./sprieFooter";
import Product from "./Product";
import Zeros from "./Zerosugar";
import Creators from "./Thecreators";
import Login from "./loginpage";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/produtpage" element={<Product />}></Route>
          <Route path="/zerosugarpage" element={<Zeros />}></Route>
          <Route path="/creatorpage" element={<Creators />}></Route>
          <Route path="/loginpage" element={<Login />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
