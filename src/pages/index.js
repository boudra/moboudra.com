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
      <div className="text-primary pb-6 mb-10 border-b border-primary/5 text-lg space-y-4">
        <p>
          Hi, I&apos;m Mo, a technical leader and product engineer with over 15
          years of experience across various industries. I am passionate about
          building and shipping great digital products.
        </p>

        <p>
          I&apos;m currently building{" "}
          <a
            href="https://table.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            table.studio
          </a>
          , an AI native spreadsheet.
        </p>
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
