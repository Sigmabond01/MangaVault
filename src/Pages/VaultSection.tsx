import { useState, useEffect, useRef } from "react";
import type { MangaName, Panel, ViewMode } from "../types/manga";
import  LoadingScreen  from "../components/ui/Loadingscreen";
import { Header } from "../components/Layout/Header";
import { PanelGrid } from "../components/ui/PanelGrid";
import { PanelModal } from "../components/ui/PanelModal";
import { UseKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
import { useMangaFilters } from "../hooks/useMangaFilters";

const VaultSection = () => {
  const [selectedManga, setSelectedManga] = useState<MangaName | null>(null);
  const [selectedPanel, setSelectedPanel] = useState<Panel | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const searchRef = useRef<HTMLInputElement>(null as unknown as HTMLInputElement);

  // Initial loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Custom hooks
  const { filteredPanels, allPanelsCount } = useMangaFilters(selectedManga, searchTerm);

  UseKeyboardShortcuts({
    selectedPanel,
    searchTerm,
    viewMode,
    isSearchFocused,
    searchRef,
    onCloseModal: () => setSelectedPanel(null),
    onClearSearch: () => setSearchTerm(""),
    onToggleViewMode: () => setViewMode(viewMode === "grid" ? "list" : "grid"),
  });

  // Event handlers
  const handleMangaSelect = (mangaName: MangaName | null) => {
    setSelectedManga(mangaName);
  };

  const handlePanelClick = (panel: Panel) => {
    setSelectedPanel(panel);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
  };

  const handleCloseModal = () => {
    setSelectedPanel(null);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900">
      <Header
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        isSearchFocused={isSearchFocused}
        onSearchFocus={handleSearchFocus}
        onSearchBlur={handleSearchBlur}
        viewMode={viewMode}
        onViewModeChange={handleViewModeChange}
        selectedManga={selectedManga}
        onMangaSelect={handleMangaSelect}
        allPanelsCount={allPanelsCount}
      />

      {/* Main Content */}
      <div className="p-6 text-center font-comicneue">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">
            {selectedManga ? selectedManga : "All Manga Panels"}
          </h2>
          <p className="text-gray-400 text-lg">
            {filteredPanels.length} panel{filteredPanels.length !== 1 ? "s" : ""} available
          </p>
          {searchTerm && (
            <p className="text-blue-400 text-sm mt-1">
              Filtered by: "{searchTerm}"
            </p>
          )}
        </div>

        <PanelGrid
          panels={filteredPanels}
          viewMode={viewMode}
          onPanelClick={handlePanelClick}
        />
      </div>

      {/* Modal */}
      {selectedPanel && (
        <PanelModal
          panel={selectedPanel}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default VaultSection;