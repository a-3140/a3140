import { classNames } from "@/www/shared/helpers";

export interface NumGridProps {
  numGrid: void[];
  matrixLoaded: boolean;
}

function randInt() {
  return (Math.random() * 1000).toFixed();
}

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function NumGrid({ numGrid, matrixLoaded }: NumGridProps) {
  return (
    <>
      {numGrid.map((_, idx) => (
        <div
          key={idx}
          className="transition-opacity duration-200 px-2 ease-in-out"
          style={{ opacity: `${getRandomIntInclusive(10, 40) / 100}` }}
        >
          <p
            className={classNames(
              "z-[99] bg-neutral-900 font-monotext-xl p-2 text-xl",
              "transition-transform delay-700 duration-500"
            )}
            style={{
              color: "rgb(52 211 153)",
              transform: `translateY(${
                matrixLoaded ? getRandomIntInclusive(20, 80) : 0
              }vh)`,
            }}
          >
            {randInt()} {randInt()}
          </p>
        </div>
      ))}
    </>
  );
}
