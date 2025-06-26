import { useMemo } from "react";
import { mangaData } from "../data/MangaData";
import type { MangaName, Panel } from "../types/manga";

export const useMangaFilters = (
  selectedManga: MangaName | null,
  searchTerm: string
) => {
  const getAllPanels = (): Panel[] => {
    return Object.values(mangaData).flat();
  };

  const filteredPanels = useMemo((): Panel[] => {
    let panels = selectedManga ? mangaData[selectedManga] : getAllPanels();

    if (searchTerm.trim() !== "") {
      panels = panels.filter((panel) =>
        panel.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        panel.manga.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return panels;
  }, [selectedManga, searchTerm]);

  const allPanelsCount = getAllPanels().length;

  return {
    filteredPanels,
    allPanelsCount,
  };
};