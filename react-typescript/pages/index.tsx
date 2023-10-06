
import type { NextPage } from "next";
import Head from "next/head"; //7.4k (gzipped: 2.9)

const Home: NextPage = () => {
 return (
  <div>
    <Head>
      <title>Platzi</title>
      <meta name="description" content="Generate by Platzi" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
    </main>
    <footer></footer>
  </div>
 )
};

export default Home;
