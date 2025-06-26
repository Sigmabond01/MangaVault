
import { useEffect } from "react";
import type { RefObject } from "react";
import type { Panel, ViewMode } from "../types/manga";

interface UseKeyboardShortcutsProps {
    selectedPanel: Panel | null;
    searchTerm: string;
    viewMode: ViewMode;
    isSearchFocused: boolean;
    searchRef: RefObject<HTMLInputElement>;
    onCloseModal: () => void;
    onClearSearch: () => void;
    onToggleViewMode: () => void;
}

export const UseKeyboardShortcuts = ({
    selectedPanel,
    searchTerm,
    viewMode,
    isSearchFocused,
    searchRef,
    onCloseModal,
    onClearSearch,
    onToggleViewMode,
}: UseKeyboardShortcutsProps) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if(e.key === "/" && !selectedPanel) {
                e.preventDefault();
                searchRef.current?.focus();
            }
            if(e.key === "Escape") {
                if(selectedPanel) {
                    onCloseModal();
                } else if (searchTerm) {
                    onClearSearch();
                    searchRef.current?.blur();
                }
            }
            if(e.key === "g" && !selectedPanel && !isSearchFocused) {
                onToggleViewMode();
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [
        selectedPanel,
        searchTerm,
        viewMode,
        isSearchFocused,
        searchRef,
        onCloseModal,
        onClearSearch,
        onToggleViewMode,
    ])
}
