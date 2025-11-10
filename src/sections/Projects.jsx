import Tilt from "react-parallax-tilt";

export default function Projects() {
  const projects = [
    {
      title: "The Gula Game",
      desc: "A 3D parkour game where the player steals colorful jellies while escaping obstacles and guards.",
      image: "/projects/gula/gulaintro.gif", 
      isVideo: false,
    },
    {
      title: "The Arya App",
      desc: "A map-based app that showcases famous local landmarks with detailed descriptions and historical background.",
      image: "/projects/aryaapp/aryaintro.gif",
      isVideo: false,
    },
    {
      title: "PESO",
      desc: "A graphic design project that promotes employment opportunities and helps job seekers connect with potential employers.",
      image: "/projects/peso/pesointro.gif",
      isVideo: false,
    },
    {
      title: "TESDA World Skills Contribution",
      desc: "Handled graphic design, video editing, banner creation, and digital mapping for the TESDA World Skills event.",
      image: "/projects/tesdaworldskills/tesdavid.gif",
      isVideo: false,
    },
    {
      title: "Work Projects 3D Models",
      desc: "Created 3D models of stages, robots, equipment, and machines for project showcases and visual presentations.",
      image: "/projects/workproject3d/workvid.gif",
      isVideo: false,
    },
    {
      title: "Work Project Sketch Up",
      desc: "Designed 3D floor layouts in SketchUp, placing equipment and machines with detailed 3D modeling for realistic visualization",
      image: "/projects/workprojectsketchup/sketchup3d.gif",
      isVideo: false,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-10"
    >
      <h2 className="text-4xl font-bold text-purple-500 mb-8">Projects</h2>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {projects.map((p, i) => (
          <Tilt
            key={i}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.05}
            transitionSpeed={2500}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="p-4 flex flex-col items-center text-center">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 sm:h-52 md:h-48 lg:h-52 object-cover rounded-lg mb-4"
              />

              <h3 className="text-2xl font-semibold text-purple-500 mb-2">
                {p.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{p.desc}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
