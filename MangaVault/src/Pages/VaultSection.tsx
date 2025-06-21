import { useState } from "react";
import { X } from "lucide-react";
import { mangaData } from "../data/MangaData";
import { Logo } from "../components/Logo";




const VaultSection = () => {
  const[selectedManga, setSelectedManga] = useState(null);
  const[selectedPanel, setSelectedPanel] = useState(null);

  const getAllPanels = () => {
    return Object.values(mangaData).flat();
  };

  const getFilteredPanels = () => {
    if(selectedManga) {
      return mangaData[selectedManga] || [];
    }
    return getAllPanels();
  };

  const handleMangaClick = (mangaName) => {
    setSelectedManga(mangaName === selectedManga ? null : mangaName);
  };

  const handlePanelClick = (panel) => {
    setSelectedPanel(panel);
  };

  return(
    <div className="min-h-screen bg-gray-50 flex">
      {/*sidebar*/}
      <div className="w-64 bg-white shadow-lg border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <Logo />
          <p className="text-sm text-gray-600 mt-1">Manga Panel Collection</p>
        </div>

      <div className="p-4">
        <button onClick={() => setSelectedManga(null)}
        className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${
          !selectedManga
          ? 'bg-blue-100 text-blue-800 border border-blue-200'
          : 'hover:bg-gray-100 text-gray-700'
        }`}
        >All Manga</button>

        {Object.keys(mangaData).map((mangaName) => (
          <button key={mangaName}
          onClick={() => handleMangaClick(mangaName)}
          className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${
            selectedManga === mangaName
            ? 'bg-blue-100 text-blue-800 border border-blue-200'
            : 'hover:bg-gray-100 text-gray-700'
          }`}
          >
            {mangaName}
            <span className="text-xs text-gray-500 ml-2">
              ({mangaData[mangaName].length} panels)
            </span>
            </button>
        ))}
      </div>
      </div>

      {/*Main content*/}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {selectedManga ? `${selectedManga} Panels` : 'All Manga Panels'}
            </h2>
            <p className="text-gray-600">
              {getFilteredPanels().length} panels available
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          xl:grid-cols-5 gap-6">
            {getFilteredPanels().map((panel) => (
              <div key={panel.id}
              className="bg-white rounded-xl show-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => handlePanelClick(panel)}>
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={panel.image}
                    alt={panel.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm">
                    {panel.manga}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {panel.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Modal for full image*/}
      {selectedPanel && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {selectedPanel.manga}
                </h3>
                <p className="text-gray-600">{selectedPanel.title}</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="p-4">
              <img
                src={selectedPanel.image}
                alt={selectedPanel.title}
                className="max-w-full max-h-[70vh] object-contain mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VaultSection;