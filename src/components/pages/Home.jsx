import NavBar from "../layout/navBar";
import Hero from "../sections/home/Hero";
import Intro from "../sections/home/Intro";
import Projects from "../sections/home/Projects";
import Roadmap from "../sections/home/Roadmap";

export default function Home() {
  return (
    <>
      <NavBar />

      <main>
        <Hero />
        <Intro />
        <Projects />
        <Roadmap />
      </main>
    </>
  );
}