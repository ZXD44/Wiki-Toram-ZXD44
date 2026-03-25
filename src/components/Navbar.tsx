import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import type { KeyboardEvent } from 'react';

const navLinks = [
  { path: '/', label: 'หน้าหลัก', icon: '🏠' },
  { path: '/items', label: 'ไอเทม', icon: '⚔️' },
  { path: '/monsters', label: 'มอนสเตอร์', icon: '👾' },
  { path: '/maps', label: 'แผนที่', icon: '🗺️' },
  { path: '/skills', label: 'สกิล', icon: '✨' },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF-vjKGoWQm2h6Df8QwI5-TH4lDSWAl9XlsA&s" alt="Toram Logo" className="w-10 h-10 rounded-xl object-cover shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/50 transition-shadow duration-300" />
            <div className="hidden sm:block">
              <span className="text-lg font-bold gradient-text">Wiki Toram</span>
              <span className="block text-xs text-surface-200/60 -mt-0.5">ฐานข้อมูลเกม Toram Online</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-primary-500/20 text-primary-300 shadow-inner'
                      : 'text-surface-200/70 hover:text-surface-100 hover:bg-surface-800/50'
                  }`}
                >
                  <span>{link.icon}</span>
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="ค้นหา..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="w-56 lg:w-72 bg-surface-800/60 border border-surface-700/50 rounded-xl px-4 py-2 pl-10 text-sm text-surface-100 placeholder:text-surface-200/40 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-200/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-surface-200/70 hover:text-surface-100 hover:bg-surface-800/50 transition-colors"
            aria-label="เมนู"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-surface-700/30 animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-500/20 text-primary-300'
                      : 'text-surface-200/70 hover:text-surface-100 hover:bg-surface-800/50'
                  }`}
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.label}
                </Link>
              );
            })}
            {/* Mobile search */}
            <div className="pt-2">
              <input
                type="text"
                placeholder="ค้นหา..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="w-full bg-surface-800/60 border border-surface-700/50 rounded-xl px-4 py-2.5 text-sm text-surface-100 placeholder:text-surface-200/40 focus:outline-none focus:border-primary-500/50"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
