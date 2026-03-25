import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { monsters } from '../data/monsters';
import { ElementBadge, MonsterTypeBadge, formatHP } from '../components/GameBadges';
import { getAssetPath } from '../utils/assets';
import type { MonsterType, ElementType } from '../types';

const typeFilters: { value: MonsterType | 'all'; label: string; icon: string }[] = [
  { value: 'all',       label: 'ทั้งหมด',    icon: '📋' },
  { value: 'boss',      label: 'บอส',       icon: '🐉' },
  { value: 'mini_boss', label: 'มินิบอส',   icon: '⚡' },
  { value: 'normal',    label: 'ปกติ',      icon: '👾' },
];

const elementFilters: { value: ElementType | 'all'; label: string; icon: string }[] = [
  { value: 'all',     label: 'ทุกธาตุ', icon: '🌈' },
  { value: 'fire',    label: 'ไฟ',    icon: '🔥' },
  { value: 'water',   label: 'น้ำ',    icon: '💧' },
  { value: 'wind',    label: 'ลม',    icon: '🌪️' },
  { value: 'earth',   label: 'ดิน',    icon: '🌍' },
  { value: 'light',   label: 'แสง',   icon: '✨' },
  { value: 'dark',    label: 'มืด',    icon: '🌑' },
  { value: 'neutral', label: 'ไร้ธาตุ', icon: '⚪' },
];

export default function MonstersPage() {
  const [typeFilter, setTypeFilter] = useState<MonsterType | 'all'>('all');
  const [elementFilter, setElementFilter] = useState<ElementType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'level' | 'name' | 'hp'>('level');

  const filteredMonsters = useMemo(() => {
    let result = monsters;

    if (typeFilter !== 'all') {
      result = result.filter(m => m.type === typeFilter);
    }
    if (elementFilter !== 'all') {
      result = result.filter(m => m.element === elementFilter);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(m =>
        m.name_en.toLowerCase().includes(q) ||
        m.name_th.includes(q)
      );
    }

    result = [...result].sort((a, b) => {
      if (sortBy === 'level') return b.level - a.level;
      if (sortBy === 'hp') return b.hp - a.hp;
      return a.name_en.localeCompare(b.name_en);
    });

    return result;
  }, [typeFilter, elementFilter, searchQuery, sortBy]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 animate-slide-up">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-100">
            👾 รายการมอนสเตอร์
          </h1>
          <p className="text-surface-200/50 mt-2">
            ข้อมูลมอนสเตอร์ บอส และมินิบอสทั้งหมด • {filteredMonsters.length} ตัว
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ค้นหามอนสเตอร์... (ชื่อไทย / อังกฤษ)"
                className="w-full bg-surface-800/60 border border-surface-700/50 rounded-xl px-4 py-3 pl-11 text-sm text-surface-100 placeholder:text-surface-200/40 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
              />
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-200/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'level' | 'name' | 'hp')}
              className="bg-surface-800/60 border border-surface-700/50 rounded-xl px-4 py-3 text-sm text-surface-100 focus:outline-none focus:border-primary-500/50 cursor-pointer min-w-[140px]"
            >
              <option value="level">เรียงตาม: เลเวล</option>
              <option value="hp">เรียงตาม: HP</option>
              <option value="name">เรียงตาม: ชื่อ</option>
            </select>
          </div>

          {/* Type Filter */}
          <div className="flex flex-wrap gap-2">
            {typeFilters.map((filter) => (
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

          {/* Element Filter */}
          <div className="flex flex-wrap gap-2">
            {elementFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setElementFilter(filter.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1 ${
                  elementFilter === filter.value
                    ? 'bg-accent-500/20 text-accent-400 border border-accent-500/30'
                    : 'bg-surface-800/30 text-surface-200/50 border border-surface-700/20 hover:bg-surface-800/50 hover:text-surface-200'
                }`}
              >
                <span>{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Monster Grid */}
        {filteredMonsters.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-surface-200/70">ไม่พบมอนสเตอร์</h3>
            <p className="text-sm text-surface-200/40 mt-1">ลองเปลี่ยนคำค้นหาหรือตัวกรอง</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {filteredMonsters.map((monster) => (
              <Link
                key={monster.id}
                to={`/monsters/${monster.id}`}
                className="group p-5 rounded-2xl glass glass-hover card-glow transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl border shrink-0 overflow-hidden ${
                    monster.type === 'boss'
                      ? 'bg-gradient-to-br from-red-500/20 to-red-600/10 border-red-500/20'
                      : monster.type === 'mini_boss'
                        ? 'bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-amber-500/20'
                        : 'bg-gradient-to-br from-surface-700/40 to-surface-800/30 border-surface-700/30'
                  }`}>
                    {monster.image_url ? (
                      <img src={getAssetPath(monster.image_url)} alt={monster.name_th} className="w-full h-full object-cover" />
                    ) : (
                      monster.type === 'boss' ? '🐉' : monster.type === 'mini_boss' ? '⚡' : '👾'
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-surface-100 leading-tight group-hover:text-primary-300 transition-colors">
                      {monster.name_th}
                    </h3>
                    <p className="text-xs text-surface-200/40 mt-0.5 truncate">{monster.name_en}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <MonsterTypeBadge type={monster.type} />
                      <ElementBadge element={monster.element} />
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 py-3 border-t border-surface-700/20">
                  <div className="text-center">
                    <div className="text-xs text-surface-200/40">Level</div>
                    <div className="text-sm font-bold text-surface-100">{monster.level}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-surface-200/40">HP</div>
                    <div className="text-sm font-bold text-red-400">{formatHP(monster.hp)}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-surface-200/40">EXP</div>
                    <div className="text-sm font-bold text-green-400">{formatHP(monster.exp_reward)}</div>
                  </div>
                </div>

                {/* Location preview */}
                {monster.locations.length > 0 && (
                  <div className="pt-2 border-t border-surface-700/20 text-xs text-surface-200/40">
                    📍 {monster.locations[0].map_name_th}
                    {monster.locations.length > 1 && ` +${monster.locations.length - 1}`}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
