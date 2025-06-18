import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import PanelSlider from "../components/ui/PanelSlider"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <section id="index" className="bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <Stats />
      </section>
      <PanelSlider />
    </div>
  );
};

export default Index;