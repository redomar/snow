import { User } from "@prisma/client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function UserDetail() {
  const { data: session } = useSession();

  return (
    <div className="block w-full h-screen mt-0 text-white border bg-stone-900 border-stone-800/40">
      <div className="flex flex-col items-center justify-center w-4/12 gap-3 pt-3 mx-auto mt-12 bg-black border rounded shadow-xl h-120 border-stone-800">
        <span className="font-bold text-red-500">{session?.user?.name}</span>
        {session?.user?.image && (
          <>
            <div className="w-16 h-16" style={{ borderRadius: "32px", overflow: "hidden" }}>
              <Image
                src={session?.user?.image}
                width="64"
                height="64"
                alt="User profile picture"
              />
            </div>
          </>
        )}
        <button className="w-full py-2 mt-3 text-center bg-indigo-600" onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  );
}
