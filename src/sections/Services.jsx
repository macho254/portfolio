import { FaCode } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { FaHive } from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#ff004f]">
          My Services
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-800 p-8 rounded-xl text-center transition-all duration-300 hover:bg-[#ff004f] hover:-translate-y-2 shadow-lg">
            <FaCode className="text-5xl mx-auto mb-6 " />
            <h2 className="text-2xl font-semibold mb-4">Software Development</h2>
            <p className="text-gray-300 text-sm">
              Developing software, system design, API integration and system developments. 
            </p>
            {/* <a
              href="#"
              className="inline-block mt-4 text-sm font-medium text-white underline hover:text-gray-200"
            >
              Learn more
            </a> */}
          </div>

          {/* Service 2 */}
          <div className="bg-gray-800 p-8 rounded-xl text-center transition-all duration-300 hover:bg-[#ff004f] hover:-translate-y-2 shadow-lg">
            <FaAppStoreIos className="text-5xl mx-auto mb-6 " />
            <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
            <p className="text-gray-300 text-sm">
              Building websites, web applications, frontend designs, graphics design and SEO. 
            </p>
            {/* <a
              href="#"
              className="inline-block mt-4 text-sm font-medium text-white underline hover:text-gray-200"
            >
              Learn more
            </a> */}
          </div>

          {/* Service 3 */}
          <div className="bg-gray-800 p-8 rounded-xl text-center transition-all duration-300 hover:bg-[#ff004f] hover:-translate-y-2 shadow-lg">
            <FaHive className="text-5xl mx-auto mb-6 " />
            <h2 className="text-2xl font-semibold mb-4">Tech And Finance</h2>
            <p className="text-gray-300 text-sm">
              Research and community building on investment, crypto, stocks, pre-selected IPO, narrative's 
              on AI, Blockchain and Tech businesses.
            </p>
            {/* <a
              href="#"
              className="inline-block mt-4 text-sm font-medium text-white underline hover:text-gray-200"
            >
              Learn more
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
