export default function Projects(_props) {
  const projects = [
    {
      title: "Konbert",
      description:
        "Convert between common data formats automatically inside your browser.",
      link: "https://konbert.com",
    },
    {
      title: "Kon",
      description: "Command line tool to convert between common data formats.",
      link: "https://github.com/boudra/kon",
    },
    {
      title: "Chainsauce",
      description: "Typescript library to index blockhain data.",
      link: "https://github.com/chainsauce-org/chainsauce",
    },
    {
      title: "Jaxon",
      description: "Fast streaming JSON parser for Elixir.",
      link: "https://github.com/boudra/jaxon",
    },
    {
      title: "Tablepad (WIP)",
      description:
        "View and analyze structured data files securely from your own computer.",
      link: "https://tablepad.io",
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