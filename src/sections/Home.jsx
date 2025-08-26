export default function Home() {
  return (
    <section
      id="home"
      className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I’m <span className="text-[#ff004f]">Maore</span> Antony
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 font-light">
            Full-Stack Developer | Tech and Finance Enthustiast
          </h2>
          <p className="text-gray-400 max-w-md mx-auto md:mx-0">
            I build elegant, scalable, and high-performance web applications
            that solve real-world problems. Let’s create something amazing!
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#portfolio"
              className="bg-[#ff004f] px-6 py-3 rounded-md font-semibold hover:bg-pink-700 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border-2 border-[#ff004f] px-6 py-3 rounded-md font-semibold hover:bg-[#ff004f] hover:text-white transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-[#ff004f] shadow-lg shadow-[#ff004f]/50"
            />
            {/* Optional Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-[#ff004f] opacity-20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

