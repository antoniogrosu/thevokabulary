import StartComponent from "./components/StartComponent";
import Header from "./components/Header";
import FooterComp from "./components/FooterComp";
import SearchComponent from "./components/SearchComponent";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="bg-gray-900 poppins py-24 px-8 md:p-24 lg:p-32">
        <Routes>
          <Route path="/" element={<StartComponent />}></Route>
          <Route path="/search" element={<SearchComponent />}></Route>
        </Routes>
      </div>
      <FooterComp />
    </BrowserRouter>
  );
}

export default App;
