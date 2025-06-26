import { useState } from "react";
import { X } from "lucide-react";
import type { Panel } from "../../types/manga";

interface PanelModalProps {
    panel: Panel;
    onClose: () => void;
}

export const PanelModal = ({ panel, onClose }: PanelModalProps) => {
    const [imageZoomed, setImageZoomed] = useState(false);

    const toggleImageZoom = () => {
        setImageZoomed(!imageZoomed);
    };

    return (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-3xl
             w-full max-w-7xl h-full max-h-[95vh] overflow-hidden shadow-2xl animate-scale-in border border-gray-700/50 flex flex-col">
                <div className="flex items-center justify-between p-6 border-b border-gray-700/50 bg-gradient-to-r from-gray-800/50 to-gray-900/50 flex-shrink-0">
                <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-white">{panel.manga}</h3>
                        <p className="text-gray-400 mt-1">{panel.title}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={onClose}
                    className="p-3 hover:bg-gray-700/50 rounded-xl transition-all duration-300 group">
                        <X className="w-6 h-6 text-gray-400 group-hover:text-red-400 transition-colors duration-300" />
                    </button>
                </div>
                </div>
                <div className="flex-1 p-6 flex items-center justify-center min-h-0 overflo-auto">
                    <img
                    src={panel.image}
                    alt={panel.title}
                    className={`rounded-2xl shadow-2xl border border-gray-700/30 transition-all duration-300 ${
                        imageZoomed
                        ? "max-w-none max-h-none w-auto h-auto cursor-zoom-out"
                        : "max-w-full max-h-full object-contain cursor-zoom-in"
                    }`}
                    onClick={toggleImageZoom}
                     />
                </div>
             </div>
        </div>
    );
};