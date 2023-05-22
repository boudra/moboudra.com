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
  return (
    <div className="max-w-prose mx-auto px-4">
      <div className="pb-12">
        {posts.map(({ slug, frontmatter }) => (
          <div key={slug} className="pb-3">
            <Link href={`/post/${slug}`}>
              <a className="font-semibold text-xl block text-primary hover:text-secondary decoration-2">
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
