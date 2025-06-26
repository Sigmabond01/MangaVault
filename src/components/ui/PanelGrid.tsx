import { Filter } from "lucide-react";
import type { Panel, ViewMode } from "../../types/manga";
import { PanelCard } from "./PanelCard";

interface PanelGridProps {
    panels: Panel[];
    viewMode: ViewMode;
    onPanelClick: (panel: Panel) => void;
}

export const PanelGrid = ({panels, viewMode, onPanelClick}: PanelGridProps) => {
    if(panels.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                <div className="relative mb-6">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
                    <Filter className="w-20 h-20 relative" />
                </div>
                <p className="text-2xl font-medium text-gray-300 mb-2">No panels found</p>
                <p className="text-gray-500">Try adjusting your search or filter</p>
            </div>
        );
    }

  return (
    <div
      className={`${
        viewMode === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
          : "space-y-4 max-w-4xl mx-auto"
      }`}
    >
      {panels.map((panel, index) => (
        <PanelCard
          key={panel.id}
          panel={panel}
          viewMode={viewMode}
          index={index}
          onClick={onPanelClick}
        />
      ))}
    </div>
  );
};