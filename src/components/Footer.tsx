export default function Footer() {
  return (
    <footer className="border-t border-surface-700/30 bg-surface-950/80 backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-sm font-black text-white">
                T
              </div>
              <span className="text-lg font-bold gradient-text">Wiki Toram TH</span>
            </div>
            <p className="text-sm text-surface-200/50 leading-relaxed max-w-xs">
              ฐานข้อมูลเกม Toram Online ภาษาไทย สร้างโดยชุมชนผู้เล่นชาวไทย เพื่อผู้เล่นชาวไทย
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-surface-100 mb-4 uppercase tracking-wider">เมนูลัด</h4>
            <ul className="space-y-2.5 text-sm text-surface-200/50">
              <li><a href="/items" className="hover:text-primary-400 transition-colors">⚔️ ไอเทมทั้งหมด</a></li>
              <li><a href="/monsters" className="hover:text-primary-400 transition-colors">👾 มอนสเตอร์ทั้งหมด</a></li>
            </ul>
          </div>

          {/* Credits */}
          <div>
            <h4 className="text-sm font-semibold text-surface-100 mb-4 uppercase tracking-wider">เกี่ยวกับ</h4>
            <ul className="space-y-2.5 text-sm text-surface-200/50">
              <li className="flex items-center gap-2">
                <span className="text-primary-400">👨‍💻</span>
                <span>สร้างโดย <span className="font-semibold text-primary-400">ZirconX</span></span>
              </li>
              <li>ข้อมูลอ้างอิงจาก Coryn Club</li>
              <li>Toram Online © ASOBIMO, Inc.</li>
              <li className="text-surface-200/30 text-xs pt-2">เว็บนี้ไม่ได้มีส่วนเกี่ยวข้องกับ ASOBIMO</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-surface-700/20 text-center text-xs text-surface-200/30">
          © 2024-2026 Wiki Toram TH • Made with 💜 by <span className="text-primary-400/60 font-medium">ZirconX</span>
        </div>
      </div>
    </footer>
  );
}
