import { type NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const LoginComponent: NextPage<{
  mainColour: string;
}> = ({ mainColour }) => {
  const { data: session, status } = useSession();
  const [isOpen, setOpen] = useState(false);

  console.log({ session, status });
  const { pathname } = useRouter();

  const ariaOptions = {
    "aria-expanded": isOpen,
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  if (status === "authenticated") {
    return (
      <div className="flex items-center gap-3 px-5 py-1 text-lg tracking-normal ">
        <button
          onClick={() => setOpen(!isOpen)}
          className={`flex aria-expanded:${ariaOptions["aria-expanded"]}`}
        >
          {session?.user?.image && (
            <>
              <div className="h-8 w-8">
                <Image
                  src={session?.user?.image}
                  width="64"
                  height="64"
                  className=""
                  alt="Your profile picture"
                />
              </div>
            </>
          )}
        </button>
        {isOpen && (
          <>
            <div className="absolute right-0 top-14 mt-2 w-48 rounded-md border py-[0.1rem] bg-black shadow-xl">
              <div className="absolute -top-2 right-7 border-x-8 border-b-8 border-t-0 border-solid border-x-transparent border-b-slate-900"></div>

            
                {/* className={`block rounded-t-md px-4 py-2 text-sm text-white hover:${mainColour} hover:text-white`} */}
                {/* className={`block w-full rounded-b-md px-4 py-2 text-left text-sm text-white hover:${mainColour} hover:text-white`} */}

              <button
                type="button"
                title="Sign out"
                onClick={() => signOut()}
                className={`block w-full rounded-md px-4 py-2 text-left text-sm text-white hover:${mainColour} hover:text-white`}
              >
                Sign out
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={() => {
        signIn();
      }}
      title="Login"
      className="flex items-center justify-center p-2 hover:bg-indigo-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
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
