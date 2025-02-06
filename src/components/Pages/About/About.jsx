import { FaCalendarAlt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { FaXTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const About = () => {
    const [text] = useTypewriter({
        words: [
            "Shakil Hasan Mithun",
      "Web Designer",
      "Web Developer",
      "MERN Stack Developer",
        ],
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 50,
    });
    return (
        <div className='lg: pt-16 bg-gray-100'>
            <section className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between p-10">
      {/* Left Side */}
      <div className="md:w-2/3 text-center md:text-left">
        <h1 className="text-5xl font-bold text-teal-700 font-serif">Shakil Hasan Mithun</h1>
        <h2 className="flex items-center gap-2 text-teal-600 mt-2 text-3xl font-bold">
          <FaUser className="text-3xl" />
          {text}
          <Cursor cursorStyle="|"/>
        </h2>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          Hi, I'm a Web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, JavaScript,
          Bootstrap, React JS, Tailwind CSS, Node JS, Express JS, and MongoDB.
        </p>

        <div className="mt-6 space-y-3 text-lg flex gap-5">
          <div>
          <p className="flex items-center gap-2 text-teal-700">
            <FaCalendarAlt className="text-xl" />
            <span className="font-semibold">Date of Birth:</span> 07/09/1995
          </p>
          <p className="flex items-center gap-2 text-teal-700">
            <FaPhoneAlt className="text-xl" />
            <span className="font-semibold">Phone Number:</span> +88 01717354751
          </p>
          </div>
          <div>
          <p className="flex items-center gap-2 text-teal-700 mb-2">
            <FaEnvelope className="text-xl" />
            <span className="font-semibold">Email:</span> shakil.hasan5934@gmail.com
          </p>
          <p className="flex items-center gap-2 text-teal-700">
            <FaMapMarkerAlt className="text-xl" />
            <span className="font-semibold">Address:</span> Mirpur-12, Pallabi, Dhaka, Bangladesh
          </p>
          </div>
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="relative mt-10 md:mt-0">
        <div className="relative w-48 h-48 md:w-60 md:h-60 mx-auto rounded-full border-8 border-yellow-500 overflow-hidden shadow-lg">
          <img
            src="/src/assets/WhatsApp Image 2025-01-09 at 11.48.21_bc3456b8.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Circular Icons */}
        <div className="absolute top-[-10px] left-[50%] transform -translate-x-1/2">
          <FaInstagram className="bg-white p-2 text-teal-700 text-2xl rounded-full shadow-md" />
        </div>
        <div className="absolute bottom-[-10px] left-[50%] transform -translate-x-1/2">
          <FaGithub className="bg-white p-2 text-teal-700 text-2xl rounded-full shadow-md" />
        </div>
        <div className="absolute left-[-10px] top-[50%] transform -translate-y-1/2">
          <FaXTwitter className="bg-white p-2 text-teal-700 text-2xl rounded-full shadow-md" />
        </div>
        <div className="absolute right-[-10px] top-[50%] transform -translate-y-1/2">
          <FaLinkedin className="bg-white p-2 text-teal-700 text-2xl rounded-full shadow-md" />
        </div>
      </div>
    </section>
        </div>
    );
};

export default About;