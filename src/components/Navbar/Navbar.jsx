import { useEffect, useState } from "react";
import { FaRegMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { GiShakingHands } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useTheme } from "../Provider/ThemeProvider";



const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [time, setTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className=" dark:bg-teal-700 text-gray-900 dark:text-white px-6 py-4 flex justify-between items-center fixed w-full top-0 z-50 shadow-md">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-2">
        <GiShakingHands className="h-9 w-9 font-bold text-teal-600 dark:text-teal-400" />
        <span className="font-bold text-lg">Shakil Hasan</span>
      </div>

      {/* Middle Section: Time and Date (Hidden on Small Screens) */}
      <div className="hidden md:block text-sm">
        {time.toLocaleTimeString()} &nbsp; {time.toLocaleDateString()}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Right Section: Navigation Links */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition">Home</Link>
        <Link to="/about" className="hover:text-teal-600 dark:hover:text-teal-400 transition">About</Link>
        <Link to="/project" className="hover:text-teal-600 dark:hover:text-teal-400 transition">Projects</Link>
        <Link to="/contact" className="hover:text-teal-600 dark:hover:text-teal-400 transition">Contact</Link>
        <span className="border-l border-gray-300 dark:border-gray-700 h-5"></span>
        <button onClick={toggleTheme} className="text-2xl">
          {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaRegMoon />}
        </button>
      </div>

      {/* Mobile Menu - Slide In */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white flex flex-col space-y-4 p-6 shadow-md md:hidden z-40">
          <Link to="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition">Home</Link>
          <Link to="/about" className="hover:text-teal-600 dark:hover:text-teal-400 transition">About</Link>
          <Link to="/project" className="hover:text-teal-600 dark:hover:text-teal-400 transition">Projects</Link>
          <Link to="/contact" className="hover:text-teal-600 dark:hover:text-teal-400 transition">Contact</Link>
          <span className="border-t border-gray-300 dark:border-gray-600 my-2"></span>
          <button onClick={toggleTheme} className="text-2xl mx-auto">
            {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaRegMoon />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
