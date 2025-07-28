import { FaSearch, FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap items-center gap-2">
            <FaBuilding className="text-cyan-400 text-2xl" />
            <span className="text-white">Dhruv</span>
            <span className="text-slate-400">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-600 p-2 rounded-full flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-48 md:w-64 transition-all duration-300 ease-in-out focus:w-32 sm:focus:w-72 text-white placeholder-slate-300"
          />
          <button type="submit" aria-label="Search">
            <FaSearch className="text-slate-300 hover:text-cyan-400 transition-colors" />
          </button>
        </form>
        <ul className="flex items-center gap-4 sm:gap-6">
          <Link to="/">
            <li className="hidden sm:inline text-slate-300 hover:text-white transition-colors">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-300 hover:text-white transition-colors">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="bg-cyan-500 text-white px-4 py-2 rounded-full hover:bg-cyan-600 transition-all font-semibold">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
