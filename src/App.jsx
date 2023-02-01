import StartComponent from "./components/StartComponent";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="bg-gray-900 poppins py-24 px-8 md:p-24 lg:p-32">
        <StartComponent />
      </div>
    </>
  );
}

export default App;
