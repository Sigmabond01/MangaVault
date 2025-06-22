import { Logo } from "./Logo";
import { useNavigate } from "react-router-dom";
import { Vortex } from "./ui/vortex";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex justify-center items-center bg-[url('/src/assets/narutobg.jpg')] bg-cover bg-center h-screen w-full overflow-hidden">
      <Logo />

      {/* Right half with Vortex effect */}
      <div className="absolute top-0 right-0 h-full z-10">
        <Vortex backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full" />
      </div>

      {/* Optional: subtle full-page dimming */}
      <div className="absolute inset-0 bg-black/10 z-0" />

      {/* CTA container */}
      <div className="relative z-20 flex items-center justify-between w-full max-w-7xl mx-auto px-6">
        <div className="flex-1 space-y-6 text-right ml-8">
          <div className="space-y-4">
            <h1 className="font-black text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-2xl tracking-tight leading-none">
              Manga<span className="text-gray-400">Vault</span>
            </h1>

            <div className="h-1 w-32 bg-white ml-auto rounded-full" />

            <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-medium max-w-7xl ml-auto leading-relaxed drop-shadow-lg">
              Not every panel makes history.{" "}
              <span className="text-gray-400 font-bold">These did.</span>
            </h2>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-end space-x-4 pt-8">
            <button
              onClick={() => navigate("/Panels")}
              className="px-8 py-3 border-2 text-white backdrop-blur-sm border-white/100 hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Collection
            </button>
            <a href="#index">
              <button className="px-8 py-3 border-2 border-white/100 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
