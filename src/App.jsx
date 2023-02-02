import StartComponent from "./components/StartComponent";
import Header from "./components/Header";
import FooterComp from "./components/FooterComp";
import SearchComponent from "./components/SearchComponent";
import { useState } from "react";

function App() {
  const [component, setComponent] = useState(false);
  function toggleSearch() {
    setComponent((comp) => !comp);
  }
  return (
    <>
      <Header />
      <div className="bg-gray-900 poppins py-24 px-8 md:p-24 lg:p-32">
        {!component && <StartComponent clicked={toggleSearch} />}
        {component && <SearchComponent />}
      </div>
      <FooterComp />
    </>
  );
}

export default App;
