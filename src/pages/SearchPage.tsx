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
        i.name_en?.toLowerCase().includes(q) || 
        i.sub_type.toLowerCase().includes(q)
      ),
      monsters: monsters.filter(m => 
        m.name_th.toLowerCase().includes(q) || 
        m.name_en?.toLowerCase().includes(q) ||
        m.type.toLowerCase().includes(q)
      ),
      maps: maps.filter(m => 
        m.name_th.toLowerCase().includes(q) || 
        m.name_en?.toLowerCase().includes(q) ||
        m.region.toLowerCase().includes(q)
      ),
      skills: skills.filter(s => 
        s.name_th.toLowerCase().includes(q) || 
        s.name_en?.toLowerCase().includes(q) ||
        s.skill_tree_th.toLowerCase().includes(q)
      ),
    };
  }, [query]);

  const totalResults = results.items.length + results.monsters.length + results.maps.length + results.skills.length;

  return (
    <div className="min-h-screen pt-14">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-xs text-muted mb-4">
            <Link to="/" className="text-link">หน้าหลัก</Link>
            <span>/</span>
            <span className="text-surface-700 dark:text-surface-300">ผลการค้นหา</span>
          </nav>
          
          <h1 className="text-2xl font-bold">
            🔍 ผลลัพธ์สำหรับ: <span className="text-primary-600">"{query}"</span>
          </h1>
          <p className="text-sm text-muted mt-1">
            พบข้อมูลทั้งหมด {totalResults} รายการ
          </p>
        </div>

        {totalResults === 0 ? (
          <div className="db-card p-12 text-center">
            <div className="text-5xl mb-4">🏮</div>
            <h3 className="text-lg font-semibold">ไม่พบข้อมูลที่ค้นหา</h3>
            <p className="text-sm text-muted mt-2 max-w-sm mx-auto">
              ลองใช้คำค้นหาอื่น หรือตรวจสอบตัวสะกดใหม่อีกครั้งครับ (เช่น ค้นหาเป็นภาษาอังกฤษ หรือพิมพ์แค่บางส่วนของชื่อ)
            </p>
            <Link to="/" className="inline-block mt-6 text-sm text-link">
              ← กลับไปหน้าหลัก
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            
            {/* มอนสเตอร์ */}
            {results.monsters.length > 0 && (
              <div className="db-card overflow-hidden">
                <div className="db-card-header flex items-center gap-2">
                  <span>👾 มอนสเตอร์ ({results.monsters.length})</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="db-table">
                    <thead>
                      <tr>
                        <th>ชื่อ</th>
                        <th>Lv</th>
                        <th>ประเภท</th>
                        <th>HP</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.monsters.map(monster => (
                        <tr key={`mon-${monster.id}`}>
                          <td>
                            <Link to={`/monsters/${monster.id}`} className="font-medium">
                              {monster.name_th}
                            </Link>
                            {monster.name_en && <span className="text-[10px] text-muted ml-2">{monster.name_en}</span>}
                          </td>
                          <td className="font-bold">{monster.level}</td>
                          <td>
                            <span className={`badge ${
                              monster.type === 'boss' ? 'badge-boss' : monster.type === 'mini_boss' ? 'badge-mini-boss' : 'badge-normal'
                            }`}>
                              {monster.type === 'boss' ? 'บอส' : monster.type === 'mini_boss' ? 'มินิบอส' : 'ทั่วไป'}
                            </span>
                          </td>
                          <td className="text-red-400 text-xs">{monster.hp.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ไอเทม */}
            {results.items.length > 0 && (
              <div className="db-card overflow-hidden">
                <div className="db-card-header flex items-center gap-2">
                  <span>⚔️ ไอเทม ({results.items.length})</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="db-table">
                    <thead>
                      <tr>
                        <th>ชื่อ</th>
                        <th>Lv req.</th>
                        <th>ราคาขาย</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.items.map(item => (
                        <tr key={`item-${item.id}`}>
                          <td>
                            <Link to={`/items/${item.id}`} className="font-medium">
                              {item.name_th}
                            </Link>
                            {item.name_en && <span className="text-[10px] text-muted ml-2">{item.name_en}</span>}
                          </td>
                          <td>{item.level_req}</td>
                          <td className="text-primary-500 font-medium">{item.sell_price.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* แผนที่ & อื่นๆ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.maps.length > 0 && (
                <div className="db-card overflow-hidden">
                  <div className="db-card-header">🗺️ แผนที่ ({results.maps.length})</div>
                  <div className="p-2 space-y-1">
                    {results.maps.map(map => (
                      <Link key={`map-${map.id}`} to="/maps" className="block p-3 rounded hover:bg-surface-100 transition-colors">
                        <p className="font-medium text-sm">{map.name_th}</p>
                        <p className="text-[10px] text-muted uppercase">{map.region}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {results.skills.length > 0 && (
                <div className="db-card overflow-hidden">
                  <div className="db-card-header">✨ สกิล ({results.skills.length})</div>
                  <div className="p-2 space-y-1">
                    {results.skills.map(skill => (
                      <Link key={`skill-${skill.id}`} to="/skills" className="block p-3 rounded hover:bg-surface-100 transition-colors">
                        <p className="font-medium text-sm">{skill.name_th}</p>
                        <p className="text-[10px] text-muted uppercase">{skill.skill_tree_th}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
