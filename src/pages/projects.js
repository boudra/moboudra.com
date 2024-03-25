const currentProjects = [
  {
    title: "Konbert",
    description: "Easily convert between data formats from your browser.",
    link: "https://konbert.com/convert",
  },
  {
    title: "Tablepad",
    description: "View and analyze common data formats in your browser.",
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
        on a distraction-free and minimal writing app.
      </span>
    ),
    link: "https://blank.page",
  },
  {
    title: "Breathe",
    description:
      "Simple breathing exercise to calm anxiety and aid meditation.",
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

function ProjectsList({ projects }) {
  return (
    <>
      {projects.map((project) => (
        <div key={project.title} className="pb-4">
          <a
            target="_blank"
            rel="noreferrer"
            className="block text-primary hover:text-secondary font-semibold text-xl pb-1"
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
        <ProjectsList projects={currentProjects} />
        <p className="text-primary/80 pt-8 mt-4 border-t border-primary/5">
          Find more software projects on my{" "}
          <a className="underline" href="https://github.com/boudra">
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}
