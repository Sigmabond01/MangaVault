import { mangaData } from "../../data/MangaData";
import type { MangaName } from "../../types/manga";

interface MangaFilterTabsProps {
  selectedManga: MangaName | null;
  onMangaSelect: (manga: MangaName | null) => void;
  allPanelsCount: number;
}

export const MangaFilterTabs = ({ 
  selectedManga, 
  onMangaSelect, 
  allPanelsCount 
}: MangaFilterTabsProps) => {
  return (
    <div className="mt-4 flex flex-wrap gap-2 justify-center">
      <button
        onClick={() => onMangaSelect(null)}
        className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group ${
          !selectedManga
            ? "bg-gradient-to-r from-[#0f172a]  to-[#334155] text-white shadow-lg"
            : "bg-gray-800/80 backdrop-blur-sm text-gray-300 hover:bg-gray-700/80 border border-gray-700/50"
        }`}
      >
        <span className="relative z-10">All Manga</span>
        <span className="ml-3 text-xs bg-white/20 text-current px-2 py-1 rounded-full relative z-10">
          {allPanelsCount}
        </span>
        {!selectedManga && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]  to-[#334155] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        )}
      </button>

      {Object.keys(mangaData).map((mangaName) => (
        <button
          key={mangaName}
          onClick={() => onMangaSelect(mangaName === selectedManga ? null : mangaName as MangaName)}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group ${
            selectedManga === mangaName
              ? "bg-gradient-to-r from-[#0f172a]  to-[#334155] text-white shadow-lg"
              : "bg-gray-800/80 backdrop-blur-sm text-gray-300 hover:bg-gray-700/80 border border-gray-700/50"
          }`}
        >
          <span className="relative z-10">{mangaName}</span>
          <span className="ml-3 text-xs bg-white/20 text-current px-2 py-1 rounded-full relative z-10">
            {mangaData[mangaName as MangaName].length}
          </span>
          {selectedManga === mangaName && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]  to-[#334155] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          )}
        </button>
      ))}
    </div>
  );
};