import {Grid,List} from "lucide-react";
import { ViewMode } from "../../types/manga";

interface ViewToggleProps {
    viewMode : ViewMode;
    onViewModeChange: (mode: ViewMode) => void;
}

export const ViewToggle = ({viewMode, onViewModeChange}: ViewToggleProps) => {
    return (
        <div className="flex bg-gray-800/80 backdrop-blur-sm rounded-xl p-1 border border-gray-700/50">
            <button onClick={() => onViewModeChange("grid")}
                className={`p-3 rounded-lg transition-all duration-300 relative overflow-hidden ${
                    viewMode === "grid"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-700/50"
                }`}>
                    <Grid className="w-5 h-5 relative z-10" />
                </button>
                <button onClick={() => onViewModeChange("list")}
                className={`p-3 rounded-lg transition-all duration-300 relative overflow-hidden ${
                    viewMode === "list"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-700/50"
                }`}>
                    <List className="w-5 h-5 relative z-10" />
                </button>
        </div>
    );

};