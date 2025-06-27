
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
            className={`group bg-gray-900 rounded-2xl shadow-xl
               overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105
                hover:shadow-2xl border border-gray-700/50 hover:border-gray-600 ${
                    viewMode === "list" ? "flex items-center p-4 space-x-6" : ""
                }`}
            onClick={() => onClick(panel)}
            style={{
                animationDelay: `${index * 50}ms`,
            }}>
                <div
                className={`${
                    viewMode === "list" ? "w-24 h-32 flex-shrink-0" : "aspect-[3/4]"
                } overflow-hidden rounded-xl relative`}>
                    <img
                    src={panel.image}
                    alt={panel.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className={`${viewMode === "list" ? "flex-1 text-left" : "p-4"}`}>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-gray-300 bg-gray-800 px-2 py-1 rounded-full border border-gray-600">
                        {panel.manga}
                        </span>
                        {viewMode === "list" && (
                            <span className="text-xs text-gray-400">#{panel.id}</span>
                        )}
                    </div>
                    <h3 className="font-semibold text-gray-200 mb-1 group-hover:text-gray-100 transition-colors duration-300">
                        {panel.title}
                    </h3>
                </div>
            </div>
    );
};