
export const FeaturedManga = () => {
    const featuredSeries = [
        {
            title: "Naruto",
            description: "the ninja who became hokage",
            panels: "50+",
        },
        {
            title: "Dragon ball",
            description: "The legendary saiyan saga",
            panels: "30+",
        },
        {
            title: "Attack on Titan",
            description: "Humanity's fight for survival",
            panels: "45+",
        },
        {
            title: "Jujutsu Kaisen",
            description: "Epic journey of itadori and friends",
            panels: "60+",
        }
    ];

    return (
        <section className="py-20 bg relative z-10">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Featured
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        explore our most popular manga series and their most iconic moments
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredSeries.map((series, index) => (
                        <div 
                            className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-3" 
                            key={index}
                        >
                            <div className="relative bg-slate-800/30 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden h-full">
                                {/* Glass morphism overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-slate-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Subtle glow effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-6">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                                            {series.title}
                                        </h3>
                                        <span className="text-xs text-gray-400 font-medium bg-slate-700/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-600/30">
                                            {series.panels}
                                        </span>
                                    </div>
                                    
                                    <p className="text-gray-300 mb-8 leading-relaxed text-sm flex-grow">
                                        {series.description}
                                    </p>

                                    <button className="w-full py-3 px-6 text-white font-medium bg-slate-700/30 backdrop-blur-sm border border-slate-600/50 rounded-xl hover:bg-slate-600/40 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300 text-sm tracking-wide">
                                        View Collection
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};