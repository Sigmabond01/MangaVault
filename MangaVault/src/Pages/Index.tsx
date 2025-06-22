import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <section id="index" className="bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <Stats />
      </section>
    </div>
  );
};

export default Index;