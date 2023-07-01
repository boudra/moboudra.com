export default function Projects(_props) {
  const projects = [
    {
      title: "Konbert",
      description:
        "Convert between common data formats automatically from your browser.",
      link: "https://konbert.com",
    },
    {
      title: "WritePal",
      description:
        "Chrome extension that adds AI-powered writing assistance to all text fields.",
      link: "https://writepal.app",
    },
    {
      title: "Kon",
      description:
        "Command line tool to convert between common data formats, written in Rust.",
      link: "https://github.com/boudra/kon",
    },
    {
      title: "Breathe",
      description: "Breathing exercises to calm anxiety and aid meditation.",
      link: "https://breathe.moboudra.com",
    },
    {
      title: "Chainsauce",
      description: "TypeScript library to index Ethereum blockhain data.",
      link: "https://github.com/chainsauce-org/chainsauce",
    },
    {
      title: "Jaxon",
      description: "Fast streaming JSON parser for Elixir.",
      link: "https://github.com/boudra/jaxon",
    },
  ];

  return (
    <div className="max-w-prose mx-auto px-4">
      <div className="pb-12">
        {projects.map((project) => (
          <div key={project.title} className="pb-4">
            <a
              target="_blank"
              rel="noreferrer"
              className="block text-primary hover:text-secondary font-semibold text-xl"
              href={project.link}
            >
              {project.title}
            </a>
            <div className="text-sm text-primary/40">{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
