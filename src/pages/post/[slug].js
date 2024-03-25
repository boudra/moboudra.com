import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Head from "next/head";
import { formatDate } from "../../date";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: meta, content } = matter(fileName);
  return {
    props: {
      meta,
      content,
    },
  };
}

export default function PostPage({ meta, content }) {
  const date = new Date(meta.date);

  return (
    <div className="max-w-prose mx-auto px-4">
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js"
          defer
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js"
          defer
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-one-dark.min.css"
        />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <div className="mb-8 mt-4">
        <h1 className="font-display text-primary text-3xl mb-2 font-bold">
          {meta.title}
        </h1>
        <span className="text-sm font-mono text-primary/40">
          {formatDate(date)}
        </span>
      </div>
      <div
        className="prose mx-auto py-8 prose-headings:text-primary prose-headings:underline prose-headings:decoration-secondary/50 prose-headings:decoration-2 prose-headings:font-display prose-lg hover:prose-a:text-secondary prose-a:primary prose-headings:font-semibold prose-h1:text-2xl prose-h2:text-2xl prose-h1:mt-10"
        dangerouslySetInnerHTML={{ __html: md({ html: true }).render(content) }}
      />
    </div>
  );
}
