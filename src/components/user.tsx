import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function UserDetail() {
  const { data: sessionData } = useSession();

  return (
    <div className="mt-0 block h-screen w-full border border-stone-800/40 bg-stone-900 text-white">
      <div className="h-120 mx-auto mt-12 flex w-4/12 flex-col items-center justify-center gap-3 rounded border border-stone-800 bg-black pt-3 shadow-xl">
        {sessionData && sessionData.user && (
          <>
            <span className="font-bold text-red-500">
              {sessionData.user.name}
            </span>

            <div
              className="h-16 w-16"
              style={{ borderRadius: "32px", overflow: "hidden" }}
            >
              {sessionData.user.image && (
                <Image
                  src={sessionData.user.image}
                  width="64"
                  height="64"
                  alt="User profile picture"
                />
              )}
            </div>
          </>
        )}
        <button
          className="mt-3 w-full bg-indigo-600 py-2 text-center"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
