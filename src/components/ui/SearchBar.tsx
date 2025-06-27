import { Search } from "lucide-react";
import { forwardRef } from "react";

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    onFocus: () => void;
    onBlur: () => void;
    isSearchFocused: boolean;
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
    ({ searchTerm, onSearchChange, onFocus, onBlur, isSearchFocused }, ref) => {
        return (
            <div className="relative group">
                <Search 
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors duration-200 group-focus-within:text-gray-300" 
                    strokeWidth={2}
                    style={{ transform: 'translateY(-50%) translateZ(0)' }}
                />
                <input
                    ref={ref}
                    type="text"
                    placeholder="Search manga panels..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className="w-full max-w-md pl-12 pr-16 py-3.5 bg-gray-900 border border-gray-700 text-gray-200 rounded-xl 
                             placeholder:text-gray-500 transition-all duration-200 
                             focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-600 
                             hover:border-gray-600"
                />
                {!isSearchFocused && !searchTerm && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <kbd className="px-2 py-1 text-xs font-mono text-gray-400 bg-gray-800 border border-gray-600 rounded shadow-sm">
                            /
                        </kbd>
                    </div>
                )}
            </div>
        );
    }
);

SearchBar.displayName = "SearchBar";