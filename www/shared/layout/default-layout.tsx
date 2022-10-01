import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { LayoutProps } from "./types";

export function DefaultLayout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default DefaultLayout;
