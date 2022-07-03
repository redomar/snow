import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";

const LoginComponent: NextPage = () => {
  const { data: session, status } = useSession();

  console.log({ session, status });

  if (status === "authenticated") {
    return (
      <div className="flex items-center gap-3 px-5 py-1 text-sm tracking-normal">
        <div>Signed in as <span className="text-red-500">{session?.user?.name}</span></div>
        {session?.user?.image && (
          <>
            <div style={{ borderRadius: "16px", overflow: "hidden" }}>
              <Image src={session?.user?.image} width="32px" height="32px" objectFit="cover" />
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <a href="/api/auth/signin" className="px-5 py-1 text-sm tracking-normal hover:bg-indigo-600">
      Log in
    </a>
  );
};

export default LoginComponent;
