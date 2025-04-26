import { useEffect, useState, useRef } from "react";
import data from "../../data/projects.json";
const Projects = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const sectionsRef = useRef([]);
  
  const [projects, setProject] = useState([]);
useEffect(() => {
    setProject(data);
}, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / maxHeight) * 100;
      setScrollHeight(progress);

      sectionsRef.current.forEach((section) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
          section.classList.add("bg-purple-600", "scale-110");
        } else {
          section.classList.remove("bg-purple-600", "scale-110");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-100 py-8">
    <h2 className="text-4xl  mb-4 text-center" style={{ fontFamily: 'var(--title-font)', color: 'var(--dark-purple)' }}>Nos projets</h2>
    <div className="relative flex flex-col items-center min-h-screen">
      {/* Static Grey Line */}
      <div className="absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>

      {/* Dynamic Purple Progress Line */}
      <div
        className="absolute w-1 bg-purple-600 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out"
        style={{ height: `${scrollHeight}%` }}
      ></div>

      <div className="flex flex-col gap-32 w-full max-w-6xl px-4">
        {projects.map((project, index) => (
          <div key={index} className="relative flex items-center justify-between w-full">
            {/* Left Side */}
            {index % 2 === 0 ? (
              <>
                {/* Year */}
                <div className="w-5/12 text-right pr-6">
                  <h3 className="text-xl font-bold text-purple-800">{project.year}</h3>
                </div>

                {/* Circle */}
                <div className="relative flex flex-col items-center z-10">
                  <div
                    ref={(el) => (sectionsRef.current[index] = el)}
                    className="w-4 h-4 bg-purple-800 rounded-full transition-all duration-500"
                  ></div>
                </div>

                {/* Title + Description */}
                <div className="w-5/12 text-left pl-6 py-4">
                  <h4 className="text-lg font-bold text-purple-800">{project.title}</h4>
                  <p className="mt-2 text-sm" style={{color:'var(--text-color)', fontFamily:'var(--text-font)'}}>{project.description}</p>
                </div>
              </>
            ) : (
              <>
                {/* Title + Description */}
                <div className="w-5/12 text-right pr-6 mb-4">
                  <h4 className="text-lg font-bold text-purple-800">{project.title}</h4>
                  <p className="mt-2 text-sm" style={{color:'var(--text-color)', fontFamily:'var(--text-font)'}}>{project.description}</p>
                </div>

                {/* Circle */}
                <div className="relative flex flex-col items-center z-10">
                  <div
                    ref={(el) => (sectionsRef.current[index] = el)}
                    className="w-4 h-4 bg-purple-800 rounded-full transition-all duration-500"
                  ></div>
                </div>

                {/* Year */}
                <div className="w-5/12 text-left pl-6">
                  <h3 className="text-xl font-bold text-purple-800">{project.year}</h3>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Projects;
