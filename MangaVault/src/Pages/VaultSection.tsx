
import { useState } from 'react';
import { X, Grid, List, Search, Filter } from 'lucide-react';
import { mangaData } from '../data/MangaData';

const MangaVault = () => {
  const [selectedManga, setSelectedManga] = useState(null);
  const [selectedPanel, setSelectedPanel] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const getAllPanels = () => {
    return Object.values(mangaData).flat();
  };

  const getFilteredPanels = () => {
    let panels = selectedManga ? mangaData[selectedManga] || [] : getAllPanels();
    
    if (searchTerm) {
      panels = panels.filter(panel => 
        panel.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        panel.manga.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return panels;
  };

  const handleMangaClick = (mangaName) => {
    setSelectedManga(mangaName === selectedManga ? null : mangaName);
  };

  const handlePanelClick = (panel) => {
    setSelectedPanel(panel);
  };

  const closeModal = () => {
    setSelectedPanel(null);
  };

  const filteredPanels = getFilteredPanels();

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <nav className="bg-gray-950 border-b border-gray-800 sticky top-0 z-40">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-100">MangaVault</h1>
                <p className="text-gray-400 text-sm">Panel Collection</p>
              </div>
            </div>

            {/* Search and Controls */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search panels..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-700 bg-gray-900 text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent w-64"
                />
              </div>
              
              {/* View Toggle */}
              <div className="flex bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-gray-700 text-blue-400 shadow-sm' 
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-gray-700 text-blue-400 shadow-sm' 
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Manga Filter Tabs */}
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedManga(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                !selectedManga 
                  ? 'bg-blue-900 text-blue-300 border border-blue-800' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Manga
              <span className="ml-2 text-xs bg-gray-700 text-gray-400 px-2 py-1 rounded-full">
                {getAllPanels().length}
              </span>
            </button>
            
            {Object.keys(mangaData).map((mangaName) => (
              <button
                key={mangaName}
                onClick={() => handleMangaClick(mangaName)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedManga === mangaName 
                    ? 'bg-blue-900 text-blue-300 border border-blue-800' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {mangaName}
                <span className="ml-2 text-xs bg-gray-700 text-gray-400 px-2 py-1 rounded-full">
                  {mangaData[mangaName].length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <div className="p-6 text-center font-comicneue
      ">
        {/* Content Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-100 mb-1">
            {selectedManga ? `${selectedManga}` : 'All Manga Panels'}
          </h2>
          <p className="text-gray-400">
            {filteredPanels.length} panel{filteredPanels.length !== 1 ? 's' : ''} available
          </p>
        </div>
        
        {/* Content Grid/List */}
        {filteredPanels.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <Filter className="w-16 h-16 mb-4" />
            <p className="text-xl font-medium">No panels found</p>
            <p className="text-sm">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6' 
              : 'space-y-4'
          }`}>
            {filteredPanels.map((panel) => (
              <div
                key={panel.id}
                className={`bg-gray-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700 ${
                  viewMode === 'list' ? 'flex items-center p-4 space-x-4' : ''
                }`}
                onClick={() => handlePanelClick(panel)}
              >
                <div className={`${viewMode === 'list' ? 'w-20 h-24 flex-shrink-0' : 'aspect-[3/4]'} overflow-hidden rounded-lg`}>
                  <img
                    src={panel.image}
                    alt={panel.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className={`${viewMode === 'list' ? 'flex-1' : 'p-4'}`}>
                  <h3 className="font-semibold text-gray-200 mb-1 text-sm">
                    {panel.manga}
                  </h3>
                  <p className={`text-gray-400 ${viewMode === 'list' ? 'text-sm' : 'text-xs line-clamp-2'}`}>
                    {panel.title}
                  </p>
                  {viewMode === 'list' && (
                    <span className="inline-block mt-2 px-2 py-1 bg-gray-700 text-blue-400 text-xs rounded-full">
                      Panel #{panel.id}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Modal for full image view */}
      {selectedPanel && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-gray-900 rounded-2xl w-full max-w-6xl h-full max-h-[95vh] overflow-hidden shadow-2xl animate-scale-in border border-gray-700 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 flex-shrink-0">
              <div>
                <h3 className="text-xl font-bold text-gray-100">
                  {selectedPanel.manga}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{selectedPanel.title}</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-700 rounded-xl transition-colors group"
              >
                <X className="w-6 h-6 text-gray-400 group-hover:text-gray-200" />
              </button>
            </div>
            <div className="flex-1 p-4 flex items-center justify-center min-h-0">
              <img
                src={selectedPanel.image}
                alt={selectedPanel.title}
                className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MangaVault;
