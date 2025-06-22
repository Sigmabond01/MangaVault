import { Logo } from "./Logo";
import { useNavigate } from "react-router-dom";
import { Vortex } from "./ui/vortex";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex justify-center items-center bg-[url('/src/assets/narutobg.jpg')] bg-cover bg-center h-screen w-full overflow-hidden">
      <Logo />

      <div className="hidden md:block absolute top-0 right-0 w-0 h-full z-10">
        <Vortex backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full" />
      </div>

      {/* Mobile vortex - Full width on mobile */}
      <div className="md:hidden absolute inset-0 z-10">
        <Vortex backgroundColor="black"
        rangeY={600}
        particleCount={200}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 py-4 w-full h-full" />
      </div>

      <div className="absolute inset-0 bg-black/10 z-0" />

      {/* CTA container */}
      <div className="relative z-20 flex items-center justify-between w-full max-w-[90rem] mx-auto px-4 sm:px-6">
        <div className="flex-1 space-y-4 sm:space-y-6 text-center md:text-right md:ml-8">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white drop-shadow-2xl tracking-tight leading-none">
              Manga<span className="text-gray-400">Vault</span>
            </h1>

             <div className="hidden md:block h-1 w-32 bg-white ml-auto rounded-full" />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-white drop-shadow-lg max-w-lg md:max-w-2xl ml-auto px-4 md:px-0 text-center md:text-right">
            Not every panel makes history.{" "}
              <span className="text-gray-400 font-bold">These did.</span>
            </h2>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-end space-y-3 sm:space-y-0 sm:space-x-4 pt-6 sm:pt-8">
            <button
              onClick={() => navigate("/Panels")}
              className="px-6 sm:px-8 py-3 border-2 text-white backdrop-blur-sm border-white/100 hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
            >
              Explore Collection
            </button>
            <a href="#index">
              <button className="px-6 sm:px-8 py-3 border-2 border-white/100 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-sm sm:text-base">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};