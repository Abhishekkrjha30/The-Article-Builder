
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const SocialLinks = () => {
  return (
    <div className="flex items-center text-center pt-4 cursor-pointer">
      {/* Facebook */}
      <a href="https://www.facebook.com/hellocodingage" target="_blank" rel="noopener noreferrer">
        <div className="w-8 h-8 bg-white rounded-full text-gray-700 text-2xl hover:bg-blue-700 hover:text-white flex justify-center items-center">
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
      </a>
      
      {/* Twitter */}
      <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
        <div className="w-8 h-8 ml-4 bg-white rounded-full text-gray-700 text-2xl hover:bg-black hover:text-white flex justify-center items-center">
        <FontAwesomeIcon icon={faTimes}  />
        </div>
      </a>
      
      {/* Instagram */}
      <a href="https://www.instagram.com/codingage/" target="_blank" rel="noopener noreferrer">
        <div className="w-8 h-8 ml-4 bg-white rounded-full text-gray-700 text-2xl hover:bg-pink-900 hover:text-white flex justify-center items-center">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </a>
      
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/company/codingage/" target="_blank" rel="noopener noreferrer">
        <div className="w-8 h-8 ml-4 bg-white rounded-full text-gray-700 text-2xl hover:bg-blue-500 hover:text-white flex justify-center items-center">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
      </a>
    </div>
  );
};

export default SocialLinks;

