import Hero from "./components/home/Hero";
import Projects from "./components/home/Projects";
import WorksCounter from "./components/home/WorksCounter";
import HowWeWork from "./components/home/HowWeWork";
import PartneredBrands from "./components/home/PartneredBrands";
export default function Home() {
  return (
    <div className="font-hostGrotesk">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <Hero />
        <HowWeWork />
        <PartneredBrands />
        <Projects />
        <WorksCounter />
      </main>
    </div>
  );
}