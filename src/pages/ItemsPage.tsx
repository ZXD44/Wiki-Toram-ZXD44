import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { items } from '../data/items';
import { monsters } from '../data/monsters';
import { getItemSubTypeIcon, getSubTypeThai } from '../components/GameBadges';
import type { ItemType, Item } from '../types';

function getItemSourceDisplay(item: Item) {
  const sources: string[] = [];
  
  // 1. Check drops_from
  if (item.drops_from && item.drops_from.length > 0) {
    const dSources = item.drops_from.map(df => {
      const mon = monsters.find(m => m.id === df.monster_id);
      return mon ? mon.name_th : null;
    }).filter(Boolean);
    if (dSources.length > 0) {
      sources.push(`ดรอปจาก: ${dSources.join(', ')}`);
    }
  }

  // 2. Check specific keywords in obtain_method for non-drop sources
  if (item.obtain_method && item.obtain_method.includes('ช่างหลอม')) {
    sources.push('ทำที่ช่างหลอม');
  } else if (!item.drops_from || item.drops_from.length === 0) {
    // If no drops, fallback to show the manual obtain_method
    if (item.obtain_method) sources.push(item.obtain_method);
  }

  return sources.join(' / ') || '-';
}

const typeFilters: { value: ItemType | 'all'; label: string }[] = [
  { value: 'all',        label: 'ทั้งหมด' },
  { value: 'weapon',     label: '⚔️ อาวุธ' },
  { value: 'armor',      label: '🛡️ เกราะ' },
  { value: 'additional', label: '🎩 เสริม' },
  { value: 'crystal',    label: '💎 คริสตัล' },
  { value: 'material',   label: '🪵 วัตถุดิบ' },
  { value: 'consumable', label: '🧪 ของใช้' },
];

const weaponSubTypes = [
  { value: 'all', label: 'ทั้งหมด' },
  { value: 'sword', label: '🗡️ ดาบ' },
  { value: 'bow', label: '🏹 ธนู' },
  { value: 'bowgun', label: '🔫 หน้าไม้' },
  { value: 'staff', label: '🪄 ไม้เท้า' },
  { value: 'magic_device', label: '🔮 เครื่องราง' },
  { value: 'halberd', label: '🪓 หอก' },
  { value: 'katana', label: '⚔️ คาตานะ' },
  { value: 'knuckle', label: '🥊 สนับมือ' },
];

export default function ItemsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlType = searchParams.get('type') as ItemType | null;
  const urlSub = searchParams.get('sub');

  const [typeFilter, setTypeFilter] = useState<ItemType | 'all'>(urlType || (urlSub ? 'weapon' : 'all'));
  const [subFilter, setSubFilter] = useState<string | 'all'>(urlSub || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'level' | 'name'>('level');

  // Handle URL changes
  useEffect(() => {
    if (urlType) setTypeFilter(urlType);
    if (urlSub) {
      setSubFilter(urlSub);
      setTypeFilter('weapon'); // Assume subs are weapons right now
    }
  }, [urlType, urlSub]);

  const handleTypeClick = (type: ItemType | 'all') => {
    setTypeFilter(type);
    setSubFilter('all');
    if (type === 'all') {
      searchParams.delete('type');
      searchParams.delete('sub');
    } else {
      searchParams.set('type', type);
      searchParams.delete('sub');
    }
    setSearchParams(searchParams);
  };

  const handleSubClick = (sub: string) => {
    setSubFilter(sub);
    if (sub === 'all') {
      searchParams.delete('sub');
    } else {
      searchParams.set('sub', sub);
      searchParams.delete('type'); // optional: clean up URL
    }
    setSearchParams(searchParams);
  };

  const filteredItems = useMemo(() => {
    let result = items;

    if (typeFilter !== 'all') {
      result = result.filter(i => i.type === typeFilter);
    }

    if (subFilter !== 'all') {
      result = result.filter(i => i.sub_type === subFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(i =>
        (i.name_en?.toLowerCase().includes(q)) ||
        i.name_th.includes(q) ||
        i.sub_type.includes(q)
      );
    }

    result = [...result].sort((a, b) => {
      if (sortBy === 'level') return b.level_req - a.level_req;
      return (a.name_en || a.name_th).localeCompare(b.name_en || b.name_th);
    });

    return result;
  }, [typeFilter, subFilter, searchQuery, sortBy]);

  return (
    <div className="min-h-screen pt-14">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted mb-4">
          <Link to="/" className="text-link">หน้าหลัก</Link>
          <span>/</span>
          <span className="text-surface-100">ไอเทม</span>
        </nav>

        <div className="db-card">
          <div className="db-card-header flex items-center justify-between">
            <span>⚔️ รายการไอเทม • {filteredItems.length} รายการ</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'level' | 'name')}
              className="text-xs px-2 py-1 rounded border bg-transparent text-surface-200 cursor-pointer"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <option value="level">เรียงตาม: เลเวล</option>
              <option value="name">เรียงตาม: ชื่อ</option>
            </select>
          </div>

          {/* Filters */}
          <div className="p-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <div className="relative flex-1 min-w-[200px] max-w-sm">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ค้นหาไอเทม..."
                  className="search-input !pl-9 !py-1.5 text-[13px]"
                />
              </div>
              <div className="flex flex-wrap gap-1">
                {typeFilters.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => handleTypeClick(f.value)}
                    className={`filter-pill ${typeFilter === f.value ? 'active' : ''}`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Weapon Sub-Filters */}
            {typeFilter === 'weapon' && (
              <div className="flex flex-wrap gap-1 mt-2 pt-2 border-t" style={{ borderColor: 'var(--color-border)' }}>
                {weaponSubTypes.map(sub => (
                  <button
                    key={sub.value}
                    onClick={() => handleSubClick(sub.value)}
                    className={`filter-pill text-[11px] !py-1 ${subFilter === sub.value ? 'active' : ''}`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Table */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 text-muted">
              <div className="text-4xl mb-3">🔍</div>
              <p className="font-medium">ไม่พบไอเทม</p>
              <p className="text-xs mt-1">ลองเปลี่ยนคำค้นหาหรือตัวกรอง</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="db-table">
                <thead>
                  <tr>
                    <th style={{ width: '36px' }}></th>
                    <th>ชื่อ</th>
                    <th>ประเภท</th>
                    <th>Lv</th>
                    <th>ราคาขาย</th>
                    <th>แหล่งที่ได้มา</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map((item) => (
                    <tr key={item.id}>
                      <td className="text-center text-lg">{getItemSubTypeIcon(item.sub_type)}</td>
                      <td>
                        <Link to={`/items/${item.id}`} className="font-medium">
                          {item.name_th}
                        </Link>
                        {item.name_en && (
                          <span className="text-xs text-muted ml-2">{item.name_en}</span>
                        )}
                      </td>
                      <td className="text-xs text-muted">{getSubTypeThai(item.sub_type)}</td>
                      <td>{item.level_req}</td>
                      <td className="text-primary-500 text-xs font-medium">{item.sell_price.toLocaleString()}</td>
                      <td className="text-xs text-muted max-w-[200px] truncate" title={getItemSourceDisplay(item)}>
                        {getItemSourceDisplay(item)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
