import Link from "next/link";
import LoginComponent from "../login";

// Export a component for the navigation bar
export default function Navigation() {
  return (
    <nav className="flex justify-between w-full h-full px-3 text-white bg-black border-b-2 shadow-md border-zinc-900">
      <div className="flex items-baseline grid-cols-4 gap-1 ">
        <LogoArea />
      </div>
      <div className="self-center navbar-item ">
        <Link href="/blog">
          <div className="w-24 navbar-item hover:bg-teal-500 hover:text-black">Blog</div>
        </Link>
        <Link href="/about">
          <div className="w-24 navbar-item hover:bg-rose-500 hover:text-black">About</div>
        </Link>
        {/* <Link href="/contact">
          <div className="w-24 navbar-item hover:bg-amber-500 hover:text-black">Contact</div>
        </Link>  <LoginComponent /> */}
      </div>
    </nav>
  );
}

export function LogoArea() {
  return (
    <Link href="/">
      <div className="block px-5 py-3 text-white cursor-pointer translate-y-[1px]">
        <h2 className="relative inline-flex text-xl font-bold uppercase select-none -tracking-widest border-y-[2px]">
          S<div className="inline-flex transform -scale-y-100 translate-y-[.78px]">n</div>ow
        </h2>
      </div>
    </Link>
  );
}

export function SessionArea() {
  return (
    <Link href="/login">
      <button className="">Login</button>
    </Link>
  );
}
