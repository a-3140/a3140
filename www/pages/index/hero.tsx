import { ReactNode } from "react";

import { classNames } from "@/www/shared/helpers";
import useScrollDetect from "@/www/shared/hooks/useScrollDetect";

export interface LandingPageHeroProps {
  bgScheme?: "dark" | "light";
  children?: ReactNode;
}

export function LandingPageHero({ bgScheme, children }: LandingPageHeroProps) {
  const isScrolled = useScrollDetect();
  return (
    <div
      className="min-h-screen flex justify-center items-center bg-fixed py-10 bg-transparent bg-no-repeat md:bg-right bg-center"
      style={{
        backgroundImage: `${
          bgScheme === "dark" || bgScheme === undefined
            ? "url('/images/undraw_hacker_mind.svg')"
            : "url('/images/undraw_hacker_mind_colored.svg')"
        }`,
      }}
    >
      <div
        className={classNames(
          "fixed bottom-0 left-0 overflow-hidden leading-[0] transition-all duration-700 ease-in-out",
          isScrolled && "opacity-0 -translate-x-2/4 duration-[1500ms]"
        )}
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative w-[200vw] h-10 md:h-[150px]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-gray-100"
          ></path>
        </svg>
      </div>
      <div className="md:max-w-5xl text-left pb-10 container">{children}</div>
    </div>
  );
}
