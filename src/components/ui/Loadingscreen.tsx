import { Logo } from "../Logo";

export const LoadingScreen = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 flex items-center justify-center">
            <div className="text-center space-y-4">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
                    <Logo />
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-white">Loading MangaVault...</h2>
                    <p className="text-gray-400">Preparing your collection.....</p>
                </div>
            </div>
        </div>
    );
};