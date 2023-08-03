import React from "react";
import "./App.css";
import Main from "./layouts/main";
import Img from "./images/aaa.png";

function App() {
  return (
    <>
      <Main>
        <div className="flex justify-center w-full h-full">
          <div className="ml-40 w-1/2 gap-10 mt-56 flex flex-col items-start">
            <h1 className="text-5xl font-bold my-1 text-left">
              Find the perfect destination
            </h1>
            <p className="w-3/5 text-2xl text-left">
              Our app will help you find the perfect path for your next trip.
              With an easy-to-use interface and a host of itinerary options,
              planning your next trip has never been easier.
            </p>
            <button className="mt-1 text-center text-xl bg-indigo-600 text-gray-50 texto-lg px-8 py-4 w-48 rounded-lg font-bold">View More</button>
          </div>
          <div className="mr-44 mt-64">
            <img className="h-52 w-78" src={Img} />
          </div>
        </div>
      </Main>
    </>
  );
}

export default App;
