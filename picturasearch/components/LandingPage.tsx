import React from "react";

type Props = {};

export default function LandingPage({}: Props) {
  return (
    <div className="flex  flex-col max-w-7xl">
      <div className="flex items-center md:flex-row flex-col space-y-5 space-x-5 mt-60">
        <div className="flex w-1/2 flex-col ">
          <h1 className="text-7xl p-2 text-white">picturaSearch</h1>
          <p className="text-white p-2">
            Dont take hours to search for the right product, we use Machine
            Learning to anaylse from images
          </p>
          <button className="bg-[#9fef00]  hover:border-2 hover:border-black hover:bg-[#a4c75e] p-2 w-40 h-[60px] rounded-xl cursor-pointer ">
            I am in
          </button>
        </div>
        <div className="flex w-2/2">
          <video
            className="border w-[400px] h-[300px] border-white rounded-2xl"
            src=""
          ></video>
          <h1 className="text-7xl text-white"></h1>
        </div>
      </div>
    </div>
  );
}
