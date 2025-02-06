import { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaXTwitter,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa6";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative bg-teal-700 text-white text-center py-6">
      <h2 style={{ fontFamily: "Lobster, cursive", fontSize: 50, margin: 0 }}>
        Shakil Hasan Mithun
      </h2>
      <div className="flex justify-center gap-4 my-4 text-2xl">
        <a href="#" className="hover:text-gray-300">
          <FaLinkedin />
        </a>
        <a href="#" className="hover:text-gray-300">
          <FaGithub />
        </a>
        <a href="#" className="hover:text-gray-300">
          <FaXTwitter />
        </a>
        <a href="#" className="hover:text-gray-300">
          <FaInstagram />
        </a>
      </div>
      <div className="bg-teal-900 py-3">
        <p className="text-sm">© 2025 All Rights Reserved.</p>
      </div>
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 bg-teal-500 text-white p-3 rounded-full shadow-md hover:bg-purple-400 transition-all"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
