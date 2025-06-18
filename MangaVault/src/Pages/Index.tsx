
import { Hero } from "../components/Hero";
import { FeaturedManga } from "../components/FeaturedManga";
import { Stats } from "../components/Stats";
import { Newsletter } from "../components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <FeaturedManga />
      <Newsletter />
    </div>
  );
};

export default Index;