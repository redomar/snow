import { NextPage } from "next";
import Head from "next/head";

const BlogHome: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Snow - Blogs</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center">
          <div className="py-6 text-2xl">
            <p>Blog Home</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHome;
