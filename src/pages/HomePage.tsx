import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { items } from '../data/items';
import { monsters } from '../data/monsters';
import { maps } from '../data/maps';
import { getSubTypeThai, elementConfig } from '../components/GameBadges';


export default function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const bossCount = monsters.filter(m => m.type === 'boss').length;
  const weaponCount = items.filter(i => i.type === 'weapon').length;
  const materialCount = items.filter(i => i.type === 'material').length;



  const quickLinks = [
    { label: '📋 ไอเทมทั้งหมด', path: '/items', desc: `${items.length} รายการ` },
    { label: '⚔️ อาวุธ', path: '/items?type=weapon', desc: `${weaponCount} รายการ` },
    { label: '🪵 วัตถุดิบ', path: '/items?type=material', desc: `${materialCount} รายการ` },
    { label: '👾 มอนสเตอร์', path: '/monsters', desc: `${monsters.length} ตัว` },
    { label: '🐉 บอส', path: '/monsters?type=boss', desc: `${bossCount} ตัว` },
    { label: '🗺️ แผนที่', path: '/maps', desc: `${maps.length} แมพ` },
  ];

  return (
    <div className="min-h-screen pt-14">
      <div className="max-w-5xl mx-auto px-4 py-10">

        {/* Welcome Section */}
        <div className="db-card mb-8">
          <div className="db-card-header">🎮 ยินดีต้อนรับสู่ Wiki Toram Online TH</div>
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-black mb-3 tracking-tight">
                ร่วมค้นพบและแบ่งปันข้อมูล <span className="bg-linear-to-r from-primary-600 to-blue-400 bg-clip-text text-transparent">Toram Online</span>
              </h1>
              <p className="text-surface-700 dark:text-surface-600 text-base leading-relaxed max-w-2xl">
                ฐานข้อมูลเกม <span className="font-semibold text-primary-600">Toram Online</span> ภาษาไทยที่รวบรวมข้อมูลสำคัญไว้ในที่เดียว <br />
                ค้นหาข้อมูลไอเทม มอนสเตอร์ สกิล และแผนที่ ทั้งหมดได้ที่นี่
                <span className="block mt-1.5 text-[11px] text-muted italic">
                  * ข้อมูลในระบบอาจมีการเปลี่ยนแปลงตามแพตช์เกม และอาจไม่ตรงกับปัจจุบัน 100%
                </span>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="text-[11px] font-bold text-muted uppercase tracking-wider block w-full mb-1">เข้าร่วมชุมชนผู้เล่นชาวไทย</span>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-lg text-xs font-bold transition-all shadow-md shadow-blue-500/10 active:scale-95"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Facebook Group
                  </a>
                  <a 
                    href="https://discord.gg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#5865F2] hover:bg-[#4752c4] text-white rounded-lg text-xs font-bold transition-all shadow-md shadow-indigo-500/10 active:scale-95"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.23 10.23 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
                    Discord Server
                  </a>
                </div>
              </p>
            </div>
            {/* Big Search */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                }
              }}
              className="relative max-w-lg flex gap-2"
            >
              <div className="relative flex-1">
                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="ค้นหาไอเทม, มอนสเตอร์, แผนที่..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input !pl-10 !py-2.5 text-sm"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-semibold transition-all shadow-md shadow-primary-500/20 active:scale-95 shrink-0"
              >
                ค้นหา
              </button>
            </form>          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { icon: '⚔️', label: 'ไอเทม', value: items.length },
            { icon: '👾', label: 'มอนสเตอร์', value: monsters.length },
            { icon: '🐉', label: 'บอส', value: bossCount },
            { icon: '🗺️', label: 'แผนที่', value: maps.length },
          ].map((stat) => (
            <div key={stat.label} className="db-card p-4 text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-xl font-bold text-primary-600">{stat.value}</div>
              <div className="text-xs text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="db-card mb-8">
          <div className="db-card-header">⚡ ทางลัด</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-center justify-between px-4 py-3 text-sm hover:bg-white/5 transition-colors border-b last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <span className="text-link font-medium">{link.label}</span>
                <span className="text-xs text-muted">{link.desc}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Bosses Table */}
        <div className="db-card mb-8">
          <div className="db-card-header">🐉 บอสมอนสเตอร์</div>
          <div className="overflow-x-auto">
            <table className="db-table">
              <thead>
                <tr>
                  <th>ชื่อ</th>
                  <th>Lv</th>
                  <th>HP</th>
                  <th>ธาตุ</th>
                  <th>ดรอป</th>
                </tr>
              </thead>
              <tbody>
                {monsters.filter(m => m.type === 'boss').map((boss) => (
                  <tr key={boss.id}>
                    <td>
                      <Link to={`/monsters/${boss.id}`} className="font-medium">
                        🐉 {boss.name_th}
                      </Link>
                    </td>
                    <td>{boss.level}</td>
                    <td className="text-red-400">{boss.hp.toLocaleString()}</td>
                    <td>{elementConfig[boss.element]?.emoji} {elementConfig[boss.element]?.label}</td>
                    <td className="text-primary-500">{boss.drops.length} ชิ้น</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Items Table */}
        <div className="db-card">
          <div className="db-card-header">⚔️ อาวุธและอุปกรณ์ล่าสุด</div>
          <div className="overflow-x-auto">
            <table className="db-table">
              <thead>
                <tr>
                  <th>ชื่อ</th>
                  <th>ประเภท</th>
                  <th>Lv</th>
                  <th>ราคาขาย</th>
                </tr>
              </thead>
              <tbody>
                {items.slice(0, 8).map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Link to={`/items/${item.id}`} className="font-medium">
                        {item.name_th}
                      </Link>
                      {item.name_en && (
                        <span className="text-xs text-muted ml-2">{item.name_en}</span>
                      )}
                    </td>
                    <td className="text-muted text-xs uppercase tracking-tight">{getSubTypeThai(item.type)}</td>
                    <td>{item.level_req}</td>
                    <td className="text-primary-500 font-medium">{item.sell_price.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-3 text-center border-t" style={{ borderColor: 'var(--color-border)' }}>
            <Link to="/items" className="text-link hover:text-accent-400 text-sm font-medium">
              ดูไอเทมทั้งหมด →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


