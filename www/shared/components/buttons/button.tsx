import { classNames } from "../../helpers";

export type ButtonTypes = "primary" | "secondary";

export interface ButtonProps {
  type: ButtonTypes;
  text: string;
  /* not yet implemented */
  buttonActions?: unknown;
}
export function Button({ type, text }: ButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        type === "primary"
          ? "from-emerald-200 via-emerald-400 to-emerald-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-emerald-300 shadow-lg shadow-emerald-500/50"
          : "from-gray-500 text-white via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 shadow-lg shadow-gray-500/50",
        "text-gray-900 bg-gradient-to-r",
        "transition-colors duration-500 ease-in-out delay-500",
        "font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      )}
    >
      {text}
    </button>
  );
}
