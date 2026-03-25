import { useSearchParams, Link } from 'react-router-dom';
import { useMemo } from 'react';
import { items } from '../data/items';
import { monsters } from '../data/monsters';
import { maps } from '../data/maps';
import { skills } from '../data/skills';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = useMemo(() => {
    if (!query.trim()) return { items: [], monsters: [], maps: [], skills: [] };
    const q = query.toLowerCase();

    return {
      items: items.filter(i => 
        i.name_th.toLowerCase().includes(q) || 
        i.name_en.toLowerCase().includes(q) || 
        i.sub_type.toLowerCase().includes(q)
      ),
      monsters: monsters.filter(m => 
        m.name_th.toLowerCase().includes(q) || 
        m.name_en.toLowerCase().includes(q) ||
        m.type.toLowerCase().includes(q)
      ),
      maps: maps.filter(m => 
        m.name_th.toLowerCase().includes(q) || 
        m.name_en.toLowerCase().includes(q) ||
        m.region.toLowerCase().includes(q)
      ),
      skills: skills.filter(s => 
        s.name_th.toLowerCase().includes(q) || 
        s.name_en.toLowerCase().includes(q) ||
        s.skill_tree_th.toLowerCase().includes(q)
      ),
    };
  }, [query]);

  const totalResults = results.items.length + results.monsters.length + results.maps.length + results.skills.length;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 animate-slide-up">
          <h1 className="text-3xl font-bold text-surface-100">
            🔍 ผลลัพธ์การค้นหา: <span className="text-primary-400">"{query}"</span>
          </h1>
          <p className="text-surface-200/50 mt-2">
            พบทั้งหมด {totalResults} รายการ จากทุกหมวดหมู่
          </p>
        </div>

        {totalResults === 0 ? (
          <div className="text-center py-20 animate-fade-in bg-surface-900/30 rounded-2xl glass">
            <div className="text-5xl mb-4">🥲</div>
            <h3 className="text-lg font-semibold text-surface-200/70">ไม่พบข้อมูลที่ตรงกับคำค้นหา</h3>
            <p className="text-sm text-surface-200/40 mt-1">ลองใช้คำที่สั้นลง หรือค้นหาเป็นภาษาอังกฤษ</p>
          </div>
        ) : (
          <div className="space-y-12 stagger-children">
            
            {/* ไอเทม */}
            {results.items.length > 0 && (
              <section className="animate-slide-up">
                <div className="flex items-center gap-3 mb-6 border-b border-surface-700/30 pb-3">
                  <span className="text-2xl">⚔️</span>
                  <h2 className="text-xl font-bold text-surface-100">ไอเทม ({results.items.length})</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {results.items.map(item => (
                    <Link key={`item-${item.id}`} to={`/items/${item.id}`} className="p-4 rounded-xl glass glass-hover card-glow flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-surface-800/80 flex items-center justify-center text-xl shrink-0 overflow-hidden">
                        {item.image_url ? <img src={item.image_url} alt="" className="w-full h-full object-cover" /> : '📦'}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-surface-100 truncate">{item.name_th}</h4>
                        <p className="text-xs text-primary-400">Lv. {item.level_req}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* มอนสเตอร์ */}
            {results.monsters.length > 0 && (
              <section className="animate-slide-up">
                <div className="flex items-center gap-3 mb-6 border-b border-surface-700/30 pb-3">
                  <span className="text-2xl">👾</span>
                  <h2 className="text-xl font-bold text-surface-100">มอนสเตอร์ ({results.monsters.length})</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {results.monsters.map(monster => (
                    <Link key={`mon-${monster.id}`} to={`/monsters/${monster.id}`} className="p-4 rounded-xl glass glass-hover card-glow flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-surface-800/80 flex items-center justify-center text-xl shrink-0 overflow-hidden">
                        {monster.image_url ? <img src={monster.image_url} alt="" className="w-full h-full object-cover" /> : (monster.type === 'boss' ? '🐉' : '👾')}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-surface-100 truncate">{monster.name_th}</h4>
                        <p className="text-xs text-red-400">Lv. {monster.level}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* แผนที่ */}
            {results.maps.length > 0 && (
              <section className="animate-slide-up">
                <div className="flex items-center gap-3 mb-6 border-b border-surface-700/30 pb-3">
                  <span className="text-2xl">🗺️</span>
                  <h2 className="text-xl font-bold text-surface-100">แผนที่ ({results.maps.length})</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {results.maps.map(map => (
                    <Link key={`map-${map.id}`} to={`/maps`} className="p-4 rounded-xl glass glass-hover card-glow flex flex-col justify-center">
                      <h4 className="font-semibold text-surface-100 truncate">{map.name_th}</h4>
                      <p className="text-xs text-surface-200/50 mt-1">{map.region}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* สกิล */}
            {results.skills.length > 0 && (
              <section className="animate-slide-up">
                <div className="flex items-center gap-3 mb-6 border-b border-surface-700/30 pb-3">
                  <span className="text-2xl">✨</span>
                  <h2 className="text-xl font-bold text-surface-100">สกิล ({results.skills.length})</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {results.skills.map(skill => (
                    <Link key={`skill-${skill.id}`} to={`/skills`} className="p-4 rounded-xl glass glass-hover card-glow">
                      <h4 className="font-semibold text-surface-100">{skill.name_th}</h4>
                      <p className="text-xs text-primary-400 mt-1">{skill.skill_tree_th}</p>
                      <p className="text-sm text-surface-200/70 mt-2 truncate">{skill.description_th}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

          </div>
        )}
      </div>
    </div>
  );
}
