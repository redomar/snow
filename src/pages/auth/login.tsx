import UserDetail from "@/components/user";
import { InferGetServerSidePropsType } from "next";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";

export default function Login({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (providers == null) {
    return <p>No providers available</p>;
  }

  const { status } = useSession();

  if (status === "authenticated") {
    return <UserDetail />;
  } else if (status === "unauthenticated") {
    return (
      <div className="block bg-black border border-black w-full h-screen text-white mt-0">
        <div className="flex flex-col gap-3 justify-center items-center w-4/12 mx-auto mt-12 h-120">
          Sign in with on of these providers
          {Object.values(providers).map(provider => (
            <div key={provider.name} className="bg-indigo-500 py-2 px-6">
              <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
