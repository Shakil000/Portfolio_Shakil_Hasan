import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaGithub, FaLinkedin, FaYoutube, FaLink } from "react-icons/fa";
import { FaUser, FaCommentDots, FaPaperPlane, FaHeadset } from "react-icons/fa";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


// const containerStyle = {
//     width: "100%",
//     height: "300px",
//   };
  
//   const center = {
//     lat: 22.5726, // Replace with your latitude
//     lng: 88.3639, // Replace with your longitude
//   };
const Contact = () => {
    return (
        <div className='lg: pt-16'>
            <div className="bg-gray-100 flex flex-col items-center py-10">
      {/* Title */}
      <h2 className="text-3xl font-bold text-black mb-4 flex items-center">
        <span className="text-orange-600 text-4xl mr-2">📇</span> Contact <span className="text-teal-700 ml-2">Me</span>
      </h2>

      {/* Line Separator */}
      <div className="w-24 border-t-4 border-teal-700 mb-4"></div>

      {/* Contact Cards */}
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        {/* Phone */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-center space-x-4 w-72">
          <FaPhone className="text-blue-500 text-4xl" />
          <div>
            <h4 className="font-bold text-teal-800">Phone</h4>
            <p className="text-gray-600">+88 01717354751</p>
          </div>
        </div>

        {/* Email */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-center space-x-4 w-72">
          <FaEnvelope className="text-yellow-500 text-4xl" />
          <div>
            <h4 className="font-bold text-teal-800">Email</h4>
            <p className="text-gray-600">shakil.hasan5934@gmail.com</p>
          </div>
        </div>

        {/* Address */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-center space-x-4 w-72">
          <FaMapMarkerAlt className="text-red-500 text-4xl" />
          <div>
            <h4 className="font-bold text-teal-800">Address</h4>
            <p className="text-gray-600">Mirpur-12, Pallabi, Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <h3 className="text-xl font-bold text-black flex items-center mb-3">
        <FaLink className="mr-2 text-gray-700" /> Social Media <span className="text-teal-700 ml-1">Links</span>
      </h3>
      <div className="w-36 border-t-4 border-teal-700 mb-4"></div>

      {/* Social Buttons */}
      <div className="flex flex-wrap gap-3">
        <a href="https://www.facebook.com/Shakil.nhasan2" className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition">
          <FaFacebook className="mr-2" /> Facebook
        </a>
        <a href="https://github.com/Shakil000" className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-md shadow-md hover:bg-gray-800 transition">
          <FaGithub className="mr-2" /> Github
        </a>
        <a href="https://www.linkedin.com/in/mithun5934/" className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition">
          <FaLinkedin className="mr-2" /> LinkedIn
        </a>
        <a href="https://www.youtube.com/@Racershakil" className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition">
          <FaYoutube className="mr-2" /> Youtube
        </a>
        <a href="https://www.instagram.com/" className="flex items-center px-4 py-2 bg-pink-500 text-white rounded-md shadow-md hover:bg-pink-600 transition">
          <FaInstagram className="mr-2" /> Instagram
        </a>
      </div>
    </div>
    {/* <section> */}
        {/* Google Maps Section */}
        {/* <div className="md:w-1/2 w-full flex justify-center mt-6 md:mt-0">
            <LoadScript googleMapsApiKey={`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`}>
              <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div> */}
    {/* </section> */}
    <section>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-700 flex items-center justify-center gap-2">
            <FaHeadset className="text-teal-600" />
            Get in <span className="text-teal-700">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-teal-600 mx-auto mt-2"></div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center w-full">
          {/* Form Section */}
          <div className="bg-teal-200 p-6 rounded-lg md:w-1/2 w-full">
            <h2 className="text-center text-lg text-teal-700 font-semibold mb-4">
              I am here for you. How can I help?
            </h2>

            <form className="space-y-4">
              <div className="flex items-center bg-white p-3 rounded-lg shadow-md">
                <FaUser className="text-teal-500 mr-3" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full outline-none bg-transparent"
                />
              </div>

              <div className="flex items-center bg-white p-3 rounded-lg shadow-md">
                <FaPhone className="text-teal-500 mr-3" />
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="w-full outline-none bg-transparent"
                />
              </div>

              <div className="flex items-center bg-white p-3 rounded-lg shadow-md">
                <FaEnvelope className="text-teal-500 mr-3" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full outline-none bg-transparent"
                />
              </div>

              <div className="flex items-start bg-white p-3 rounded-lg shadow-md">
                <FaCommentDots className="text-teal-500 mr-3 mt-1" />
                <textarea
                  placeholder="Your Message"
                  className="w-full outline-none bg-transparent resize-none h-24"
                ></textarea>
              </div>

              <button className="bg-teal-600 hover:bg-teal-700 text-white py-3 w-full rounded-lg flex items-center justify-center transition">
                <FaPaperPlane className="mr-2" /> Send Message
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 w-full flex justify-center mt-6 md:mt-0">
            <img
              src="/src/assets/contact.png"
              alt="Contact Illustration"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
    </section>
        </div>
    );
};

export default Contact;