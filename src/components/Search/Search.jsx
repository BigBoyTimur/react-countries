import './search.sass'
import {IoSearch} from "react-icons/io5"
import {Input} from "react-select/animated";
function Search({search, setSearch}) {
  return (
    <div className="search-container">
      <IoSearch style={{width: '16px'}}/>
      <input
        className="search"
        type="search"
        placeholder="Search for a country..."
        onChange={(e) => setSearch(e.target.value)} value={search}
      />
      </div>
  );
}

export default Search;