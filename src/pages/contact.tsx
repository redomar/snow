import { type NextPage } from "next";
import Head from "next/head";

const ContactHome: NextPage = () => {
  return (
    <>
      <Head>
        <title>Snow - Contact</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center">
          <div className="py-6 text-2xl">
            <p>Contact Home</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHome;
