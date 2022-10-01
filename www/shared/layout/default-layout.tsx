import { Footer } from "./footer";
import { Navbar } from "./navbar";

export function DefaultLayout() {
  return (
    <>
      <Navbar />
      <div>Default Layout</div>
      <Footer />
    </>
  );
}

export default DefaultLayout;
