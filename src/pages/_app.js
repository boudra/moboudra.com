import "../../styles/globals.css";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Mohamed Boudra</title>
      </Head>
      <div className="flex flex-col mx-auto">
        <header className="mb-10 py-8 max-w-prose px-4 w-full text-center flex flex-col md:flex-row justiy-center items-center mx-auto">
          <div className="">
            <Link href="/">
              <a className="font-display text-xl text-primary">
                Mohamed Boudra
              </a>
            </Link>
          </div>

          <div className="flex gap-x-4 md:ml-auto pt-2 md:pt-0">
            <div
              className={`font-display text-lg underline decoration-2 ${
                router.pathname == "/" || router.pathname.startsWith("/post")
                  ? "decoration-secondary text-primary"
                  : "decoration-transparent text-primary/70 hover:text-primary "
              }`}
            >
              <Link href="/">Articles</Link>
            </div>
            <div
              className={`font-display text-lg underline decoration-2 ${
                router.pathname == "/projects"
                  ? "decoration-secondary text-primary"
                  : "decoration-transparent text-primary/70 hover:text-primary "
              }`}
            >
              <Link href="/projects">Projects</Link>
            </div>
          </div>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <footer className="mt-8 py-8 text-center text-xs text-primary/50">
          <p>&copy; 2022 Mohamed Boudra</p>
          <a
            className="hover:text-secondary pt-2 text-primary/40"
            href="https://github.com/boudra/moboudra.com"
          >
            Source code
          </a>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
