import { useEffect, useState } from "react";
import { FaRegMoon, FaBars, FaTimes } from "react-icons/fa";
import { GiShakingHands } from "react-icons/gi";

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-teal-700 text-white px-6 py-4 flex justify-between items-center relative">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-2">
        <GiShakingHands className="h-9 w-9 font-bold" />
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
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Projects</a>
        <a href="#" className="hover:underline">Contact</a>
        <span className="border-l border-gray-300 h-5"></span>
        <FaRegMoon className="cursor-pointer" />
      </div>

      {/* Mobile Menu - Slide In */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-teal-800 text-white flex flex-col space-y-4 p-6 shadow-md md:hidden z-40">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Projects</a>
          <a href="#" className="hover:underline">Contact</a>
          <span className="border-t border-gray-300 my-2"></span>
          <FaRegMoon className="cursor-pointer mx-auto text-2xl" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
