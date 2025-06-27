"use client";

import { CardContainer, CardBody, CardItem } from './ui/3d-card'

const stats = [
  {
    number: "50+",
    label: "Panels Saved to Vaults",
    image: "/assets/ftbg.webp",
  },
  {
    number: "25+",
    label: "Handpicked Iconic Scenes",
    image: "/assets/aotbg.webp",
  },
  {
    number: "20+",
    label: "Returning Users Last Week",
    image: "/assets/gojo.webp",
  },
  {
    number: "24/7",
    label: "Access to Rare Panels",
    image: "/assets/yuta.webp",
  },
];

export const Stats = () => {
  return (
    <section className="py-24 bg-gradient-to-tr from-slate-400 via-black to-slate-400 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 font-comicneue">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
            The Vault of Manga's Most
            <span className="bg-gradient-to-r from-gray-400 to-slate-500 bg-clip-text text-transparent block">
              Iconic Moments
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Preserving the most legendary moments in manga history for future generations
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <CardContainer key={index} containerClassName="w-full">
              <CardBody>
                <CardItem
                  translateZ={60}
                  className="p-6 text-center space-y-4 relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 hover:border-blue-500/50 rounded-2xl shadow-2xl w-full max-w-sm mx-auto group transition-all duration-500 hover:shadow-slate-500/20"
                >
                  {/* Floating image */}
                  <CardItem translateZ={150} className="relative">
                    <img
                      src={stat.image}
                      alt={stat.label}
                      className="rounded-xl shadow-2xl w-full h-40 object-cover transition-all duration-700 group-hover:scale-105 hover:shadow-blue-500/30"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "translateZ(0)",
                        imageRendering: "crisp-edges"
                      }}
                    />
                  </CardItem>

                  {/* Stat number */}
                  <CardItem translateZ={120} className="relative">
                    <div className="text-white text-4xl font-black group-hover:text-blue-400 transition-colors duration-300">
                      {stat.number}
                    </div>
                  </CardItem>

                  {/* Stat label */}
                  <CardItem translateZ={100} className="relative">
                    <div className="text-gray-300 text-sm font-semibold uppercase tracking-wider leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </CardItem>

                  {/* Decorative line */}
                  <CardItem translateZ={80} className="relative">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-gray-400 to-blue-500 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-sm font-medium">
            Every panel tells a story • Every moment becomes <b>HISTORY</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;