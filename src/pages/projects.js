const currentProjects = [
  {
    title: "Konbert",
    description:
      "Profitable cloud-based data converter supporting all commonly used data formats. The paid version allows for converting large files.",
    link: "https://konbert.com/convert",
  },
  {
    title: "Tablepad",
    description:
      "View and analyze common data formats directly in your browser. Currently a feature within Konbert, I'm planning to spin this off into its own product focused on AI data analysis.",
    link: "https://konbert.com/viewer",
  },
  {
    title: "Blank Page",
    description: (
      <span>
        Collaborating with{" "}
        <a
          className="underline"
          rel="noreferrer"
          href="https://renegalindo.com/"
          target="_blank"
        >
          René Galindo
        </a>{" "}
        on a highly popular, distraction-free and minimal writing app.
      </span>
    ),
    link: "https://blank.page",
  },
  {
    title: "Chainsauce",
    description: "TypeScript library to index Ethereum blockhain data.",
    link: "https://github.com/chainsauce-org/chainsauce",
  },
  {
    title: "Breathe",
    description:
      "Simple breathing exercise to calm anxiety and aid meditation.",
    link: "https://breathe.moboudra.com",
  },
  {
    title: "Jaxon",
    description: "Fast streaming JSON parser for Elixir.",
    link: "https://github.com/boudra/jaxon",
  },
];

function ProjectsList({ projects }) {
  return (
    <>
      {projects.map((project) => (
        <div key={project.title} className="pb-6">
          <a
            target="_blank"
            rel="noreferrer"
            className="block text-primary hover:text-secondary font-semibold text-xl pb-2"
            href={project.link}
          >
            {project.title}
          </a>
          <div className="text-primary/60">{project.description}</div>
        </div>
      ))}
    </>
  );
}

export default function Projects(_props) {
  return (
    <div className="max-w-prose mx-auto px-4">
      <div className="pb-12">
        <div className="pb-8 mb-8 border-b border-primary/5 text-lg space-y-2">
          <p>These are the projects that I am still actively maintaining.</p>
          <p>
            Find some more open-source projects on my{" "}
            <a className="underline" href="https://github.com/boudra">
              GitHub
            </a>
            , and find out more about my past roles on{" "}
            <a className="underline" href="https://www.linkedin.com/in/boudra/">
              LinkedIn
            </a>
            .
          </p>
        </div>
        <ProjectsList projects={currentProjects} />
      </div>
    </div>
  );
}
