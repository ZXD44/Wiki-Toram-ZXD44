import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { monsters } from '../data/monsters';
import type { MonsterType, ElementType } from '../types';

const typeFilters: { value: MonsterType | 'all'; label: string }[] = [
  { value: 'all',       label: 'ทั้งหมด' },
  { value: 'boss',      label: '🐉 บอส' },
  { value: 'mini_boss', label: '⚡ มินิบอส' },
  { value: 'normal',    label: '👾 ปกติ' },
];

const elementFilters: { value: ElementType | 'all'; label: string }[] = [
  { value: 'all',     label: 'ทุกธาตุ' },
  { value: 'fire',    label: '🔥 ไฟ' },
  { value: 'water',   label: '💧 น้ำ' },
  { value: 'wind',    label: '🌪️ ลม' },
  { value: 'earth',   label: '🌍 ดิน' },
  { value: 'light',   label: '✨ แสง' },
  { value: 'dark',    label: '🌑 มืด' },
  { value: 'neutral', label: '⚪ ไร้ธาตุ' },
];

function getTypeLabel(type: MonsterType): { label: string; className: string } {
  switch (type) {
    case 'boss': return { label: 'บอส', className: 'badge-boss' };
    case 'mini_boss': return { label: 'มินิบอส', className: 'badge-mini-boss' };
    default: return { label: 'ปกติ', className: 'badge-normal' };
  }
}

export default function MonstersPage() {
  const [searchParams] = useSearchParams();
  const urlType = searchParams.get('type') as MonsterType | null;

  const [typeFilter, setTypeFilter] = useState<MonsterType | 'all'>(urlType || 'all');
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
        (m.name_en?.toLowerCase().includes(q)) ||
        m.name_th.includes(q)
      );
    }

    result = [...result].sort((a, b) => {
      if (sortBy === 'level') return b.level - a.level;
      if (sortBy === 'hp') return b.hp - a.hp;
      return (a.name_en || a.name_th).localeCompare(b.name_en || b.name_th);
    });

    return result;
  }, [typeFilter, elementFilter, searchQuery, sortBy]);

  return (
    <div className="min-h-screen pt-14">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted mb-4">
          <Link to="/" className="text-link">หน้าหลัก</Link>
          <span>/</span>
          <span className="text-surface-100">มอนสเตอร์</span>
        </nav>

        <div className="db-card">
          <div className="db-card-header flex items-center justify-between">
            <span>👾 รายการมอนสเตอร์ • {filteredMonsters.length} ตัว</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'level' | 'name' | 'hp')}
              className="text-xs px-2 py-1 rounded border bg-transparent text-surface-200 cursor-pointer"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <option value="level">เรียงตาม: เลเวล</option>
              <option value="hp">เรียงตาม: HP</option>
              <option value="name">เรียงตาม: ชื่อ</option>
            </select>
          </div>

          {/* Filters */}
          <div className="p-3 space-y-2 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative flex-1 min-w-[200px] max-w-sm">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ค้นหามอนสเตอร์..."
                  className="search-input !pl-9 !py-1.5 text-[13px]"
                />
              </div>
              <div className="flex flex-wrap gap-1">
                {typeFilters.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setTypeFilter(f.value)}
                    className={`filter-pill ${typeFilter === f.value ? 'active' : ''}`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-1">
              {elementFilters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setElementFilter(f.value)}
                  className={`filter-pill ${elementFilter === f.value ? 'active' : ''}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          {filteredMonsters.length === 0 ? (
            <div className="text-center py-16 text-muted">
              <div className="text-4xl mb-3">🔍</div>
              <p className="font-medium">ไม่พบมอนสเตอร์</p>
              <p className="text-xs mt-1">ลองเปลี่ยนคำค้นหาหรือตัวกรอง</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="db-table">
                <thead>
                  <tr>
                    <th>ชื่อ</th>
                    <th>ประเภท</th>
                    <th>Lv</th>
                    <th>HP</th>
                    <th>ธาตุ</th>
                    <th>EXP</th>
                    <th>ดรอป</th>
                    <th>พบได้ที่</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMonsters.map((monster) => {
                    const typeInfo = getTypeLabel(monster.type);
                    return (
                      <tr key={monster.id}>
                        <td>
                          <Link to={`/monsters/${monster.id}`} className="font-medium">
                            {monster.name_th}
                          </Link>
                          {monster.name_en && (
                            <span className="text-xs text-muted ml-2">{monster.name_en}</span>
                          )}
                        </td>
                        <td><span className={`badge ${typeInfo.className}`}>{typeInfo.label}</span></td>
                        <td className="font-medium">{monster.level}</td>
                        <td className="text-red-400">{monster.hp.toLocaleString()}</td>
                        <td className="text-xs">{getElementEmoji(monster.element)} {getElementThai(monster.element)}</td>
                        <td className="text-green-400">{monster.exp_reward}</td>
                        <td className="text-primary-500 font-medium">{monster.drops.length}</td>
                        <td className="text-xs text-muted max-w-[150px] truncate">
                          {monster.locations[0]?.map_name_th || '-'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
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
