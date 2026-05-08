import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import NavigationBar from "./components/NavigationBar";

export default function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}
