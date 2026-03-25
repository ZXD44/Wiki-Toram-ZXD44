import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { items } from '../data/items';
import { ItemTypeBadge } from '../components/GameBadges';
import { getAssetPath } from '../utils/assets';
import type { ItemType } from '../types';

const itemTypeFilters: { value: ItemType | 'all'; label: string; icon: string }[] = [
  { value: 'all',        label: 'ทั้งหมด',   icon: '📋' },
  { value: 'weapon',     label: 'อาวุธ',     icon: '⚔️' },
  { value: 'armor',      label: 'เกราะ',     icon: '🛡️' },
  { value: 'crystal',    label: 'คริสตัล',   icon: '💎' },
  { value: 'material',   label: 'วัตถุดิบ',  icon: '📦' },
  { value: 'consumable', label: 'ใช้แล้วหมด', icon: '🧪' },
];

const subTypeIcons: Record<string, string> = {
  sword: '🗡️', bow: '🏹', bowgun: '🔫', staff: '🪄', magic_device: '🔮',
  halberd: '🪓', katana: '⚔️', knuckle: '🥊', dual_sword: '⚔️',
  body_armor: '🛡️', weapon_crystal: '💎',
};

export default function ItemsPage() {
  const [typeFilter, setTypeFilter] = useState<ItemType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'level' | 'name'>('level');

  const filteredItems = useMemo(() => {
    let result = items;

    if (typeFilter !== 'all') {
      result = result.filter(i => i.type === typeFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(i =>
        i.name_en.toLowerCase().includes(q) ||
        i.name_th.includes(q) ||
        i.sub_type.includes(q)
      );
    }

    result = [...result].sort((a, b) => {
      if (sortBy === 'level') return b.level_req - a.level_req;
      return a.name_en.localeCompare(b.name_en);
    });

    return result;
  }, [typeFilter, searchQuery, sortBy]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 animate-slide-up">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-100">
            ⚔️ รายการไอเทม
          </h1>
          <p className="text-surface-200/50 mt-2">
            ข้อมูลไอเทมทั้งหมดในเกม Toram Online • {filteredItems.length} รายการ
          </p>
        </div>

        {/* Filters Bar */}
        <div className="mb-8 space-y-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {/* Search & Sort */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ค้นหาไอเทม... (ชื่อไทย / อังกฤษ)"
                className="w-full bg-surface-800/60 border border-surface-700/50 rounded-xl px-4 py-3 pl-11 text-sm text-surface-100 placeholder:text-surface-200/40 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
              />
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-200/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'level' | 'name')}
              className="bg-surface-800/60 border border-surface-700/50 rounded-xl px-4 py-3 text-sm text-surface-100 focus:outline-none focus:border-primary-500/50 cursor-pointer min-w-[140px]"
            >
              <option value="level">เรียงตาม: เลเวล</option>
              <option value="name">เรียงตาม: ชื่อ</option>
            </select>
          </div>

          {/* Type Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {itemTypeFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setTypeFilter(filter.value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  typeFilter === filter.value
                    ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30 shadow-inner'
                    : 'bg-surface-800/40 text-surface-200/60 border border-surface-700/30 hover:bg-surface-800/60 hover:text-surface-200'
                }`}
              >
                <span>{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-surface-200/70">ไม่พบไอเทม</h3>
            <p className="text-sm text-surface-200/40 mt-1">ลองเปลี่ยนคำค้นหาหรือตัวกรอง</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 stagger-children">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                to={`/items/${item.id}`}
                className="group p-5 rounded-2xl glass glass-hover card-glow transition-all duration-300 hover:scale-[1.02] flex flex-col"
              >
                {/* Item icon & name */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/10 flex items-center justify-center text-2xl border border-primary-500/20 shrink-0 overflow-hidden">
                    {item.image_url ? (
                      <img src={getAssetPath(item.image_url)} alt={item.name_th} className="w-full h-full object-cover" />
                    ) : (
                      subTypeIcons[item.sub_type] || '📦'
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-surface-100 leading-tight group-hover:text-primary-300 transition-colors">
                      {item.name_th}
                    </h3>
                    <p className="text-xs text-surface-200/40 mt-0.5 truncate">{item.name_en}</p>
                    <div className="mt-2">
                      <ItemTypeBadge type={item.type} />
                    </div>
                  </div>
                </div>

                {/* Stats preview */}
                <div className="mt-auto space-y-1.5 pt-3 border-t border-surface-700/20">
                  <div className="flex justify-between text-xs">
                    <span className="text-surface-200/50">เลเวล</span>
                    <span className="text-surface-100 font-semibold">{item.level_req}</span>
                  </div>
                  {item.stats.slice(0, 2).map((stat, i) => (
                    <div key={i} className="flex justify-between text-xs">
                      <span className="text-surface-200/50">{stat.stat_name}</span>
                      <span className="text-amber-400 font-semibold">
                        {stat.base_value}{stat.max_value ? ` ~ ${stat.max_value}` : ''}{stat.stat_type === 'percent' ? '%' : ''}
                      </span>
                    </div>
                  ))}
                  {item.stats.length > 2 && (
                    <div className="text-xs text-surface-200/30 text-right">
                      +{item.stats.length - 2} สเตตัสเพิ่มเติม
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
