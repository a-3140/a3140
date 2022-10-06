import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { LayoutProps } from "./types";

export function DefaultLayout({ children }: LayoutProps) {
  return (
    <div className=" bg-neutral-900">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
