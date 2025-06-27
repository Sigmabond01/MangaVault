import { useRef } from "react";
import { Navbar } from "../ui/Navbar";
import { SearchBar } from "../ui/SearchBar";
import { ViewToggle } from "../ui/ViewToggle";
import { MangaFilterTabs } from "../ui/MangaFilterTabs";
import type { MangaName, ViewMode } from "../../types/manga";

interface HeaderProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    isSearchFocused: boolean;
    onSearchFocus: () => void;
    onSearchBlur: () => void;
    viewMode: ViewMode;
    onViewModeChange: (mode: ViewMode) => void;
    selectedManga: MangaName | null;
    onMangaSelect: (manga: MangaName | null) => void;
    allPanelsCount: number;
}

export const Header = ({
  searchTerm,
  onSearchChange,
  isSearchFocused,
  onSearchFocus,
  onSearchBlur,
  viewMode,
  onViewModeChange,
  selectedManga,
  onMangaSelect,
  allPanelsCount,
}: HeaderProps) => {
    const searchRef = useRef<HTMLInputElement>(null);

    return (
        <nav className="bg-black sticky top-0 z-40">
            <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                    <Navbar />

                    {/*SEarch */}
                    <div className="flex items-center gap-4">
                        <SearchBar
                        ref={searchRef}
                        searchTerm={searchTerm}
                        onSearchChange={onSearchChange}
                        onFocus={onSearchFocus}
                        onBlur={onSearchBlur}
                        isSearchFocused={isSearchFocused}
                        />

                        <ViewToggle
                        viewMode={viewMode}
                        onViewModeChange={onViewModeChange}
                        />
                    </div>
                </div>

                <MangaFilterTabs
                selectedManga={selectedManga}
                onMangaSelect={onMangaSelect}
                allPanelsCount={allPanelsCount}
                />
            </div>
        </nav>
    )
}