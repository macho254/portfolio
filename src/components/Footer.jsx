import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Section */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Maore Antony. All Rights Reserved.</p>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://facebook.com/maore_antony"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff004f] hover:translate-y-1 transition-colors"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://x.com/Maore_Antony?"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff004f] hover:translate-y-1 transition-colors"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/maore-antony%E2%9A%A1-600130240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff004f] hover:translate-y-1 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/macho254"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff004f] hover:translate-y-1 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://instagram.com/maore_antony"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff004f] hover:translate-y-1 transition-colors"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

