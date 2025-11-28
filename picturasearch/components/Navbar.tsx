import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="flex flex-row bg-[#0b121f] w-full   p-5">
      <div className="flex mx-auto w-[1300px] space-x-5   h-[70px] justify-between">
        <div className="flex space-x-5 w-[190px] pt-2">
          <img src="" alt="logo" />
          <p className="text-[#a4b1cd]">PicturaSearch</p>
        </div>

        <div>
          <div className="flex justify-end space-x-10  ">
            <div className="border-transparent  h-[68px] hover:border pt-2  hover:border-b-[#9fef00]">
              <a className="hover:text-[#9fef00] text-[#a4b1cd]  ">Pricing</a>
            </div>

            <div className="border-transparent  h-[68px] hover:border pt-2 hover:border-b-[#9fef00]">
              <a className="hover:text-[#9fef00] text-[#a4b1cd] ">Login</a>
            </div>
            <button className="bg-[#9fef00] p-2 w-40 h-[50px] rounded-xl cursor-pointer ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
