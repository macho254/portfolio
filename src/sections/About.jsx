import { useState } from "react";
export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left image */}
          <div>
            <img
              src="/images/user.JPG"
              alt="profile"
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Right content */}
          <div>
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-gray-700 mb-6">
              Tech and finance enthusiast, software developer, Bitcoin and crypto advocate,
              passionate about psychology and spirituality,
              all this fueling my creativity to leave an impact and inspire others to do the same through coding and sharing my insight with others.

            </p>

            {/* Tab titles */}
            <div className="flex space-x-6 border-b mb-6 transition">
              {["skills", "experience", "education"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 text-lg font-medium ${
                    activeTab === tab
                      ? " border-b-2 border-pink-600"
                      : "text-gray-500"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab contents */}
            {activeTab === "skills" && (
              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold text-pink-600">Software Development</span>
                  <br /> Designing & Building Softwares
                </li>
                <li>
                  <span className="font-semibold text-pink-600">Web Development</span>
                  <br /> Web app Development
                </li>
                <li>
                  <span className="font-semibold text-pink-600">Tech And Finance</span>
                  <br /> Research and community building
                </li>
              </ul>
            )}

            {activeTab === "experience" && (
              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold text-pink-600">2025 - Current</span>
                  <br /> Freelancer developer, Tech and Finance content creator, member of the Blockchain
                  community.
                </li>
                <li>
                  <span className="font-semibold text-pink-600">2022 - 2024</span>
                  <br /> Group host and Brand intern at Mesh, tech company
                </li>
                <li>
                  <span className="font-semibold text-pink-600">2020 - 2024</span>
                  <br /> Computer Science student and community lead BitBridge
                </li>
              </ul>
            )}

            {activeTab === "education" && (
              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold text-pink-600">2024</span>
                  <br /> BSc Computer Science
                </li>
                <li>
                  <span className="font-semibold text-pink-600">2019</span>
                  <br /> Certificate of secondary education
                </li>
                <li>
                  <span className="font-semibold text-pink-600">2014</span>
                  <br /> Certificate of primary education
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
