import { NextPage } from "next";
import Head from "next/head";

const AboutHome: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Snow - About</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center">
          <div className="py-6 text-2xl">
            <p>About Home</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
