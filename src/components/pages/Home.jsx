import NavBar from "../layout/navBar";
import Hero from "../sections/home/Hero";
import Intro from "../sections/home/Intro";

export default function Home() {
  return (
    <>
      <NavBar />

      <main>
        <Hero />
        <Intro />
      </main>
    </>
  );
}