import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
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
      title: "Tablepad (WIP)",
      description:
        "View and analyze structured data files securely from your own computer.",
      link: "https://tablepad.io",
    },
  ];

  return (
    <div className="max-w-prose mx-auto px-4">
      <div className="pb-12">
        <div className="font-display text-2xl pb-6 underline decoration-2 decoration-secondary text-primary">
          Projects
        </div>
        <div>
          {projects.map((project) => (
            <div key={project.title} className="pb-4">
              <a
                target="_blank"
                rel="noreferrer"
                className="block text-primary hover:text-secondary font-semibold text-lg"
                href={project.link}
              >
                {project.title}
              </a>
              <div className="text-sm text-primary/40">
                {project.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pb-12">
        <div className="font-display text-2xl pb-6 underline decoration-2 decoration-secondary text-primary">
          Articles
        </div>
        {posts.map(({ slug, frontmatter }) => (
          <div key={slug} className="pb-3">
            <Link href={`/post/${slug}`}>
              <a className="font-semibold text-lg block text-primary hover:text-secondary decoration-2">
                <h2>{frontmatter.title}</h2>
              </a>
            </Link>
            <div className="text-xs text-primary/40 w-20">
              {frontmatter.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
