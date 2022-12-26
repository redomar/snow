import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const LoginComponent: NextPage = () => {
  const { data: session, status } = useSession();

  console.log({ session, status });

  if (status === "authenticated") {
    return (
      <div className="flex items-center gap-3 px-5 py-1 text-lg tracking-normal">
        <Link href="auth/login">
          <div>
            Signed in as <span className="text-red-500">{session?.user?.name}</span>
          </div>
        </Link>
        {session?.user?.image && (
          <>
            <div className="w-8 h-8" style={{ borderRadius: "16px", overflow: "hidden" }}>
              <Image
                src={session?.user?.image}
                width="64"
                height="64"
                className="rounded-full object-cover"
                alt="Your profile picture"
              />
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={() => {
        window.location.href = "/api/auth/signin";
      }}
      title="Login"
      className="flex items-center justify-center p-2 hover:bg-indigo-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
        />
      </svg>
    </button>
  );
};

export default LoginComponent;
