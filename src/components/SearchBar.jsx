import { MdSearch } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Details from "./Details";

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
      <div className="capitalize mb-10 bg-myPurple p-5 rounded-2xl">
        {" "}
        <div className="text-gray-50 font-semibold">
          <span className="underline text-md">Part of speech </span>
          <span className="font-bold text-gray-900 ml-2 ">({obj.part})</span>
        </div>
        <div className="text-gray-900 font-semibold mt-8">
          <span className="text-gray-50 underline text-md block mb-3">
            Definition
          </span>
          <span className="text-lg font-semibold">{obj.def}.</span>
        </div>
        {obj.example && (
          <>
            <span className="text-gray-50 underline text-md font-semibold block mt-8 mb-3">
              example
            </span>
            <div className="bg-gray-900 p-4 mt-3 font-medium rounded-lg text-gray-50">
              {obj.example} .
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
          className="font bg-gray-50 h-14 rounded-l-2xl rounded-r-none w-full placeholder:text-gray-300 placeholder:text-sm placeholder:indent-4 indent-4 text-sm text-gray-600 focus-within:outline-none"
        ></input>
        <button className="bg-gradient-to-r from-myPurple to-yellow-200 h-14 rounded-r-2xl px-8">
          <MdSearch style={{ fontSize: "2rem" }} className="text-gray-50" />
        </button>
      </form>
      {results && <div className="mt-20">{results}</div>}
      {!results.length && <Details />}
    </>
  );
}
