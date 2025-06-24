import { Search } from "lucide-react";
import { forwardRef } from "react";

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    onFocus: () => void;
    onBlur: () => void;
    isSearchFocused: boolean;
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps> (
    ({searchTerm, onSearchChange, onFocus, onBlur, isSearchFocused}, ref) => {
        return (
            <div className="relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 transition-colors group-focus-within:text-blue-400" />
                <input
                ref={ref}
                type="text"
                placeholder="Search panels..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={onFocus}
                onBlur={onBlur}
                className="pl-10 pr-4 py-3 border border-gray-700/50 bg-gray-900/10 backdrop-blur-sm text-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 w-80 placeholder:text-gray-500"
                />
                {!isSearchFocused && !searchTerm && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <kbd className="px-2 py-1 text-xs text-gray-500 bg-gray-800 border border-gray-700 rounded">
                            /
                        </kbd>
                    </div>
                )}
            </div>
        );
    }
);