import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import type { KeyboardEvent } from 'react';

type DropdownItem = { path: string; label: string };
type NavItem = {
  path?: string;
  label: string;
  icon: string;
  dropdown?: DropdownItem[];
};

const navItems: NavItem[] = [
  { path: '/', label: 'หน้าหลัก', icon: '🏠' },
  {
    label: 'ไอเทม', icon: '📦',
    dropdown: [
      { path: '/items', label: '📋 ไอเทมทั้งหมด' },
      { path: '/items?type=weapon', label: '⚔️ อาวุธ' },
      { path: '/items?type=armor', label: '🛡️ เกราะ' },
      { path: '/items?type=additional', label: '🎩 เสริม' },
      { path: '/items?type=crystal', label: '💎 คริสตัล' },
      { path: '/items?type=material', label: '🪵 วัตถุดิบ' },
      { path: '/items?type=consumable', label: '🧪 ของใช้' },
    ],
  },

  { path: '/monsters', label: 'มอนสเตอร์', icon: '👾' },
  { path: '/maps', label: 'แผนที่', icon: '🗺️' },
  { path: '/skills', label: 'สกิล', icon: '✨' },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [mobileOpenDropdowns, setMobileOpenDropdowns] = useState<Set<string>>(new Set());

  const toggleMobileDropdown = (label: string) => {
    setMobileOpenDropdowns(prev => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileOpen(false);
      setSearchQuery('');
    }
  };

  const handleDropdownEnter = (label: string) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileOpenDropdowns(new Set());
  }, [location.pathname, location.search]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b shadow-sm" style={{ backgroundColor: 'var(--color-navbar)', borderColor: 'var(--color-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF-vjKGoWQm2h6Df8QwI5-TH4lDSWAl9XlsA&s"
              alt="Toram Logo"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <div className="hidden sm:block">
              <span className="text-sm font-bold text-primary-600">Wiki Toram Online TH</span>
              <span className="block text-[10px] text-muted -mt-0.5">ฐานข้อมูล Toram Online ภาษาไทย</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button className="flex items-center gap-1.5 px-3 py-2 rounded-md text-[13px] font-medium text-surface-700 hover:text-primary-600 hover:bg-surface-100 transition-all">
                      <span className="text-sm">{item.icon}</span>
                      {item.label}
                      <svg className="w-3 h-3 ml-0.5 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 min-w-[200px] py-1 rounded-lg border shadow-xl animate-slide-down" style={{ backgroundColor: 'var(--color-navbar)', borderColor: 'var(--color-border)' }}>
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className="block px-4 py-2 text-[13px] text-surface-700 hover:text-primary-600 hover:bg-surface-100 transition-all"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path!}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-[13px] font-medium transition-all relative ${
                    isActive
                      ? 'text-primary-600 bg-surface-100 dark:bg-surface-200'
                      : 'text-surface-700 hover:text-primary-600 hover:bg-surface-100'
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  {item.label}
                  {isActive && (
                    <div className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-primary-600 rounded-full animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Search & Theme Toggle */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-1.5 rounded-md text-surface-700 hover:text-primary-600 hover:bg-surface-100 transition-colors"
              aria-label="สลับธีม"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="ค้นหาไอเทม, มอนสเตอร์..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="search-input w-52 lg:w-64 !pl-9 !py-1.5 text-[13px]"
              />
            </div>
          </div>

          {/* Mobile Actions (Search + Theme Toggle + Menu) */}
          <div className="flex md:hidden items-center gap-1.5 flex-1 justify-end ml-4">
            {/* Mobile Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-1.5 rounded-md text-surface-700 hover:text-primary-600 transition-colors"
              aria-label="สลับธีม"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>

            {/* Mobile Search - Compact */}
            <div className="relative flex-1 max-w-[140px]">
              <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-surface-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="ค้นหา..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="search-input !pl-8 !pr-2 !py-1 text-xs w-full"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 rounded-md text-surface-700 hover:text-primary-600 transition-colors"
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
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t animate-fade-in" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-navbar)' }}>
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => {
              if (item.dropdown) {
                const isOpen = mobileOpenDropdowns.has(item.label);
                return (
                  <div key={item.label} className="border-b last:border-0" style={{ borderColor: 'var(--color-border)' }}>
                    <button
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-primary-600 uppercase tracking-wider"
                    >
                      <span className="flex items-center gap-2">
                        {item.icon} {item.label}
                      </span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="bg-surface-100/30 flex flex-col pb-2 animate-slide-down">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setMobileOpen(false)}
                            className="block pl-9 py-2.5 text-[13px] text-surface-700 hover:text-primary-600 transition-colors border-l-2 border-transparent active:border-primary-500 active:bg-surface-100"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.path}
                  to={item.path!}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 rounded-md text-[13px] font-medium transition-all ${
                    location.pathname === item.path
                      ? 'text-primary-600 bg-surface-100 dark:bg-surface-200 border-l-3 border-primary-600'
                      : 'text-surface-700 hover:text-primary-600 hover:bg-surface-100'
                  }`}
                >
                  {item.icon} {item.label}
                </Link>
              );
            })}

          </div>
        </div>
      )}
    </nav>
  );
}
