import type { Panel, ViewMode } from "../../types/manga";

interface PanelCardProps {
    panel: Panel;
    viewMode: ViewMode;
    index: number;
    onClick: (panel: Panel) => void;
}

export const PanelCard = ({ panel, viewMode, index, onClick }: PanelCardProps) => {
    return (
        <div
        key={panel.id}
        className={`group bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl shadow-xl
           overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105
            hover:shadow-2xl border border-gray-700/50 hover:border-blue-500/50 ${
                viewMode === "list" ? "flex items-center p-4 space-x-6" : ""
            }`}
            onClick={() => onClick(panel)}
            style={{
                animationDelay : `${index * 50} ms`,
            }}>
                <div
                className={`${
                    viewMode === "list" ? "w-24 h-32 flex-shrink-0" : "aspect-[3/4]"
                } overflow-hidden rounded-xl relative`}>
                    <img
                    src={panel.image}
                    alt={panel.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className={`${viewMode === "list" ? "flex-1 text-left" : "p-4"}`}>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full border border-blue-500/20">
                        {panel.manga}
                        </span>
                        {viewMode === "list" && (
                            <span className="text-xs text-gray-500">#{panel.id}</span>
                        )}
                    </div>
                    <h3 className="font-semibold text-gray-200 mb-1 group:hover:text-white transition-colors duration-300">
                        {panel.title}
                    </h3>
                    {viewMode === "list" && (
                        <div className="flex items-center gap-2 mt-3">
                            <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </div>
                            <span className="text-xs text-gray-500">Click to view</span>
                        </div>
                    )}
                </div>
            </div>
    );
};