
import { Logo } from "./Logo"

export const Hero = () => {
  return (
    <div className="relative flex justify-center items-center bg-[url('/src/assets/narutobg.jpg')] bg-cover bg-center h-screen w-full overflow-hidden">
        <Logo />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content container */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto px-8">
        {/* Logo section */}
        <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
          <Logo />
        </div>
        
        {/* Main content */}
        <div className="flex-1 space-y-6 text-right ml-8">
          <div className="space-y-4">
            <h1 className="font-black text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-2xl tracking-tight leading-none">
                Manga
              <span className="text-white">Vault</span>
            </h1>
            
            <div className="h-1 w-32 bg-gradient-to-r from-orange-400 to-red-500 ml-auto rounded-full"></div>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-100 font-medium max-w-2xl ml-auto leading-relaxed drop-shadow-lg">
              Not every panel makes history.{" "}
              <span className="text-orange-400 font-semibold">These did.</span>
            </h2>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex justify-end space-x-4 pt-8">
            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-orange-600 hover:to-red-700">
              Explore Collection
            </button>
            <button className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
};