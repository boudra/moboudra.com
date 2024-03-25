import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { formatDate } from "../date";

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

  posts.sort((a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className="max-w-prose mx-auto px-4">
      <div className="text-primary pb-6 mb-10 text-lg border-b border-primary/5">
        <p className="pb-4">Welcome to my site!</p>
        <p className="pb-4">
          I’m a technical leader and generalist passionate about the digital
          product lifecycle, from identifying user needs, to delivering great UX
          and robust software.
        </p>
        <p className="pb-4">
          I use this space to share the things I make and write about the things
          I learn.
        </p>
      </div>
      <div className="pb-12">
        {posts.map(({ slug, frontmatter }) => (
          <div key={slug} className="pb-3">
            <Link href={`/post/${slug}`}>
              <a className="font-semibold text-xl block text-primary hover:text-secondary decoration-2">
                <h2>{frontmatter.title}</h2>
              </a>
            </Link>
            <div className="text-xs text-primary/40">
              {formatDate(new Date(frontmatter.date))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
