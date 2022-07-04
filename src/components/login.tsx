import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const LoginComponent: NextPage = () => {
  const { data: session, status } = useSession();

  console.log({ session, status });

  if (status === "authenticated") {
    return (
      <div className="flex items-center gap-3 px-5 py-1 text-sm tracking-normal">
        <Link href="auth/login">
          <div>
            Signed in as <span className="text-red-500">{session?.user?.name}</span>
          </div>
        </Link>
        {session?.user?.image && (
          <>
            <div className="w-8 h-8" style={{ borderRadius: "16px", overflow: "hidden" }}>
              <Image src={session?.user?.image} width="64px" height="64px" objectFit="cover" />
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
