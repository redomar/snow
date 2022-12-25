import Link from "next/link";
import LoginComponent from "../login";
import { useRouter } from "next/router";
import { Fragment } from "react";

// Export a component for the navigation bar
export default function Navigation() {
  const router = useRouter();

  const navbarItems = [
    {
      name: "Blog",
      href: "/blog",
      mainColour: "bg-teal-500",
      hoverColour: "hover:bg-teal-500",
    },
    {
      name: "About",
      href: "/about",
      mainColour: "bg-rose-500",
      hoverColour: "hover:bg-rose-500",
    },
    {
      name: "Contact",
      href: "/contact",
      mainColour: "bg-amber-500",
      hoverColour: "hover:bg-amber-500",
    },
  ];

  return (
    <nav className="flex justify-between w-full h-full px-3 text-white bg-black border-b-2 shadow-md border-zinc-900">
      <div className="flex items-baseline grid-cols-4 gap-1 ">
        <LogoArea />
      </div>
      <div className="self-center navbar-item ">
        {navbarItems.map((item, index) => (
          <Fragment key={`${index}-${item.name}`}>
            <Link href={item.href}>
              <div
                className={`w-24 navbar-item ${item.hoverColour} ${
                  router.pathname == item.href ? `${item.mainColour} text-white` : ""
                } hover:text-black`}>
                {item.name}
              </div>
            </Link>
          </Fragment>
        ))}
        <LoginComponent />
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
