import { useParams, Link } from 'react-router-dom';
import { monsters } from '../data/monsters';

export default function MonsterDetailPage() {
  const { id } = useParams<{ id: string }>();
  const monster = monsters.find(m => m.id === Number(id));

  if (!monster) {
    return (
      <div className="min-h-screen pt-14 flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-3">❓</div>
          <h2 className="text-xl font-bold text-surface-100 mb-2">ไม่พบมอนสเตอร์</h2>
          <p className="text-muted text-sm mb-4">Monster ID: {id} ไม่มีในฐานข้อมูล</p>
          <Link to="/monsters" className="text-link text-sm">← กลับไปรายการมอนสเตอร์</Link>
        </div>
      </div>
    );
  }

  const typeIcon = monster.type === 'boss' ? '🐉' : monster.type === 'mini_boss' ? '⚡' : '👾';

  return (
    <div className="min-h-screen pt-14">
      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted mb-4">
          <Link to="/" className="text-link">หน้าหลัก</Link>
          <span>/</span>
          <Link to="/monsters" className="text-link">มอนสเตอร์</Link>
          <span>/</span>
          <span className="text-surface-100">{monster.name_th}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Header */}
            <div className="db-card">
              <div className="db-card-header">{typeIcon} {monster.name_th}</div>
              <div className="p-4">
                <table className="db-table">
                  <tbody>
                    <tr>
                      <td className="text-primary-600 font-medium w-32">ชื่อไทย</td>
                      <td>{monster.name_th}</td>
                    </tr>
                    {monster.name_en && (
                      <tr>
                        <td className="text-primary-600 font-medium">ชื่ออังกฤษ</td>
                        <td>{monster.name_en}</td>
                      </tr>
                    )}
                    <tr>
                      <td className="text-primary-600 font-medium">ประเภท</td>
                      <td>
                        <span className={`badge ${
                          monster.type === 'boss' ? 'badge-boss' : monster.type === 'mini_boss' ? 'badge-mini-boss' : 'badge-normal'
                        }`}>
                          {monster.type === 'boss' ? 'บอส' : monster.type === 'mini_boss' ? 'มินิบอส' : 'ปกติ'}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-primary-600 font-medium">เลเวล</td>
                      <td className="font-bold">{monster.level}</td>
                    </tr>
                    <tr>
                      <td className="text-primary-600 font-medium">HP</td>
                      <td className="text-red-400 font-bold">{monster.hp.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td className="text-primary-600 font-medium">EXP</td>
                      <td className="text-green-400 font-bold">{monster.exp_reward.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td className="text-primary-600 font-medium">ธาตุ</td>
                      <td>{getElementEmoji(monster.element)} {getElementThai(monster.element)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Drop Table */}
            <div className="db-card">
              <div className="db-card-header">🎁 ตารางดรอป ({monster.drops.length} ไอเทม)</div>
              {monster.drops.length === 0 ? (
                <div className="p-4 text-muted text-sm">ยังไม่มีข้อมูลดรอป</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="db-table">
                    <thead>
                      <tr>
                        <th>ไอเทม</th>
                        <th>อัตราดรอป</th>
                        <th>เงื่อนไข</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monster.drops.map((drop, i) => (
                        <tr key={i}>
                          <td>
                            <Link to={`/items/${drop.item_id}`} className="font-medium">
                              {drop.item_name_th}
                            </Link>
                            {drop.item_name_en && (
                              <span className="text-xs text-muted ml-2">{drop.item_name_en}</span>
                            )}
                          </td>
                          <td>
                            <span className={`font-bold ${
                              drop.drop_rate <= 5 ? 'text-red-400' : drop.drop_rate <= 15 ? 'text-accent-400' : 'text-green-400'
                            }`}>
                              {drop.drop_rate}%
                            </span>
                          </td>
                          <td className="text-xs">
                            <span className={`badge ${
                              drop.condition === 'break' ? 'badge-boss' : drop.condition === 'rare' ? 'bg-purple-500/15 text-purple-400' : 'badge-normal'
                            }`}>
                              {drop.condition === 'break' ? 'ทุบ' : drop.condition === 'rare' ? 'หายาก' : 'ปกติ'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Locations */}
            <div className="db-card">
              <div className="db-card-header">📍 ตำแหน่งที่พบ</div>
              <div className="p-3 space-y-2">
                {monster.locations.map((loc, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded text-sm" style={{ backgroundColor: 'var(--color-table-row)' }}>
                    <span>🗺️</span>
                    <div>
                      <p className="font-medium">{loc.map_name_th}</p>
                      {loc.map_name_en && (
                        <p className="text-[11px] text-muted">{loc.map_name_en}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            {monster.note_th && (
              <div className="db-card">
                <div className="db-card-header">📝 บันทึก</div>
                <div className="p-4">
                  <p className="text-sm text-surface-700 leading-relaxed">{monster.note_th}</p>
                </div>
              </div>
            )}
          </div>
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
