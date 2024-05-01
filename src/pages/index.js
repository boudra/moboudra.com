import Link from "next/link";
import { formatDate } from "../date";
import { getPosts } from "../posts";

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts(),
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className="max-w-prose mx-auto px-4">
      <div className="text-primary pb-6 mb-10 text-md border-b border-primary/5 font-mono">
        Hi, I'm Mo, a technical lead and generalist passionate about the digital
        product lifecycle - from identifying user needs, to delivering robust
        software with great UX. I've been building things for quite some time,
        some of which you can find on this site. I also write about things that
        interest me.
      </div>
      <div className="pb-12">
        <div className="pb-6">
          {posts.map(({ slug, frontmatter }) => (
            <div
              key={slug}
              className="pb-2 flex flex-col-reverse items-start md:flex-row md:items-center gap-x-4"
            >
              <div className="text-sm text-primary/40 font-mono">
                {formatDate(new Date(frontmatter.date))}
              </div>
              <Link href={`/post/${slug}`}>
                <a className="text-xl block text-primary hover:text-secondary decoration-2">
                  <h2>{frontmatter.title}</h2>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
