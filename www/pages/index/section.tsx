import { ReactNode } from "react";

export interface LandingSectionProps {
  bgScheme?: "dark" | "light";
  children?: ReactNode;
}

export function LandingSection({ bgScheme, children }: LandingSectionProps) {
  return (
    <div
      className="w-full min-h-screen flex justify-center bg-fixed py-10 bg-transparent bg-no-repeat md:bg-right bg-center relative"
      style={{
        backgroundImage: `${
          bgScheme === "dark" || bgScheme === undefined
            ? "url('/images/undraw_hacker_mind.svg')"
            : "url('/images/undraw_hacker_mind_colored.svg')"
        }`,
      }}
    >
      <div className="md:max-w-5xl pb-10 container">{children}</div>
    </div>
  );
}
