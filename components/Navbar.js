"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <nav className="bg-white bg-opacity-30 backdrop-blur-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-lg font-bold">
          <Link href="/">ChaosLand</Link>
        </div>
        <div className="flex space-x-4 item-center">
          <Link href="/" className="text-black hover:text-gray-600">
            Home
          </Link>
          <Link href="/about" className="text-black hover:text-gray-600">
            About
          </Link>
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="px-4 py-2 bg-white bg-opacity-50 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
