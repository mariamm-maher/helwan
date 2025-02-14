import { FaSearch } from "react-icons/fa";

const SearchBar = ({ placeholder = "بحث...", className = "", onChange }) => {
  return (
    <div
      className={`flex items-center bg-[#3A3B7D] px-6 py-3 rounded-full w-1/3 shadow-md transition-colors duration-300 hover:bg-[#4a4b8f]/ ${className}`}
    >
      <FaSearch className="text-[#b38e19] ml-2 w-6 h-6 mr-3 transition-transform duration-300 hover:scale-125 animate-pulse" />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent outline-none text-base flex-grow placeholder:text-[#b38e19]/70 text-[#b38e19] transition-colors duration-300 focus:text-white"
        onChange={onChange} // Pass the onChange handler
      />
    </div>
  );
};

export default SearchBar;
