export default function Projects() {
  const projects = [
    {
      title: "200 Amp Service Upgrade",
      image: "/images/panel-upgrade.jpg",
      description:
        "Upgraded an outdated electrical service to a modern 200-amp meter-main with a clean, code-compliant installation.",
    },
    {
      title: "Custom Kitchen Lighting",
      image: "/images/kitchen-lighting.jpg",
      description:
        "Recessed lighting, pendant fixtures, and under-cabinet lighting designed to create a bright, modern kitchen.",
    },
    {
      title: "Commercial Electrical",
      image: "/images/commercial-conduit.jpg",
      description:
        "Professional EMT conduit installation for commercial equipment, lighting, and power distribution.",
    },
  ];

  return (
    <section id="projects" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Real work completed by AMPD Electrical.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-black hover:border-orange-500 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-semibold transition">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}