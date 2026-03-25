import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ItemsPage from './pages/ItemsPage';
import ItemDetailPage from './pages/ItemDetailPage';
import MonstersPage from './pages/MonstersPage';
import MonsterDetailPage from './pages/MonsterDetailPage';
import MapsPage from './pages/MapsPage';
import SkillsPage from './pages/SkillsPage';
import SearchPage from './pages/SearchPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/items" element={<ItemsPage />} />
            <Route path="/items/:id" element={<ItemDetailPage />} />
            <Route path="/monsters" element={<MonstersPage />} />
            <Route path="/monsters/:id" element={<MonsterDetailPage />} />
            <Route path="/maps" element={<MapsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
