//! components
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Motivations from "./components/Motivations";
import Biography from "./components/Biography";

export default function Home() {
  return (
    <main className="my-10">
      <Biography />
      <Motivations />
      <Projects />
      <Certifications />
    </main>
  );
}
