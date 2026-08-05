import NavBar from "../layout/navBar";
import Footer from "../layout/Footer";
import Hero from "../sections/home/Hero";
import Intro from "../sections/home/Intro";
import FeaturedProduct from "../sections/home/FeaturedProduct";
import Products from "../sections/home/Products";
import Projects from "../sections/home/Projects";
import Roadmap from "../sections/home/Roadmap";
import CTA from "../sections/home/CTA";

export default function Home() {
  return (
    <>
      <NavBar />

      <main>
        <Hero />
        <Intro />
        <FeaturedProduct />
        <Products />
        <Projects />
        <Roadmap />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
