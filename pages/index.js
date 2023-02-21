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
      description: "Online conversion service between common data formats.",
      link: "https://konbert.com",
    },
    {
      title: "Tablepad (WIP)",
      description:
        "Desktop application to view and analyze structured data files.",
      link: "https://tablepad.io",
    },
  ];

  return (
    <div className="max-w-prose mx-auto p-4">
      <div className="text-center text-base mb-14 text-primary bg-primary-500 rounded-lg text-lg -mt-16">
        <p>
          Hey hey! This is Mo. I enjoy designing and building digital products.
        </p>
      </div>
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
              <a className="block text-primary hover:text-secondary decoration-2">
                <h2 className="font-semibold text-lg">{frontmatter.title}</h2>
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
