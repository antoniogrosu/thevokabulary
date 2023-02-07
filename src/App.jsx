import StartComponent from "./components/StartComponent";
import Header from "./components/Header";
import FooterComp from "./components/FooterComp";
import SearchComponent from "./components/SearchComponent";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ErrBoundary from "./components/ErrBoundary";

function App() {
  //scroll back to top
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <div className="bg-gray-900 poppins py-24 px-8 md:p-24 lg:p-32">
        <Routes>
          <Route path="/" element={<StartComponent />} exact />
          <Route
            path="/search"
            element={<SearchComponent />}
            errorElement={<ErrBoundary />}
          />
        </Routes>
      </div>
      <FooterComp />
    </>
  );
}

export default App;
