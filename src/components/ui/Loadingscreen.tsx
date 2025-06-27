import { useState, useEffect } from 'react';
import { Aperture } from 'lucide-react';

const AnimatedAperture = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-16 h-16 mx-auto">
      <div className="absolute inset-0 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Aperture 
          className={`w-8 h-8 text-blue-400 transition-transform duration-1500 ${
            isAnimating ? 'scale-110 rotate-180' : 'scale-100 rotate-0'
          }`}
        />
      </div>
    </div>
  );
};

export default function LoadingScreen() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 5 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 flex items-center justify-center">
      <div className="text-center space-y-6">
        <AnimatedAperture />
        
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-white tracking-wide">
            Loading MangaVault
          </h2>
          <p className="text-gray-400 text-lg">
            Preparing your collection{dots}
          </p>
        </div>
        
        {/* Progress indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full bg-blue-500 animate-pulse`}
              style={{
                animationDelay: `${i * 0.3}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}