import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { classNames } from "@/www/shared/helpers";

import { NumGrid } from "./numGrid";

export interface LoadingScreenProps {
  hasLoaded: boolean;
  setHasLoaded: Dispatch<SetStateAction<boolean>>;
}

async function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

export function LoadingScreen({ hasLoaded, setHasLoaded }: LoadingScreenProps) {
  const [display, setDisplay] = useState(false);
  const [runMatrix, setRunMatrix] = useState(true);
  const [finishLoad, setFinishLoad] = useState(false);

  const numSet = new Array(600).fill({}).map(() => {});
  const [numGrid, setNumGrid] = useState(numSet);

  useEffect(() => {
    // ssr sync with client
    setDisplay(true);

    if (!hasLoaded) {
      let matrixInterval: NodeJS.Timer;

      if (runMatrix) {
        matrixInterval = setInterval(() => {
          setNumGrid(numSet);
        }, 200);
      }

      (async (matrixInterval) => {
        await wait(1250);
        clearInterval(matrixInterval);
        setRunMatrix(false);

        await wait(1250);
        setFinishLoad(true);

        await wait(750);
        setHasLoaded(true);
      })();

      // interval is called from the window and should be cleared everytime
      return () => clearInterval(matrixInterval);
    }
  }, [numSet, runMatrix, hasLoaded, setHasLoaded]);

  return (
    <div
      className={classNames(
        "overflow-hidden w-full h-screen z-50 fixed top-0 left-0 bg-fixed bg-no-repeat md:bg-right bg-center",
        "transition-colors ease-in-out duration-700 delay-150",
        !runMatrix ? "bg-neutral-900" : "bg-black"
      )}
      style={{
        backgroundImage: "url('/images/undraw_hacker_mind.svg')",
      }}
    >
      <div
        className={classNames(
          "flex flex-col flex-wrap transition-all duration-500",
          finishLoad && `opacity-0 -translate-y-full`
        )}
        style={{ height: `calc(100vh + 1em)` }}
      >
        {display && <NumGrid numGrid={numGrid} matrixLoaded={!runMatrix} />}
      </div>
    </div>
  );
}

export default LoadingScreen;
