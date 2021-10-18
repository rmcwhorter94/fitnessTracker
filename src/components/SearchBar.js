import { useState } from "react";

const [filteredRoutines, setFilteredPost] = useState("");
const [isSearching, setIsSearching] = useState("");
const [searchTerm, setSearchTerm] = useState("");

const handleSearchRoutines = (event, routines, searchTerm) => {
  event.preventDefault();
  setFilteredPost(
    routines.filter((post) => {
      if (
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description
          .toLowerCase()
          .includes(searchTerm.toLowertoLowerCase()) ||
        post.price.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    })
  );
  setIsSearching(true);
  // };

  return (
    <>
      <form
        onsubmit={(event) => handleSearchRoutines(event, routines, searchTerm)}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
        <button id="search">Search</button>
      </form>
    </>
  );
};
export default SeachBar;
