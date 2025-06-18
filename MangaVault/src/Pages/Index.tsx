
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <section id="index" className="pt-24 bg-gradient-to-b from-gray-900 to-black">
      <Stats />
      </section>
    </div>
  );
};

export default Index;