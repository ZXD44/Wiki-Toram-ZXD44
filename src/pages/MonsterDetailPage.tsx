import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { monsters } from '../data/monsters';
import { ElementBadge, MonsterTypeBadge, formatNumber } from '../components/GameBadges';
import ImageModal from '../components/ImageModal';
import { getAssetPath } from '../utils/assets';

export default function MonsterDetailPage() {
  const { id } = useParams<{ id: string }>();
  const monster = monsters.find(m => m.id === Number(id));
  const [isImageOpen, setIsImageOpen] = useState(false);

  if (!monster) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❓</div>
          <h2 className="text-2xl font-bold text-surface-100 mb-2">ไม่พบมอนสเตอร์</h2>
          <p className="text-surface-200/50 mb-6">Monster ID: {id} ไม่มีในฐานข้อมูล</p>
          <Link to="/monsters" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary-600 text-white font-medium text-sm hover:bg-primary-500 transition-colors">
            ← กลับไปรายการมอนสเตอร์
          </Link>
        </div>
      </div>
    );
  }

  const hpBarPercent = Math.min((monster.hp / 100_000_000) * 100, 100);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-surface-200/40 animate-fade-in">
          <Link to="/" className="hover:text-primary-400 transition-colors">หน้าหลัก</Link>
          <span>/</span>
          <Link to="/monsters" className="hover:text-primary-400 transition-colors">มอนสเตอร์</Link>
          <span>/</span>
          <span className="text-surface-200/70">{monster.name_th}</span>
        </nav>

        {/* Header Card */}
        <div className="p-6 sm:p-8 rounded-2xl glass animate-slide-up mb-6">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div 
              className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shrink-0 border overflow-hidden ${
                monster.image_url ? 'cursor-pointer hover:scale-105 transition-transform border-surface-700/30 bg-surface-800/50' : `animate-pulse-glow ${
                  monster.type === 'boss'
                    ? 'bg-gradient-to-br from-red-500/30 to-red-600/20 border-red-500/20'
                    : monster.type === 'mini_boss'
                      ? 'bg-gradient-to-br from-amber-500/30 to-amber-600/20 border-amber-500/20'
                      : 'bg-gradient-to-br from-surface-700/50 to-surface-800/30 border-surface-700/30'
                }`
              }`}
              onClick={() => monster.image_url && setIsImageOpen(true)}
            >
              {monster.image_url ? (
                <img src={getAssetPath(monster.image_url)} alt={monster.name_th} className="w-full h-full object-cover" />
              ) : (
                monster.type === 'boss' ? '🐉' : monster.type === 'mini_boss' ? '⚡' : '👾'
              )}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-2xl sm:text-3xl font-black text-surface-100">{monster.name_th}</h1>
                <MonsterTypeBadge type={monster.type} />
                <ElementBadge element={monster.element} />
              </div>
              <p className="text-surface-200/50 text-sm mb-4">{monster.name_en}</p>

              {/* HP Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-medium text-surface-200/60">HP</span>
                  <span className="text-sm font-bold text-red-400">{formatNumber(monster.hp)}</span>
                </div>
                <div className="h-3 bg-surface-800/60 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 transition-all duration-1000 ease-out"
                    style={{ width: `${hpBarPercent}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-3 rounded-xl bg-surface-800/40 text-center">
                  <div className="text-xs text-surface-200/40 mb-0.5">Level</div>
                  <div className="text-lg font-bold text-surface-100">{monster.level}</div>
                </div>
                <div className="p-3 rounded-xl bg-surface-800/40 text-center">
                  <div className="text-xs text-surface-200/40 mb-0.5">EXP</div>
                  <div className="text-lg font-bold text-green-400">{formatNumber(monster.exp_reward)}</div>
                </div>
                <div className="p-3 rounded-xl bg-surface-800/40 text-center">
                  <div className="text-xs text-surface-200/40 mb-0.5">ธาตุ</div>
                  <div className="text-lg font-bold">{getElementEmoji(monster.element)} {getElementThai(monster.element)}</div>
                </div>
                <div className="p-3 rounded-xl bg-surface-800/40 text-center">
                  <div className="text-xs text-surface-200/40 mb-0.5">ดรอป</div>
                  <div className="text-lg font-bold text-amber-400">{monster.drops.length} ชิ้น</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Drop Table */}
          <div className="p-6 rounded-2xl glass animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-lg font-bold text-surface-100 mb-5 flex items-center gap-2">
              🎁 ตารางดรอป
            </h2>
            {monster.drops.length === 0 ? (
              <p className="text-surface-200/40 text-sm">ยังไม่มีข้อมูลดรอป</p>
            ) : (
              <div className="space-y-3">
                {monster.drops.map((drop, i) => (
                  <Link
                    key={i}
                    to={`/items/${drop.item_id}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-surface-800/40 border border-surface-700/20 hover:border-primary-500/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/10 flex items-center justify-center text-lg border border-primary-500/20">
                      ⚔️
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-surface-100 group-hover:text-primary-300 transition-colors truncate">
                        {drop.item_name_th}
                      </p>
                      <p className="text-xs text-surface-200/40">{drop.item_name_en}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className={`text-sm font-bold ${
                        drop.drop_rate <= 5 ? 'text-red-400' : drop.drop_rate <= 10 ? 'text-amber-400' : 'text-green-400'
                      }`}>
                        {drop.drop_rate}%
                      </div>
                      <div className={`text-xs px-2 py-0.5 rounded-full ${
                        drop.condition === 'break'
                          ? 'bg-red-500/10 text-red-400'
                          : drop.condition === 'rare'
                            ? 'bg-purple-500/10 text-purple-400'
                            : 'bg-surface-700/30 text-surface-200/50'
                      }`}>
                        {drop.condition === 'break' ? 'ทุบ' : drop.condition === 'rare' ? 'หายาก' : 'ปกติ'}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Location & Notes */}
          <div className="space-y-6">
            {/* Locations */}
            <div className="p-6 rounded-2xl glass animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-lg font-bold text-surface-100 mb-5 flex items-center gap-2">
                📍 ตำแหน่งที่พบ
              </h2>
              <div className="space-y-2">
                {monster.locations.map((loc, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-surface-800/40 border border-surface-700/20">
                    <span className="text-lg">🗺️</span>
                    <div>
                      <p className="text-sm font-medium text-surface-100">{loc.map_name_th}</p>
                      <p className="text-xs text-surface-200/40">{loc.map_name_en}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            {monster.note_th && (
              <div className="p-6 rounded-2xl glass animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-lg font-bold text-surface-100 mb-4 flex items-center gap-2">
                  📝 บันทึก / เคล็ดลับ
                </h2>
                <div className="p-4 rounded-xl bg-primary-500/5 border border-primary-500/10">
                  <p className="text-sm text-surface-200/70 leading-relaxed">
                    {monster.note_th}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {monster.image_url && (
        <ImageModal 
          isOpen={isImageOpen} 
          imageUrl={getAssetPath(monster.image_url)} 
          altText={monster.name_th} 
          onClose={() => setIsImageOpen(false)} 
        />
      )}
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
