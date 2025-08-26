export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-[#ff004f]">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I’d love to hear from you! Whether you have a project idea, want
              to collaborate, or just say hello, feel free to reach out.
            </p>
            <div className="space-y-4">
              <p className="flex items-center space-x-3">
                <span className="text-[#ff004f] text-xl">📧</span>
                <span>Maoremunene@gmail.com</span>
              </p>
              <p className="flex items-center space-x-3">
                <span className="text-[#ff004f] text-xl">📞</span>
                <span>+254 702 065 519 </span>
              </p>
              <p className="flex items-center space-x-3">
                <span className="text-[#ff004f] text-xl">📍</span>
                <span>Nairobi, Kenya</span>
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form
            className="flex flex-col space-y-4 bg-gray-800 p-6 rounded-lg shadow-lg"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ff004f] transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ff004f] transition"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ff004f] transition"
            ></textarea>
            <button
              type="submit"
              className="bg-[#ff004f] hover:bg-pink-700 transition-colors duration-300 text-white font-semibold py-3 rounded-md shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
