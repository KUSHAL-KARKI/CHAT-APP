import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2 ">
      <input type="text" placeholder="Search...." className="input input-bordered rounded-full" />
    <button className="btn btn-circle bg-sky-500 text-white border-none"><FaSearch className=" w-6 h-6" /></button>
    </form>
  );
};

export default SearchInput;
