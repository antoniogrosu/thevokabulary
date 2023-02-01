import StartComponent from "./components/StartComponent";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="bg-gray-900 poppins py-24 px-8 md:py-1 lg:py-24">
        <StartComponent />
      </div>
    </>
  );
}

export default App;
