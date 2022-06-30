import Link from "next/link";

// Export a component for the navigation bar
export default function Navigation() {
  return (
    <nav className="flex ">
      <div className="flex items-baseline border-b-2 border-stone-800 bg-black text-white shadow-md justify-between h-full w-full p-2 pb-3">
        <div className="grid grid-rows-1 grid-cols-4 ml-5  ">
          <LogoArea />
          <div className="navbar-item hover:bg-teal-500 hover:text-black">Blog</div>
          <div className="navbar-item hover:bg-rose-500  hover:text-black">About</div>
          <div className="navbar-item hover:bg-amber-500   hover:text-black">Contact</div>
        </div>
        <div>{/* <SessionArea /> */}</div>
      </div>
    </nav>
  );
}

export function LogoArea() {
  return (
    <Link href="/">
      <div className="block text-white bg-black py-3 px-5 cursor-pointer">
        <h2 className="inline-flex text-xl relative  font-bold -tracking-widest uppercase select-none border-y-[2px]">
          S<div className="inline-flex transform -scale-y-100 translate-y-[.78px] ">n</div>ow
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
