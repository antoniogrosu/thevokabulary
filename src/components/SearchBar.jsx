import { MdSearch } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

export default function SearchBar() {
  const [word, setWord] = useState("");

  function handleChange(event) {
    setWord((word) => event.target.value);
  }

  const [data, setData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bdb62d68d7msh60244c7cdde850ap1eef30jsn65d4d16cba3d",
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
  };

  function submitForm(event) {
    event.preventDefault();
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, options)
      .then((response) => response.json())
      .then((response) => setData(response.results))
      .catch((err) => console.error(err));
  }
  const arr = data.map((obj) => {
    const result = {
      def: obj.definition,
      part: obj.partOfSpeech,
      example: obj.examples,
    };
    return result;
  });
  const results = arr.map((obj) => {
    return (
      <div className="capitalize text-xl mb-10 bg-gray-50 p-5 rounded-tr-3xl rounded-b-3xl">
        <h1 className="poppins text-gray-900 font-semibold">
          {" "}
          <span className="italic text-myPurple mr-2">({obj.part})</span>
          {obj.def}.{" "}
        </h1>
        {obj.example && (
          <>
            <div className="text-gray-900 mt-6 font-medium">example</div>
            <div className="bg-myPurple p-4 mt-2 font-semibold rounded-lg text-gray-900">
              "{obj.example}"
            </div>
          </>
        )}
      </div>
    );
  });
  return (
    <>
      <form className="w-full flex justify-center" onSubmit={submitForm}>
        <input
          type="text"
          value={word}
          onChange={handleChange}
          placeholder="search for a word"
          className="bg-gray-50 h-14 rounded-l-2xl rounded-r-none w-full placeholder:text-gray-300 placeholder:text-sm placeholder:indent-4 indent-4 text-sm text-gray-600 focus-within:outline-none"
        ></input>
        <button className="bg-gradient-to-r from-myPurple to-yellow-200 h-14 rounded-r-2xl px-8">
          <MdSearch style={{ fontSize: "2rem" }} className="text-gray-50" />
        </button>
      </form>
      <div className="mt-20">
        <ol type="1">{results}</ol>
      </div>
    </>
  );
}
