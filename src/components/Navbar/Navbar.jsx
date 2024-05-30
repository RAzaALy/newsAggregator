import React from "react";
import { navs } from "../../config/config";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className=" text-gray-800 flex items-center justify-between p-4  ">
        <div className="flex items-center  space-x-4">
          <div className="text-xl font-bold flex cursor-pointer">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-7"
              alt="newsAggregator Logo"
            />
            <div className="heading ml-2 text-gray-800 text-xlg">
              News Aggregator
            </div>
          </div>
          <div className="space-x-4">
            {navs.map((nav, idx) => (
              <Link
                to={nav.page}
                key={idx}
                className="hover:text-gray-400 hover:underline ml-2 "
              >
                {nav.nav}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
