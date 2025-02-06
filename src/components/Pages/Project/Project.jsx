import { LayoutGrid, Search } from "lucide-react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  const [selectedTech, setSelectedTech] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      title: "Food Ordering Website",
      description:
        "The platform provides a user-friendly interface for browsing food items....",
      image: "https://i.ibb.co.com/0jf8CCQD/Screenshot-2025-02-06-234413.png",
      liveLink: "https://reataurant-6e59a.web.app/",
      codeLink: "https://github.com/Shakil000/Restaurant_client",
      tech: ["MERN", "React JS", "Tailwind CSS"],
    },
    {
      title: "Online Sports Shop",
      description:
        "An online sports shop offers a wide range of sports equipment....",
      image: "https://i.ibb.co.com/jPvnGf9t/Screenshot-2025-02-07-000711.png",
      liveLink: "https://sportsshop-cdb14.web.app/",
      codeLink: "https://github.com/Shakil000/Sports_client",
      tech: ["MERN", "React JS", "Tailwind CSS"],
    },
    {
      title: "Employee Management System",
      description:
        "The Employee Management System is a web-based application that streamlines employee data management....",
      image: "https://i.ibb.co.com/nNMnt5cy/Screenshot-2025-02-07-001651.png",
      liveLink: "https://employee-management-b34b6.web.app/login",
      codeLink: "https://github.com/Shakil000/Employee_client",
      tech: ["MERN", "React JS", "Tailwind CSS"],
    },
    {
      title: "Gadget-Haven",
      description:
        "GadgetHaven is an e-commerce platform that offers a wide range of electronic gadgets ....",
      image: "https://i.ibb.co.com/KzN37s0n/Screenshot-2025-02-07-002242.png",
      liveLink: "https://assignment_008.surge.sh/",
      codeLink: "https://github.com/Shakil000/Gadget-Haven?tab=readme-ov-file",
      tech: ["Tailwind CSS", "Javascript"],
    },
    {
      title: "Career Counseling",
      description:
        "Career Counseling is a service that helps individuals explore career options....",
      image: "https://i.ibb.co.com/KzsPnKcq/Screenshot-2025-02-07-002914.png",
      liveLink: "https://career-counseling-cae95.firebaseapp.com/home",
      codeLink: "https://github.com/Shakil000/career-counseling",
      tech: ["Javascript"],
    },
    {
      title: "The Dragon News",
      description:
        "Dragon News is a digital news platform delivering the latest updates on global events....",
      image: "https://i.ibb.co.com/qY98hfwk/Screenshot-2025-02-07-013452.png",
      liveLink: "https://adsgg-8db96.firebaseapp.com/category/01",
      codeLink: "https://github.com/Shakil000/Dragon-news",
      tech: ["MERN", "React JS", "Tailwind CSS"],
    },
    {
      title: "Portfolio",
      description:
        "A personal portfolio website built with React JS and Tailwind CSS is a modern, responsive platform.....",
      image: "https://i.ibb.co.com/Kx9JHY4w/Screenshot-2025-02-07-005712.png",
      liveLink: "#",
      codeLink: "https://github.com/Shakil000/Portfolio_Shakil_Hasan",
      tech: ["MERN", "React JS", "Tailwind CSS"],
    },
    {
      title: "Paddy--Pet-Adoption-Platform",
      description:
        "Peddy is a web app designed to help pet owners manage their pets' health, appointments....",
      image: "https://i.ibb.co.com/FLxGyc0F/Screenshot-2025-02-07-012312.png",
      liveLink: "https://assignment_006.surge.sh/",
      codeLink: "https://github.com/Shakil000/Paddy--Pet-Adoption-Platform",
      tech: ["Javascript", "HTML5 + CSS3"],
    },
    {
      title: "BPL-DREAM-11",
      description:
        "BPL-DREAM-11 is a fantasy sports platform that allows users to create and manage their own cricket ....",
      image: "https://i.ibb.co.com/s9yVyXwg/Screenshot-2025-02-07-012913.png",
      liveLink: "https://assignment_007.surge.sh/",
      codeLink: "https://github.com/Shakil000/BPL-DREAM-11",
      tech: ["Javascript", "HTML5 + CSS3"],
    },
    {
      title: "Leave Management System",
      description:
        "The Leave Management System is a web-based application that simplifies the process of requesting....",
      image: "https://i.ibb.co.com/d0vSJ2p2/Screenshot-2025-02-07-011613.png",
      liveLink: "#",
      codeLink: "https://github.com/Shakil000/location_client",
      tech: ["MERN", "React JS", "Tailwind CSS"],
    },
    {
      title: "Employee Current Location and TADA",
      description:
        "The Employee Current Location and TADA (Travel Allowance and Daily Allowance) system....",
      image: "https://i.ibb.co.com/N2LmRkPb/Screenshot-2025-02-07-003736.png",
      liveLink: "#",
      codeLink: "https://github.com/Shakil000/location_client",
      tech: ["MERN", "React JS", "Tailwind CSS"],
    },
    {
      title: "Bistro Boss",
      description:
        "Bistro Boss is a contemporary restaurant offering a diverse menu of delicious dishes in a stylish.....",
      image: "https://i.ibb.co.com/Ng2TGcs5/Screenshot-2025-02-07-014311.png",
      liveLink: "#",
      codeLink: "https://github.com/Shakil000/Bistro_Boss",
      tech: ["MERN", "React JS", "Tailwind CSS"],
    },
  ];

  const techCategories = [
    "All",
    "MERN",
    "React JS",
    "Javascript",
    "HTML5 + CSS3",
    "Tailwind CSS",
  ];

  // Filter projects based on search and selected technology
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTech =
      selectedTech === "All" || project.tech.includes(selectedTech);

    return matchesSearch && matchesTech;
  });

  return (
    <div className="bg-gray-100 py-12 px-6 lg:pt-20">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-gray-600">Some of my recent work</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          My <span className="text-teal-600">Projects</span>
        </h2>
        <div className="w-32 md:w-40 border-b-4 border-teal-600 mx-auto mt-2"></div>
      </div>

      {/* Search & Filter Section */}
      <div className="flex flex-col md:items-center md:justify-between space-y-4 md:space-y-0 mb-6">
        {/* Search Bar */}
        <div className="w-full md:w-96 flex items-center bg-white rounded-full shadow-md overflow-hidden border border-teal-500 mb-5">
          <input
            type="text"
            name="search"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 outline-none text-gray-700"
          />
          <button className="bg-teal-600 p-2.5 hover:bg-teal-700 transition-all">
            <Search className="w-5 h-5 invert" />
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:justify-start">
          {techCategories.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 text-sm border border-teal-500 rounded-md transition-all 
          ${
            selectedTech === tech
              ? "bg-teal-600 text-white"
              : "text-teal-600 hover:bg-teal-600 hover:text-white"
          }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden p-4"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4 text-teal-700">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
            <div className="flex justify-between">
              <a
                href={project.codeLink}
                className="bg-gray-800 text-white px-3 py-1 rounded-lg flex items-center gap-2"
              >
                <FaGithub /> Code
              </a>
              <a
                href={project.liveLink}
                className="bg-teal-600 text-white px-3 py-1 rounded-lg"
              >
                🔗 Live Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
