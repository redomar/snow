import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Snow</title>
        <meta name="description" content="Snow website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center">
          <div className="py-6 text-2xl">
            {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
