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
    <div className="max-w-prose mx-auto">
      <p className="mb-10 text-primary p-6 bg-orange-700/5 rounded text-lg -mt-8">
        Hello! This is Mo, welcome to my personal site, this is where I post some of my ideas. You can find the source code of this page <a className="underline text-orange-700" href="https://github.com/boudra/moboudra.com">here</a>.
      </p>
      {posts.map(({ slug, frontmatter }) => (
        <div key={slug} className="py-3 block">
          <Link href={`/post/${slug}`}>
            <a className="block text-primary hover:underline hover:decoration-secondary decoration-2">
              <h2 className="font-display text-xl">{frontmatter.title}</h2>
            </a>
          </Link>
          <div className="text-xs text-orange-700/40">{frontmatter.date}</div>
        </div>
      ))}
    </div>
  );
}
