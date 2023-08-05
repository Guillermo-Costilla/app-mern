import React from "react";
import "./App.css";
import Main from "./layouts/main";
import Img from "./images/aaa.png";

function App() {
  return (
    <>
      <Main>
        <div className="h-auto flex justify-between mt-[314px] ml-[219px] w-[1291px] h-[304px]">
          <div className="w-[742px] h-[304] gap-10">
            <h1 className="text-[48px] h-[64px] font-bold leading-[63.84px] w-[700px] mb-[35px]">
              Find the perfect destination
            </h1>
            <p className="text-[24px] font-semibold leading-[31.92px] w-[628px] h-[96px] mb-[35px]">
              Our app will help you find the perfect path for your next trip.
              With an easy-to-use interface and a host of itinerary options,
              planning your next trip has never been easier.
            </p>
            <button className="text-2xl rounded-lg py-4 px-5 w-[346px] h-[64] gap-4 bg-indigo-600 text-white font-semibold">View More</button>
          </div>
          <div className="">
            <img className="h-52 w-78" src={Img} />
          </div>
        </div>
      </Main>
    </>
  );
}

export default App;
