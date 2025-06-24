import { mangaData } from "../data/MangaData";

export type MangaName = keyof typeof mangaData;
export type Panel = (typeof mangaData)[MangaName][number];
export type ViewMode = "grid" | "list";