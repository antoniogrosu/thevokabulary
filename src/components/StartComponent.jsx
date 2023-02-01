import illustration from "/illustration.png";
export default function StartComponent() {
  return (
    <div className="w-full lg:flex flex-col items-center">
      <h1 className="text-3xl font-bold text-myPurple text-center md:text-3xl">
        Your online app for English Words
      </h1>
      <div className="w-full flex justify-center my-4 lg:w-6/12 mx-auto">
        <img src={illustration} className="object-cover"></img>
      </div>
      <button className="w-full text-xl text-gray-50 font-semibold bg-gradient-to-r from-myPurple to-yellow-200 py-4 rounded-3xl lg:w-2/4">
        Start Using
      </button>
    </div>
  );
}
