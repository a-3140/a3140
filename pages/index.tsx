import { ReactElement } from "react";
import { DefaultLayout } from "../www/shared/layout";
import { NextPageWithLayout } from "../www/shared/layout/types";

const Home: NextPageWithLayout = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-neutral-900">
      <div className="max-w-5xl text-left">
        <div className="text-7xl font-semibold font-poppins text-stone-200 body-font tracking-wide hidden">
          if you want something extra
        </div>
        <div className="text-center relative">
          <p className="text-7xl text-[200px] font-semibold font-poppins body-font tracking-wide relative leading-none">
            extra
          </p>
          <p className="absolute font-poppins font-extrabold -left-[200px] text-5xl top-20 text-stone-200 ">
            This is
          </p>
        </div>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
