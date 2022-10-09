import { ReactElement } from "react";

import { LandingPageHero } from "@/www/pages/index/hero";
import { LandingSection } from "@/www/pages/index/section";
import { Button } from "@/www/shared/components/buttons/button";
import { DefaultLayout } from "@/www/shared/layout";
import { NextPageWithLayout } from "@/www/shared/layout/types";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <LandingPageHero>
        <div className="text-center md:text-left md:px-4">
          <div className="text-4xl sm:text-6xl md:text-7xl font-mono font-extrabold text-gray-200">
            Building technical websites with{" "}
            <span className="text-emerald-400 font-mono">creativity.</span>
          </div>
          <div className="text-gray-400 mt-4 text-md md:text-xl tracking-wider font-light max-w-2xl px-2 md:px-0">
            Experienced fullstack developer based from the Philippines.
            Interested on all things web and where engineering meets creativity.
          </div>
          <div className="mt-4">
            <Button type={"primary"} text="Contact Me" />
            <Button type="secondary" text="Github" />
          </div>
        </div>
      </LandingPageHero>
      <LandingSection bgScheme="light" />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
