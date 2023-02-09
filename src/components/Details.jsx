export default function Details() {
  return (
    <>
      <div className="my-16 text-lg text-gray-50 font-semibold">
        <h1 className="mb-4">Find definitions and examples. </h1>
        <div className="p-5 bg-myPurple rounded-2xl">
          <p className="poppins text-md text-gray-900 font-semibold mb-1">
            Compelling ={" "}
            <span className="font-medium text-gray-50">
              Tending To Persuade By Forcefulness Of Argument.
            </span>
          </p>
          <p className="poppins text-md text-gray-900 font-semibold mb-1">
            Example :{" "}
            <span className="font-medium text-gray-50">
              New And Compelling Evidence .
            </span>
          </p>
        </div>
      </div>
      <div className="my-16 text-lg text-gray-50 font-semibold">
        <h1 className="mb-4">
          Search for words and find out their part of speech.{" "}
        </h1>
        <div className="p-5 bg-myPurple rounded-2xl">
          <p className="poppins text-md text-gray-900 font-semibold mb-1">
            an airport{" "}
            <span className="font-medium text-gray-50">is a noun </span>
          </p>
          <p className="poppins text-md text-gray-900 font-semibold mb-1">
            to cut down{" "}
            <span className="font-medium text-gray-50">is a verb </span>
          </p>
          <p className="poppins text-md text-gray-900 font-semibold mb-1">
            compelling{" "}
            <span className="font-medium text-gray-50">is an adjective </span>
          </p>
        </div>
      </div>
    </>
  );
}
