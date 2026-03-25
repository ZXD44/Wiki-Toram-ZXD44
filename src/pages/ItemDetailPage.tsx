import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { items } from '../data/items';
import { monsters } from '../data/monsters';
import { ItemTypeBadge, StatBar } from '../components/GameBadges';
import ImageModal from '../components/ImageModal';

export default function ItemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const item = items.find(i => i.id === Number(id));
  const [isImageOpen, setIsImageOpen] = useState(false);

  if (!item) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❓</div>
          <h2 className="text-2xl font-bold text-surface-100 mb-2">ไม่พบไอเทม</h2>
          <p className="text-surface-200/50 mb-6">ไอเทม ID: {id} ไม่มีในฐานข้อมูล</p>
          <Link to="/items" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary-600 text-white font-medium text-sm hover:bg-primary-500 transition-colors">
            ← กลับไปรายการไอเทม
          </Link>
        </div>
      </div>
    );
  }

  // Find which monsters drop this item
  const dropsFrom = item.drops_from?.map(d => {
    const monster = monsters.find(m => m.id === d.monster_id);
    return { ...d, monster };
  }) || [];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-surface-200/40 animate-fade-in">
          <Link to="/" className="hover:text-primary-400 transition-colors">หน้าหลัก</Link>
          <span>/</span>
          <Link to="/items" className="hover:text-primary-400 transition-colors">ไอเทม</Link>
          <span>/</span>
          <span className="text-surface-200/70">{item.name_th}</span>
        </nav>

        {/* Header Card */}
        <div className="p-6 sm:p-8 rounded-2xl glass animate-slide-up mb-6">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div 
              className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl border border-primary-500/20 shrink-0 overflow-hidden ${
                item.image_url ? 'cursor-pointer hover:scale-105 transition-transform' : 'bg-gradient-to-br from-primary-500/30 to-accent-500/20 animate-pulse-glow'
              }`}
              onClick={() => item.image_url && setIsImageOpen(true)}
            >
              {item.image_url ? (
                <img src={item.image_url} alt={item.name_th} className="w-full h-full object-cover" />
              ) : (
                getSubTypeIcon(item.sub_type)
              )}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-2xl sm:text-3xl font-black text-surface-100">{item.name_th}</h1>
                <ItemTypeBadge type={item.type} />
              </div>
              <p className="text-surface-200/50 text-sm mb-3">{item.name_en}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="text-surface-200/60">📊 เลเวล: <span className="text-surface-100 font-semibold">{item.level_req}</span></span>
                <span className="text-surface-200/60">🏷️ ประเภท: <span className="text-surface-100 font-semibold capitalize">{item.sub_type.replace('_', ' ')}</span></span>
                <span className="text-surface-200/60">💰 ขาย: <span className="text-amber-400 font-semibold">{item.sell_price.toLocaleString()} spina</span></span>
                <span className="text-surface-200/60">
                  {item.is_tradeable
                    ? <span className="text-green-400">✅ เทรดได้</span>
                    : <span className="text-red-400">❌ เทรดไม่ได้</span>
                  }
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Stats */}
          <div className="p-6 rounded-2xl glass animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-lg font-bold text-surface-100 mb-5 flex items-center gap-2">
              📊 สเตตัส
            </h2>
            <div className="space-y-4">
              {item.stats.map((stat, i) => (
                <StatBar
                  key={i}
                  label={stat.stat_name}
                  value={stat.base_value}
                  maxValue={stat.max_value}
                  type={stat.stat_type}
                />
              ))}
            </div>
          </div>

          {/* Drop Sources */}
          <div className="p-6 rounded-2xl glass animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-lg font-bold text-surface-100 mb-5 flex items-center gap-2">
              🎯 แหล่งที่ได้มา
            </h2>
            {dropsFrom.length === 0 ? (
              <p className="text-surface-200/40 text-sm">ไม่มีข้อมูลแหล่งดรอป</p>
            ) : (
              <div className="space-y-3">
                {dropsFrom.map((drop, i) => (
                  <Link
                    key={i}
                    to={drop.monster ? `/monsters/${drop.monster.id}` : '#'}
                    className="flex items-center gap-4 p-4 rounded-xl bg-surface-800/40 border border-surface-700/20 hover:border-primary-500/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center text-lg border border-red-500/20">
                      🐉
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-surface-100 group-hover:text-primary-300 transition-colors truncate">
                        {drop.monster?.name_th || 'Unknown'}
                      </p>
                      <p className="text-xs text-surface-200/40">
                        Lv. {drop.monster?.level || '?'} • {drop.monster?.name_en}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm font-bold text-amber-400">{drop.drop_rate}%</div>
                      <div className="text-xs text-surface-200/40 capitalize">{drop.condition}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <div className="mt-4 p-3 rounded-lg bg-primary-500/5 border border-primary-500/10">
              <p className="text-xs text-surface-200/50">
                💡 วิธีการได้มา: <span className="text-surface-200/80">{item.obtain_method}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {item.image_url && (
        <ImageModal 
          isOpen={isImageOpen} 
          imageUrl={item.image_url} 
          altText={item.name_th} 
          onClose={() => setIsImageOpen(false)} 
        />
      )}
    </div>
  );
}

function getSubTypeIcon(subType: string): string {
  const map: Record<string, string> = {
    sword: '🗡️', bow: '🏹', bowgun: '🔫', staff: '🪄', magic_device: '🔮',
    halberd: '🪓', katana: '⚔️', knuckle: '🥊', dual_sword: '⚔️',
    body_armor: '🛡️', weapon_crystal: '💎',
  };
  return map[subType] || '📦';
}
