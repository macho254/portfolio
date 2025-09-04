export default function Portfolio() {
  const projects = [
    {
      title: "Bitbridge Community",
      description: "All in one access point for community projects, podcast episode's and donation checkout to support the movements",
      image: "/images/work-1.png",
      link: "https://community-website-sooty.vercel.app/",
    },
    {
      title: "Goalstack",
      description: " track your savings in Bitcoin or stablecoins to have an edge against inflation",
      image: "/images/work-2.png",
      link: "https://goalstack.vercel.app/",
    },
    {
      title: "SaaS landing-page",
      description: "build and sell software design and solutions",
      image: "/images/work-3.png",
      link: "https://saas-company-landing-page-tau.vercel.app/index.html",
    },
  ];

  return (
    <section id="portfolio" className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-dark-400">Portfolio</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden group shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-pink-500/60 
                              flex flex-col justify-center items-center text-white text-center 
                              p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="bg-white text-pink-600 rounded-full w-14 h-14 flex items-center justify-center text-lg font-bold hover:scale-110 transition-transform"
                >
                  ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <a
          href="https://github.com/macho254"
          className="inline-block mt-12 px-10 py-3 border border-pink-500 bg-gray-400 text-white rounded-md hover:bg-pink-500 transition"
        >
          See More
        </a>
      </div>
    </section>
  );
}
