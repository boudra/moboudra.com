import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mohamed Boudra</title>
      </Head>
      <div className="flex flex-col mx-auto">
        <header className="mb-10 py-8 max-w-prose w-full mx-auto flex justify-center">
          <Link href="/">
            <a className="font-display text-2xl text-primary">Mohamed Boudra</a>
          </Link>
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
