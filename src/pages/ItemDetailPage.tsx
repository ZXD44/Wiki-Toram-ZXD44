import { useParams, Link } from 'react-router-dom';
import { items } from '../data/items';
import { monsters } from '../data/monsters';
import { getItemSubTypeIcon, getSubTypeThai, getStatThai } from '../components/GameBadges';

export default function ItemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const item = items.find(i => i.id === Number(id));

  if (!item) {
    return (
      <div className="min-h-screen pt-14 flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-3">❓</div>
          <h2 className="text-xl font-bold text-surface-100 mb-2">ไม่พบไอเทม</h2>
          <p className="text-muted text-sm mb-4">ไอเทม ID: {id} ไม่มีในฐานข้อมูล</p>
          <Link to="/items" className="text-link text-sm">← กลับไปรายการไอเทม</Link>
        </div>
      </div>
    );
  }

  const dropsFrom = item.drops_from?.map(d => {
    const monster = monsters.find(m => m.id === d.monster_id);
    return { ...d, monster };
  }) || [];

  return (
    <div className="min-h-screen pt-14">
      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted mb-4">
          <Link to="/" className="text-link">หน้าหลัก</Link>
          <span>/</span>
          <Link to="/items" className="text-link">ไอเทม</Link>
          <span>/</span>
          <span className="text-surface-100">{item.name_th}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Header */}
            <div className="db-card">
              <div className="db-card-header">{getItemSubTypeIcon(item.sub_type)} {item.name_th}</div>
              <div className="p-4">
                <table className="db-table">
                  <tbody>
                    <tr>
                      <td className="text-primary-600 font-medium w-32">ชื่อไทย</td>
                      <td>{item.name_th}</td>
                    </tr>
                    {item.name_en && (
                      <tr>
                        <td className="text-primary-600 font-medium">ชื่ออังกฤษ</td>
                        <td>{item.name_en}</td>
                      </tr>
                    )}
                    <tr>
                      <td className="text-primary-600 font-medium">ประเภท</td>
                      <td>{getSubTypeThai(item.sub_type)}</td>
                    </tr>
                    <tr>
                      <td className="text-primary-600 font-medium">เลเวล</td>
                      <td>{item.level_req}</td>
                    </tr>
                    <tr>
                      <td className="text-primary-600 font-medium">ราคาขาย</td>
                      <td className="text-primary-500 font-medium">{item.sell_price.toLocaleString()} spina</td>
                    </tr>
                    <tr>
                      <td className="text-primary-600 font-medium">เทรด</td>
                      <td>{item.is_tradeable ? <span className="text-green-400">✅ เทรดได้</span> : <span className="text-red-400">❌ เทรดไม่ได้</span>}</td>
                    </tr>
                    <tr>
                      <td className="text-primary-600 font-medium">วิธีการได้มา</td>
                      <td className="text-sm">{item.obtain_method}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Stats */}
            {item.stats.length > 0 && (
              <div className="db-card">
                <div className="db-card-header">📊 สเตตัส</div>
                <div className="overflow-x-auto">
                  <table className="db-table">
                    <thead>
                      <tr>
                        <th>สเตตัส</th>
                        <th>ค่า</th>
                        <th>ค่าสูงสุด</th>
                        <th>ประเภท</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.stats.map((stat, i) => (
                        <tr key={i}>
                          <td className="font-medium">{getStatThai(stat.stat_name)}</td>
                          <td className="text-accent-400">{stat.base_value}</td>
                          <td>{stat.max_value || '-'}</td>
                          <td className="text-xs text-muted">{stat.stat_type === 'percent' ? ' (%)' : 'หน่วย'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Drop Sources */}
            <div className="db-card">
              <div className="db-card-header">🎯 แหล่งที่ได้มา</div>
              {dropsFrom.length === 0 ? (
                <div className="p-4 text-muted text-sm">ไม่มีข้อมูลแหล่งดรอป</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="db-table">
                    <thead>
                      <tr>
                        <th>มอนสเตอร์</th>
                        <th>อัตรา</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dropsFrom.map((drop, i) => (
                        <tr key={i}>
                          <td>
                            <Link
                              to={drop.monster ? `/monsters/${drop.monster.id}` : '#'}
                              className="font-medium"
                            >
                              {drop.monster?.name_th || 'Unknown'}
                            </Link>
                            <div className="text-[10px] text-surface-700 dark:text-surface-400">
                              Lv. {drop.monster?.level || '?'}
                            </div>
                          </td>
                          <td>
                            <span className={`font-bold text-sm ${
                              drop.drop_rate <= 5 ? 'text-red-400' : drop.drop_rate <= 15 ? 'text-accent-400' : 'text-green-400'
                            }`}>
                              {drop.drop_rate}%
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
        </div>
      </div>
    </div>
  );
}
