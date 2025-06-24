import { Eye } from "lucide-react";

export const Navbar = () => {
    return <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25"></div>
                <div className="relative bg-gray-900 p-3 rounded-lg">
                  <Eye className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  MangaVault
                </h1>
                <p className="text-gray-400 text-sm">Premium Panel Collection</p>
              </div>
            </div>
}