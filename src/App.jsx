import StartComponent from "./components/StartComponent";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="h-screen bg-gray-900 poppins py-24 px-8 md:py-16 h-auto px-60 lg:py-24 h-auto px-72">
        <StartComponent />
      </div>
    </>
  );
}

export default App;
