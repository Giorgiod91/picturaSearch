import React from "react";

type Props = {};

function Showcase({}: Props) {
  return (
    <div className="flex flex-col  max-w-7xl">
      <h1 className="text-4xl">Beispiel</h1>
      <div className="flex md:space-x-5 space-y-5 md:flex-row flex-col ">
        <div className="flex md:w-[350px] space-y-5 md:h-[380px] h-[200px] w-[480px] flex-col p-8 border rounded-xl bg-[#212529]">
          <h3 className="text-white">step 3</h3>
          <p className="text-white">some text</p>
          <img
            className="border rounded-xl md:w-[250px] md:h-[360px] w-[350px] h-[250px]"
            src=""
            alt="showcase1"
          />
        </div>
        <div className="flex flex-col  md:w-[350px] space-y-5  md:h-[380px] h-[200px] w-[480px] p-8 border rounded-xl bg-[#212529]">
          <h3 className="text-white">step 3</h3>
          <p className="text-white">some text</p>
          <img
            className="border rounded-xl md:w-[250px] md:h-[360px] w-[350px] h-[250px]"
            src=""
            alt="showcase1"
          />
        </div>
        <div className="flex space-y-5 md:w-[350px] md:h-[380px] h-[200px] w-[480px] flex-col p-8 border rounded-xl bg-[#212529]">
          <h3 className="text-white">step 3</h3>
          <p className="text-white">some text</p>
          <img
            className="border rounded-xl md:w-[250px] md:h-[360px] w-[350px] h-[250px]"
            src=""
            alt="showcase1"
          />
        </div>
      </div>
    </div>
  );
}

export default Showcase;
