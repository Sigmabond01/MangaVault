import { Aperture } from "lucide-react";

export const Navbar = () => {
    return <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-white to-white rounded-lg blur opacity-25"></div>
                <div className="relative bg-gray-900 p-3 rounded-lg">
                  <Aperture className="w-6 h-6 text-gray-400" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-t from-gray-400 to-black bg-clip-text text-transparent">
                  MangaVault
                </h1>
              </div>
            </div>
}