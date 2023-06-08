import axios from "axios";
import React from "react";
import { FaSearch } from "react-icons/fa";
const Search_form = ({ setWwwGoogleApis }) => {
  const getSearchWord = async (e) => {
    e.preventDefault();
    const search = e.target.elements.searchWord.value;
    console.log("response.data");
    console.log(search);

    const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=20&chart=mostPopular&key=AIzaSyAivgGyLLoZ8EHHGyFBgQIg3PGoCDxg5TM`

    );
    console.log("response.data");
    console.log(response.data);
    setWwwGoogleApis(response.data.items);
  };

  return (
    <form onSubmit={getSearchWord}>
      <input type="text" placeholder="Search" name="searchWord" />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default Search_form;
