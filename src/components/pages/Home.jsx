import NavBar from "../layout/navBar";
import Hero from "../sections/home/Hero";
import Intro from "../sections/home/Intro";
import Projects from "../sections/home/Projects";

export default function Home() {
  return (
    <>
      <NavBar />

      <main>
        <Hero />
        <Intro />
        <Projects/>
      </main>
    </>
  );
}