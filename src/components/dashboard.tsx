import Head from "next/head";

export const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Snow - Dashboard</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center">
          <div className="py-6 text-2xl">
            <p>Dashboard Home</p>
          </div>
        </div>
      </div>
    </>
  );
};
