
import { useRootContext } from "@/Provider/context";
import React from "react";

const Search = () => {
  const { openSearch, toggleSearch } = useRootContext();

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("search"));
    toggleSearch();
  };
  return (
    <div className={`search-popup${openSearch ? " active" : ""}`}>
      <div
        onClick={toggleSearch}
        className='search-popup__overlay search-toggler'
      ></div>
      <div className='search-popup__content'>
        <form action='#' onSubmit={handleSearch}>
          <label htmlFor='search' className='sr-only'>
            search here
          </label>
          <input type='text' id='search' placeholder='Search Here...' />
          <button type='submit' aria-label='search submit' className='thm-btn'>
            <span>
              <i className='paroti-icon-magnifying-glass'></i>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
