"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaHouseMedical } from "react-icons/fa6";

const Nav = () => {
  const isLoggedIn = true;
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav className="flex justify-between items-center bg-white m-3 p-3 rounded-md">
      <div className="flex gap-2 items-center ">
        <Link
          href="/"
          className="text-2xl border text-black rounded-full p-3 hover:text-white hover:bg-black transiiton-colors duration-300"
        >
          <FaHouseMedical />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="max-sm:hidden flex gap-2">
        <Link href="/create" className="link">
          Create Product
        </Link>
        <Link href="/profile" className="link">
          Profile
        </Link>
        <button className="px-3 border rounded-full text-black hover:bg-white hover:text-black transition-colors duration-300 border-black">
          Sign In
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isLoggedIn ? (
          <div>
            <FaBars
              className="cursor-pointer text-2xl text-black"
              onClick={() => setDropdown(!dropdown)}
            />

            {dropdown && (
              <div className="bg-white text-black absolute w-full min-w-[210px] mt-3 top-full right-0 rounded-lg p-3 flex flex-col justify-center items-center gap-2">
                <Link
                  href="/create"
                  className="button_hover"
                  onClick={() => setDropdown(!dropdown)}
                >
                  Create Product
                </Link>
                <Link
                  href="/profile"
                  className="button_hover"
                  onClick={() => setDropdown(!dropdown)}
                >
                  Profile
                </Link>
                <button className="button_hover">Sign In</button>
              </div>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
