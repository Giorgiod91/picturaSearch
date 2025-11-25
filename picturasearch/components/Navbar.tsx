import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="flex flex-row bg-[#212529] w-full">
      <div className="flex mx-auto w-[1300px] border bg-white h-[70px] justify-between">
        <div className="flex space-x-5 w-[190px]">
          <img src="" alt="logo" />
          <p>PicturaSearch</p>
        </div>

        <div>
          <div className="flex justify-end ">
            <p>Pricing</p>
            <p>Login</p>
            <button className="bg-[#9fef00] p-2 w-40 h-[60px] rounded-xl cursor-pointer ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
