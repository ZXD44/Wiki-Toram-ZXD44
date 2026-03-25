import { Link } from 'react-router-dom';
import { items } from '../data/items';
import { monsters } from '../data/monsters';
import { formatNumber } from '../components/GameBadges';

export default function HomePage() {
  const bossMonsters = monsters.filter(m => m.type === 'boss');
  const weaponItems = items.filter(i => i.type === 'weapon');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-primary-500/10 text-primary-300 border border-primary-500/20 mb-6">
              ⚡ ฐานข้อมูล Toram Online ภาษาไทย
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="gradient-text">Wiki Toram</span>
            <br />
            <span className="text-surface-100">Online TH</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-surface-200/60 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            ค้นหาข้อมูลไอเทม มอนสเตอร์ สกิล และแผนที่ ทั้งหมดเป็นภาษาไทย
            <br className="hidden sm:block" />
            สร้างโดยชุมชนผู้เล่น เพื่อผู้เล่นชาวไทย
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/items"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold text-sm shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>⚔️</span>
              ดูไอเทมทั้งหมด
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/monsters"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass glass-hover text-surface-100 font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>👾</span>
              ดูมอนสเตอร์ทั้งหมด
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-12 border-y border-surface-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 stagger-children">
            {[
              { label: 'ไอเทม', value: items.length, icon: '⚔️' },
              { label: 'มอนสเตอร์', value: monsters.length, icon: '👾' },
              { label: 'บอส', value: bossMonsters.length, icon: '🐉' },
              { label: 'อาวุธ', value: weaponItems.length, icon: '🗡️' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl glass">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black gradient-text">{stat.value}</div>
                <div className="text-sm text-surface-200/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Bosses */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-surface-100">
                🐉 บอสยอดนิยม
              </h2>
              <p className="text-surface-200/50 mt-1 text-sm">มอนสเตอร์บอสที่ผู้เล่นตีบ่อยที่สุด</p>
            </div>
            <Link to="/monsters" className="text-sm text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1">
              ดูทั้งหมด →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {bossMonsters.map((monster) => (
              <Link
                key={monster.id}
                to={`/monsters/${monster.id}`}
                className="group p-5 rounded-2xl glass glass-hover card-glow transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center text-2xl border border-red-500/20 shrink-0 overflow-hidden">
                    {monster.image_url ? (
                      <img src={monster.image_url} alt={monster.name_th} className="w-full h-full object-cover" />
                    ) : '🐉'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-surface-100 truncate group-hover:text-primary-300 transition-colors">
                      {monster.name_th}
                    </h3>
                    <p className="text-xs text-surface-200/40 truncate">{monster.name_en}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-surface-200/50">Lv. {monster.level}</span>
                    <span className="text-red-400 font-medium">HP {formatNumber(monster.hp)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs">{getElementEmoji(monster.element)}</span>
                    <span className="text-xs text-surface-200/50">{getElementThai(monster.element)}</span>
                    <span className="ml-auto text-xs text-amber-400">
                      ดรอป {monster.drops.length} ชิ้น
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 sm:py-20 bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-surface-100">
                ⚔️ ไอเทมแนะนำ
              </h2>
              <p className="text-surface-200/50 mt-1 text-sm">อาวุธและอุปกรณ์ยอดนิยมในเกม</p>
            </div>
            <Link to="/items" className="text-sm text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1">
              ดูทั้งหมด →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {items.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                to={`/items/${item.id}`}
                className="group p-5 rounded-2xl glass glass-hover card-glow transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/10 flex items-center justify-center text-2xl border border-primary-500/20 shrink-0 overflow-hidden">
                    {item.image_url ? (
                      <img src={item.image_url} alt={item.name_th} className="w-full h-full object-cover" />
                    ) : getItemIcon(item.sub_type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-surface-100 truncate group-hover:text-primary-300 transition-colors">
                      {item.name_th}
                    </h3>
                    <p className="text-xs text-surface-200/40 truncate">{item.name_en}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-surface-200/50">Lv. {item.level_req}</span>
                    <span className="text-primary-400 font-medium">{getSubTypeThai(item.sub_type)}</span>
                  </div>
                  {item.stats[0] && (
                    <div className="text-xs text-amber-400 font-medium">
                      {item.stats[0].stat_name}: {item.stats[0].base_value}
                      {item.stats[0].max_value ? ` ~ ${item.stats[0].max_value}` : ''}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function getElementEmoji(element: string): string {
  const map: Record<string, string> = { fire: '🔥', water: '💧', wind: '🌪️', earth: '🌍', light: '✨', dark: '🌑', neutral: '⚪' };
  return map[element] || '⚪';
}

function getElementThai(element: string): string {
  const map: Record<string, string> = { fire: 'ไฟ', water: 'น้ำ', wind: 'ลม', earth: 'ดิน', light: 'แสง', dark: 'มืด', neutral: 'ไร้ธาตุ' };
  return map[element] || 'ไร้ธาตุ';
}

function getItemIcon(subType: string): string {
  const map: Record<string, string> = {
    sword: '🗡️', bow: '🏹', bowgun: '🔫', staff: '🪄', magic_device: '🔮',
    halberd: '🪓', katana: '⚔️', knuckle: '🥊', dual_sword: '⚔️',
    body_armor: '🛡️', weapon_crystal: '💎', armor_crystal: '💎', mob_drop: '📦'
  };
  return map[subType] || '📦';
}

function getSubTypeThai(subType: string): string {
  const map: Record<string, string> = {
    sword: 'ดาบ', bow: 'ธนู', bowgun: 'หน้าไม้', staff: 'ไม้เท้า', magic_device: 'เครื่องราง',
    halberd: 'หอก', katana: 'ดาบซามูไร', knuckle: 'สนับมือ', dual_sword: 'ดาบสเปเชียล',
    body_armor: 'ชุดเกราะ', weapon_crystal: 'คริสตัลอาวุธ', armor_crystal: 'คริสตัลชุดเกราะ',
    mob_drop: 'วัตถุดิบดรอป', boss_drop: 'วัตถุดิบบอส'
  };
  return map[subType] || subType;
}
