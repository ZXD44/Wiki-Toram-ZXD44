import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t mt-auto" style={{ backgroundColor: 'var(--color-navbar)', borderColor: 'var(--color-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF-vjKGoWQm2h6Df8QwI5-TH4lDSWAl9XlsA&s" alt="Toram Logo" className="w-7 h-7 rounded-lg object-cover" />
              <span className="text-sm font-bold text-primary-600">Wiki Toram Online TH</span>
            </div>
            <p className="text-xs text-muted leading-relaxed max-w-xs">
              ฐานข้อมูลเกม Toram Online ภาษาไทย<br />
              สร้างโดยชุมชนผู้เล่นชาวไทย เพื่อผู้เล่นชาวไทย
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-bold text-muted uppercase tracking-wider mb-3">เมนูลัด</h4>
            <div className="space-y-1.5">
              <Link to="/items" className="block text-xs text-muted hover:text-primary-600 transition-colors">⚔️ ไอเทมทั้งหมด</Link>
              <Link to="/monsters" className="block text-xs text-muted hover:text-primary-600 transition-colors">👾 มอนสเตอร์ทั้งหมด</Link>
              <Link to="/maps" className="block text-xs text-muted hover:text-primary-600 transition-colors">🗺️ แผนที่ทั้งหมด</Link>
            </div>
          </div>

          {/* Credits */}
          <div>
            <h4 className="text-[11px] font-bold text-muted uppercase tracking-wider mb-3">เกี่ยวกับ</h4>
            <ul className="space-y-1.5 text-xs text-muted">
              <li>👨‍💻 สร้างโดย <span className="text-primary-600 font-medium">ZirconX</span></li>
              <li>สามารถส่งข้อมูลต่างๆได้ที่ DISCORD : <span className="text-primary-600 font-medium">zx1150 #5199</span></li>
              <li>Toram Online © ASOBIMO, Inc.</li>
              <li className="text-surface-300 text-[10px] pt-1">เว็บนี้ไม่ได้มีส่วนเกี่ยวข้องกับ ASOBIMO</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t text-center text-[10px] text-surface-300 space-y-1" style={{ borderColor: 'var(--color-border)' }}>
          <div>© 2026 Wiki Toram Online TH</div>
          <div>Crafted with 💜 by <span className="text-primary-500 font-medium">ZirconX</span></div>
        </div>
      </div>
    </footer>
  );
}
