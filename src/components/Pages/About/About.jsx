import {
  FaCalendarAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
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

  const skills = {
    Frontend: [
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "React JS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/src/assets/tailwind-css-svgrepo-com.svg",
      },
      {
        name: "Axios",
        icon: "/src/assets/Axios--Streamline-Simple-Icons.svg",
      },
      {
        name: "Daisy UI",
        icon: "https://daisyui.com/favicon.ico",
      },
      {
        name: "Vite",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vite/vite-original.svg",
      },
      {
        name: "Material UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      },
    ],
    Backend: [
      {
        name: "Node JS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express JS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "JSON Web Token",
        icon: "https://jwt.io/img/pic_logo.svg",
      },
    ],
    Others: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Netlify",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
      },
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
      {
        name: "Postman",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
    ],
  };

  return (
    <div className="lg: pt-16 bg-gray-100">
      <section className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between p-10">
        {/* Left Side */}
        <div className="md:w-2/3 text-center md:text-left">
          {/* Name & Title */}
          <h1
            className="text-5xl font-bold text-teal-700 font-lobster"
            style={{
              fontFamily: "Dancing Script, cursive",
              fontSize: 50,
              margin: 0,
            }}
          >
            Shakil Hasan Mithun
          </h1>

          <h2 className="flex items-center justify-center md:justify-start gap-2 text-teal-600 mt-4 text-3xl font-bold">
            <FaUser className="text-3xl" />
            {text}
            <Cursor cursorStyle="|" />
          </h2>

          {/* Short Bio */}
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Hi, I'm a Web Developer passionate about building dynamic and
            user-friendly applications. I spend most of my time exploring and
            working with technologies like HTML, CSS, JavaScript, Bootstrap,
            React.js, Tailwind CSS, Node.js, Express.js, and MongoDB. <br /> I
            enjoy solving complex problems, optimizing performance, and creating
            seamless user experiences. Constantly learning and improving, I
            strive to stay updated with the latest trends and best practices in
            web development.
          </p>

          {/* Information Section */}
          <div className="mt-6 flex flex-col md:flex-row gap-6 text-lg">
            {/* Left Column */}
            <div className="space-y-5">
              <p className="flex items-center gap-3 text-teal-700">
                <FaCalendarAlt className="text-xl" />
                <span className="font-semibold">Date of Birth:</span> 07/09/1995
              </p>
              <p className="flex items-center gap-3 text-teal-700">
                <FaPhoneAlt className="text-xl" />
                <span className="font-semibold">Phone Number:</span> +88
                01717354751
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-5">
              <p className="flex items-center gap-3 text-teal-700">
                <FaEnvelope className="text-xl" />
                <span className="font-semibold">Email:</span>{" "}
                shakil.hasan5934@gmail.com
              </p>
              <p className="flex items-center gap-3 text-teal-700">
                <FaMapMarkerAlt className="text-xl" />
                <span className="font-semibold">Address:</span> Mirpur-12,
                Pallabi, Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="relative mt-10 md:mt-0">
          {/* Outer Circle */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 mx-auto rounded-full border-2 border-dotted border-teal-500 overflow-hidden shadow-lg p-5 flex items-center justify-center">
            {/* Inner Circle */}
            <div className="relative w-52 h-52 md:w-60 md:h-60 mx-auto rounded-full border-4 border-dotted border-gray-300 overflow-hidden shadow-lg p-5 flex items-center justify-center">
              {/* Profile Image */}
              <img
                src="/src/assets/WhatsApp Image 2025-01-09 at 11.48.21_bc3456b8.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Circular Icons */}
          {/* Top Center (Instagram) */}
          <div className="absolute top-[-19px] left-[50%] transform -translate-x-1/2">
            <a
              href="https://www.facebook.com/Shakil.nhasan2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="bg-white p-2 text-teal-700 text-3xl rounded-full shadow-md cursor-pointer" />
            </a>
          </div>

          {/* Bottom Center (GitHub) */}
          <div className="absolute bottom-[-15px] left-[50%] transform -translate-x-1/2">
            <a
              href="https://github.com/Shakil000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="bg-white p-2 text-teal-700 text-3xl rounded-full shadow-md" />
            </a>
          </div>

          {/* Left Center (Twitter/X) */}
          <div className="absolute left-[-15px] top-[50%] transform -translate-y-1/2">
            <a
              href="https://x.com/RacerShakil111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="bg-white p-2 text-teal-700 text-3xl rounded-full shadow-md" />
            </a>
          </div>

          {/* Right Center (LinkedIn) */}
          <div className="absolute right-[-15px] top-[50%] transform -translate-y-1/2">
            <a
              href="https://www.linkedin.com/in/mithun5934/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="bg-white p-2 text-teal-700 text-3xl rounded-full shadow-md" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F3FF] py-10 max-w-screen-xl mx-auto">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">
            My <span className="text-teal-600">Skills</span>
            <div className="w-30 border-b-4 border-teal-700 mx-auto mt-2"></div>
        <div className="w-20 border-b-4 border-teal-700 mx-auto mt-2"></div>
        <div className="w-10 border-b-4 border-teal-700 mx-auto mt-2 mb-10"></div>
          </h2>

          {/* Skills Container */}
          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-white border border-teal-300 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-teal-600 flex items-center gap-2">
                  {category === "Frontend" && "🚀"}
                  {category === "Backend" && "🛠"}
                  {category === "Others" && "🔧"} {category}
                </h3>
                <div className="flex flex-wrap gap-4 mt-4">
                  {items.map(({ name, icon }) => (
                    <span
                      key={name}
                      className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm text-gray-700 flex items-center gap-2"
                    >
                      <img src={icon} alt={name} className="w-6 h-6" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
