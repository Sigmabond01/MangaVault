
export const FeaturedManga = () => {
    const featuredSeries = [
        {
            title: "Naruto",
            description: "the ninja who became hokage",
            panels: "50+",
            color: "from-gray-500 to-blue-400"
        },
        {
            title: "Dragon ball",
            description: "The legendary saiyan saga",
            panels: "30+",
            color: "from-gray-500 to-blue-400"
        },
        {
            title: "Attack on Titan",
            description: "Humanity's fight for survival",
            panels: "45+",
            color: "from-gray-500 to-blue-400"
        },
        {
            title: "Jujutsu Kaisen",
            description: "Epic journey of itadori and friends",
            panels: "60+",
            color: "from-gray-500 to-blue-400"
        }
    ];
    return (
        <section className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured <span className="bg-gradient-to-r from-blue-950 to-gray-800 bg-clip-text text-transparent">Collections</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        explore our most popular manga series and their most iconic moments
                    </p>
                </div>
                <div className="grid gid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredSeries.map((series, index) => (
                        <div className="group cursor-pointer" key={index}>
                            <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-6 border border-slate-500 hover:border-transparent transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${series.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-600 transition-colors">
                                            {series.title}
                                        </h3>
                                        <span className="text-sm text-gray-600 font-medium bg-gray-400/20 px-2 py-1 rounded-full">
                                            {series.panels}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        {series.description}
                                    </p>

                                    <button className="w-full py-2 text-white font-medium border border-slate-400 rounded-lg hover:bg-white/10 hover:border-blue-600 transition-all duration-300">
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