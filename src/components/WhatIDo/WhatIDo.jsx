import { FaLaptopCode, FaPaintBrush, FaTools } from "react-icons/fa";

const WhatIDo = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900">
          WHAT <span className="text-teal-700">I DO</span>
        </h2>
        <div className="w-20 border-b-4 border-teal-700 mx-auto mt-2"></div>

        {/* Cards Container */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Design */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center transition hover:shadow-xl">
            <div className="w-24 h-24 mx-auto flex items-center justify-center rounded-full bg-teal-600 text-white text-4xl">
              <FaPaintBrush />
            </div>
            <h3 className="text-xl font-semibold text-teal-700 mt-4">DESIGN</h3>
            <p className="text-gray-600 mt-2">
            Design goes beyond aesthetics; it's about creating a meaningful experience. I focus on crafting intuitive and engaging interfaces that make navigation effortless. Each detail is thoughtfully designed to enhance usability and interaction. My aim is to turn complex challenges into simple, enjoyable solutions that connect with users.
            </p>
          </div>

          {/* Card 2 - Development */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center transition hover:shadow-xl">
            <div className="w-24 h-24 mx-auto flex items-center justify-center rounded-full bg-teal-600 text-white text-4xl">
              <FaLaptopCode />
            </div>
            <h3 className="text-xl font-semibold text-teal-700 mt-4">DEVELOPMENT</h3>
            <p className="text-gray-600 mt-2">
            I develop high-performance, scalable, and maintainable web applications using the latest technologies to optimize user experience. By focusing on clean code and efficient workflows, I ensure long-term stability and ease of future enhancements. My approach combines innovation with practicality to deliver robust solutions that grow with user needs.
            </p>
          </div>

          {/* Card 3 - Improvement */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center transition hover:shadow-xl">
            <div className="w-24 h-24 mx-auto flex items-center justify-center rounded-full bg-teal-600 text-white text-4xl">
              <FaTools />
            </div>
            <h3 className="text-xl font-semibold text-teal-700 mt-4">LEARNING</h3>
            <p className="text-gray-600 mt-2">
            I am constantly expanding my knowledge and skills to stay ahead in the fast-evolving tech landscape. Currently, I’m learning new frameworks, tools, and best practices to improve my development process. I embrace challenges as opportunities for growth and focus on enhancing both my technical and creative abilities. Continuous learning is key to my passion for building impactful and cutting-edge web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
