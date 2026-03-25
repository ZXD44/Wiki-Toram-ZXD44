import { useState, useMemo } from 'react';
import { skills } from '../data/skills';

export default function SkillsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [treeFilter, setTreeFilter] = useState<string>('all');

  // ข้อมูลสายสกิลที่ไม่ซ้ำกัน
  const skillTrees = useMemo(() => {
    const trees = new Set(skills.map(s => s.skill_tree_th));
    return ['all', ...Array.from(trees)];
  }, []);

  const filteredSkills = useMemo(() => {
    let result = skills;
    if (treeFilter !== 'all') {
      result = result.filter(s => s.skill_tree_th === treeFilter);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(s => 
        s.name_en.toLowerCase().includes(q) || 
        s.name_th.includes(q) || 
        s.description_th.includes(q)
      );
    }
    return result;
  }, [searchQuery, treeFilter]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 animate-slide-up">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-100">
            ✨ สกิล (Skill Trees)
          </h1>
          <p className="text-surface-200/50 mt-2">
            ข้อมูลสกิลแต่ละสาย และความสามารถในเกม Toram Online
          </p>
        </div>

        <div className="mb-8 space-y-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex flex-col sm:flex-row gap-3 max-w-3xl">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ค้นหาสกิล..."
                className="w-full bg-surface-800/60 border border-surface-700/50 rounded-xl px-4 py-3 pl-11 text-sm text-surface-100 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20"
              />
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-200/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <select
              value={treeFilter}
              onChange={(e) => setTreeFilter(e.target.value)}
              className="bg-surface-800/60 border border-surface-700/50 rounded-xl px-4 py-3 text-sm text-surface-100 focus:outline-none focus:border-primary-500/50 cursor-pointer min-w-[200px]"
            >
              <option value="all">สายสกิลทั้งหมด</option>
              {skillTrees.filter(t => t !== 'all').map(tree => (
                <option key={tree} value={tree}>{tree}</option>
              ))}
            </select>
          </div>
        </div>

        {filteredSkills.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-surface-200/70">ไม่พบสกิล</h3>
            <p className="text-sm text-surface-200/40 mt-1">ลองเปลี่ยนคำค้นหาหรือตัวกรองดูอีกครั้ง</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 stagger-children">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="group p-5 rounded-2xl glass glass-hover border border-surface-700/20 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/10 flex items-center justify-center text-xl border border-indigo-500/20">
                      ✨
                    </div>
                    <div>
                      <h3 className="font-bold text-surface-100 text-lg group-hover:text-primary-400 transition-colors">
                        {skill.name_th}
                      </h3>
                      <p className="text-xs text-surface-200/40">{skill.name_en}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-primary-500/10 text-primary-300 border border-primary-500/20">
                      MP: {skill.mp_cost}
                    </span>
                  </div>
                </div>

                <div className="mt-3">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-surface-800/80 text-surface-200/60 mb-2 border border-surface-700/50">
                    {skill.skill_tree_th}
                  </span>
                  <p className="text-sm text-surface-200/80 leading-relaxed font-medium">
                    {skill.description_th}
                  </p>
                  <p className="text-xs text-surface-200/40 mt-2 italic">
                    {skill.description_en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
