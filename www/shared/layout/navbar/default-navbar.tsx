import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import useScrollDetect from "@/www/shared/hooks/useScrollDetect";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

import { classNames } from "../../helpers";

const navItems = [
  { title: "home.", link: "/" },
  { title: "about.", link: "/" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollDetect();

  return (
    <nav
      className={classNames(
        scrolled ? "bg-neutral-900 shadow-lg py-1 shadow-neutral-800" : "py-3",
        "transition-all duration-700",
        "border-gray-200 px-2 sm:px-4 rounded h-nav fixed w-full z-50"
      )}
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto md:max-w-6xl">
        <Link href="/" passHref>
          <a href="passHref" className="flex items-center z-50">
            <Image alt="a3140 logo" src="/logo.png" width={50} height={50} />
            <span
              className={classNames(
                "transition-colors delay-200 duration-700",
                "self-center font-thin text-xl font-mono whitespace-nowrap text-gray-200 -ml-2"
              )}
            >
              3140
            </span>
          </a>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className={classNames(
            "transition-colors delay-200 duration-500 text-gray-200",
            "inline-flex items-center p-2 ml-3 text-sm rounded-lg transition-all ease-in-out z-50"
          )}
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <XMarkIcon
            className={classNames(
              "hover:text-emerald-400",
              "h-6 w-6",
              "md:h-10 md:w-10",
              "flex relative transition-all ease-in-out duration-500 rounded",
              mobileOpen ? "opacity-100 z-20" : "opacity-0 z-10"
            )}
          />
          <Bars3BottomRightIcon
            className={classNames(
              "hover:text-emerald-400",
              "h-6 w-6",
              "md:h-10 md:w-10",
              "absolute transition-all ease-in-out duration-500 rounded",
              mobileOpen ? "opacity-0 z-10" : "opacity-100 z-20"
            )}
          />
        </button>

        <div className="w-full text-gray-200">
          <ul
            onClick={() => setMobileOpen(!mobileOpen)}
            className={classNames(
              "md:text-2xl",
              "shadow-lg shadow-neutral-800",
              " transition-transform delay-200 duration-500",
              "fixed flex flex-col top-0 right-0",
              "font-mono font-bold text-xl tracking-wide",
              mobileOpen ? "translate-x-0" : "translate-x-[100vw]",
              "bg-neutral-900 space-y-5 w-72 h-screen justify-start py-44 items-center"
            )}
          >
            {navItems.map((item) => (
              <li key={item.title}>
                <Link href={item.link} passHref>
                  <a
                    href="passHref"
                    className="transition-colors duration-300 ease-in-out hover:text-emerald-400"
                  >
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
