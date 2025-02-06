import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Shakil Hasan Mithun", "Web Designer", "Web Developer", "MERN Stack Developer"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <section className="bg-[#EDE9FE] min-h-screen flex items-center justify-center px-6 md:px-12 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-purple opacity-20"></div>

      {/* Content Wrapper */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 w-full">
        {/* Left Content */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-2xl flex items-center gap-2 justify-center md:justify-start">
            <span className="text-3xl">👋</span> Hello
          </h2>
          <h1 className="text-4xl font-bold mt-2">
            I'm <span className="text-teal-700">{text}</span>
            <Cursor cursorStyle="|" />
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-lg mx-auto md:mx-0">
            “I have a strong interest in web development and thrive on challenges that push me to learn and grow in new directions. My curiosity drives me to explore and expand my skills continuously. I enjoy problem-solving and building innovative solutions that enhance user experiences.”
          </p>
          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button className="bg-teal-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-800 transition">
              Hire Me
            </button>
            <button className="bg-teal-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-800 transition">
              Download Resume
            </button>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            {[FaInstagram, FaFacebook, FaGithub, FaLinkedin, FaYoutube].map((Icon, index) => (
              <Icon key={index} className="text-teal-700 text-2xl hover:scale-110 cursor-pointer" />
            ))}
          </div>
        </div>

        {/* Right Side: Meditating Person Illustration */}
        <div className="relative flex-1 flex justify-center">
          {/* Meditating Person Image */}
          <img src="/src/assets/man.png" alt="Meditating Person" className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] animate-float mt-20" />

          {/* Floating Elements */}
          {/* <img src="/src/assets/book.png" alt="Book" className="w-12 absolute top-5 left-5 md:left-0 md:top-10 animate-float hidden md:block" />
          <img src="/src/assets/code.png" alt="Code" className="w-12 absolute bottom-5 right-5 md:right-0 md:bottom-10 animate-float hidden md:block" />
          <img src="/src/assets/clock.png" alt="Clock" className="w-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-purple-700 rounded-full shadow-lg hidden md:block" /> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
