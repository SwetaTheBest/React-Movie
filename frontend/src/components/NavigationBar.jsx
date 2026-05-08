import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <span className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
            🎬 MovieHub
          </span>
        </Link>
        <div className="flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-gray-700 hover:text-purple-600 font-semibold transition-colors duration-200 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/favorites" 
            className="text-gray-700 hover:text-purple-600 font-semibold transition-colors duration-200 relative group"
          >
            Favorites
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
