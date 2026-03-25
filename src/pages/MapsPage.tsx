import { useState, useMemo } from 'react';
import { maps } from '../data/maps';

export default function MapsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMaps = useMemo(() => {
    if (!searchQuery.trim()) return maps;
    const q = searchQuery.toLowerCase();
    return maps.filter(m => 
      m.name_en.toLowerCase().includes(q) || 
      m.name_th.includes(q) ||
      m.region.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 animate-slide-up">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-100">
            🗺️ แผนที่และสถานที่
          </h1>
          <p className="text-surface-200/50 mt-2">
            ข้อมูลเมืองและแผนที่เก็บเลเวลใน Toram Online 
          </p>
        </div>

        <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="relative max-w-xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหาแผนที่ หรือเขต (เช่น Sofya)..."
              className="w-full bg-surface-800/60 border border-surface-700/50 rounded-xl px-4 py-3 pl-11 text-sm text-surface-100 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20"
            />
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-200/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {filteredMaps.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-surface-200/70">ไม่พบแผนที่</h3>
            <p className="text-sm text-surface-200/40 mt-1">ลองเปลี่ยนคำค้นหาดูอีกครั้ง</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {filteredMaps.map((mapInfo) => (
              <div
                key={mapInfo.id}
                className="group p-5 rounded-2xl glass glass-hover card-glow transition-all duration-300 hover:scale-[1.02] flex flex-col"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 flex items-center justify-center text-2xl border border-green-500/20">
                    {mapInfo.level_range_max === 0 ? '🏰' : '🏕️'}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-surface-100 group-hover:text-primary-300 transition-colors">
                      {mapInfo.name_th}
                    </h3>
                    <p className="text-xs text-surface-200/40 mt-0.5">{mapInfo.name_en}</p>
                  </div>
                </div>

                <div className="mt-auto space-y-2 pt-3 border-t border-surface-700/20">
                  <div className="flex justify-between text-xs">
                    <span className="text-surface-200/50">เขต (Region)</span>
                    <span className="text-surface-100">{mapInfo.region}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-surface-200/50">ระดับเลเวลมอนสเตอร์</span>
                    <span className={mapInfo.level_range_max === 0 ? "text-primary-400 font-medium" : "text-amber-400 font-medium"}>
                      {mapInfo.level_range_max === 0 ? "พื้นที่ปลอดภัย (เมือง)" : `Lv. ${mapInfo.level_range_min} - ${mapInfo.level_range_max}`}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
