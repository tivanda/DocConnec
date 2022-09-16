import React from "react";
import Logo from "../../img/first-aid.png";
import { UilSearch } from "@iconscout/react-unicons";
import "./Search.css";

const Search = () => {
  return (
    <div className="Search">
      <div className="Searchb">
        <input type="text" placeholder="Trazi"></input>
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;
