// import { searchIcon } from "../assets";
import { ReactComponent as SearchIcon } from "../assets/search-icon.svg";

const SearchMovie = () => {
  return (
    <form className="flex items-center gap-2 sm:gap-4">
      <div className="flex items-start flex-1 gap-2">
        <SearchIcon fill="#fff" className="w-5 h-5 sm:w-7 sm:h-7" />
        <input
          type="text"
          className="flex-1 bg-transparent w-full text-xl md:text-2xl caret-lightRed text-white focus-within:border-b focus-within:border-lightBlue focus-within:outline-none pb-2"
          placeholder="Search for movies or TV Series"
        />
      </div>
      <button className="bg-lightBlue px-3 sm:px-4 py-3 text-white text-sm sm:text-base hover:opacity-90 rounded-lg transition-opacity">
        Search
      </button>
    </form>
  );
};

export default SearchMovie;
