import Marquee from "react-fast-marquee";
import { FaTools } from "react-icons/fa";

const tools = [
    { name: "HTML5", img: "/src/assets/html-five-svgrepo-com.svg" },
    { name: "CSS3", img: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    { name: "JavaScript", img: "/src/assets/js-svgrepo-com.svg" },
    { name: "React", img: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Tailwind CSS", img: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
    { name: "Redux", img: "https://redux.js.org/img/redux.svg" },
    { name: "Next JS", img: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
    { name: "Typescript", img: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
    { name: "Axios", img: "https://axios-http.com/assets/logo.svg" },
    { name: "Vite", img: "https://cdn.worldvectorlogo.com/logos/vitejs.svg" },
    { name: "Material UI", img: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" },
    { name: "Node JS", img: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "Express JS", img: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
    { name: "MongoDB", img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "Git", img: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    { name: "GitHub", img: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
    { name: "Netlify", img: "https://cdn.worldvectorlogo.com/logos/netlify.svg" },
    { name: "Vercel", img: "https://cdn.worldvectorlogo.com/logos/vercel.svg" },
    { name: "DaisyUI", img: "https://daisyui.com/favicon.ico" },
    { name: "JSON Web Token", img: "https://jwt.io/img/pic_logo.svg" },
    { name: "Postman", img: "/src/assets/postman-icon-svgrepo-com.svg" },
    { name: "VS Code", img: "/src/assets/vs-code-svgrepo-com.svg" },
  ];
  
const ToolsTechnologies = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-screen mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-teal-700 flex items-center justify-center gap-2">
          <FaTools /> Tools & Technologies
        </h2>
        <div className="w-60 border-b-4 border-teal-700 mx-auto mt-2"></div>
        <div className="w-30 border-b-4 border-teal-700 mx-auto mt-2"></div>
        <div className="w-10 border-b-4 border-teal-700 mx-auto mt-2 mb-10"></div>

        {/* Tools List */}
        <Marquee pauseOnHover={true}>
        <div className="flex flex-wrap justify-center gap-4 ">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white shadow-md rounded-full transition hover:shadow-lg"
            >
              <img src={tool.img} alt={tool.name} className="w-6 h-6" />
              <span className="text-gray-800 font-medium">{tool.name}</span>
            </div>
          ))}
        </div>
        </Marquee>
      </div>
    </section>
  );
};

export default ToolsTechnologies;
