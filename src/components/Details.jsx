export default function Details() {
  return (
    <>
      <div className="my-16 text-lg text-gray-50 font-semibold">
        <h1 className="mb-4">
          Search for words and find out their hierarchical information as well.{" "}
        </h1>
        <div className="p-5 bg-myPurple rounded-2xl">
          <p className="poppins text-md text-gray-900 font-semibold mb-1">
            a hatchback{" "}
            <span className="font-medium text-gray-50">is a type of car </span>
          </p>
          <p className="poppins text-md text-gray-900 font-semibold mb-1">
            a finger{" "}
            <span className="font-medium text-gray-50">
              is a part of a hand{" "}
            </span>
          </p>
          <p className="poppins text-md text-gray-900 font-semibold mb-1">
            oxygen{" "}
            <span className="font-medium text-gray-50">
              is a substance of water{" "}
            </span>
          </p>
        </div>
      </div>
      <div className="my-16 text-lg text-gray-50 font-semibold">
        <h1 className="mb-4">
          You can find synonyms, antonyms, or even rhymes.{" "}
        </h1>
        <div className="p-5 bg-myPurple rounded-2xl">
          <p className="poppins text-md text-gray-900 font-semibold mb-1">
            fast ={" "}
            <span className="font-medium text-gray-50">
              quick, profligate, flying
            </span>
          </p>
          <p className="poppins text-md text-gray-900 font-semibold mb-1">
            beauty <span className="line-through">=</span>{" "}
            <span className="font-medium text-gray-50">ugliness</span>
          </p>
          <p className="poppins text-md text-gray-900 font-semibold mb-1">
            game rhymes :{" "}
            <span className="font-medium text-gray-50">aim, blame, claim</span>
          </p>
        </div>
      </div>
    </>
  );
}
