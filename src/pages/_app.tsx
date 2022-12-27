import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Navigation from "@/components/navigation/navigation";
import Head from "next/head";

const AppHead = () => {
  return (
    <Head>
      <title>Snow</title>
      <meta name="description" content="Snow website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <AppHead />
      <Navigation/>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
