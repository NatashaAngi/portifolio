import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import Work from "./components/work";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Contact/>
    </>
  );
}
