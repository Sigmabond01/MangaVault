import { Logo } from "./Logo";

export const Hero = () => {
  return (
    <div className="relative flex justify-center items-center bg-[url('/src/assets/narutobg.jpg')] bg-cover bg-center h-screen w-full overflow-hidden">
      <Logo />

      {/* Right half black overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-black z-10" />

      {/* Optional: subtle full-page dimming */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content container */}
      <div className="relative z-20 flex items-center justify-between w-full max-w-7xl mx-auto">
        
        {/* Main content - right side */}
        <div className="flex-1 space-y-6 text-right ml-8">
          <div className="space-y-4">
            <h1 className="font-black text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-2xl tracking-tight leading-none">
              Manga
              <span className="text-white">Vault</span>
            </h1>

            <div className="h-1 w-32 text-white ml-auto rounded-full" />

            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-100 font-medium max-w-2xl ml-auto leading-relaxed drop-shadow-lg">
              Not every panel makes history.{" "}
              <span className="text-white font-semibold">These did.</span>
            </h2>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-end space-x-4 pt-8">
            <button className="px-8 py-3 border-2 text-white backdrop-blur-sm border-white/100 hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Explore Collection
            </button>
            <button className="px-8 py-3 border-2 border-white/100 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
