import type { ElementType, MonsterType, ItemType } from '../types';

export const elementConfig: Record<ElementType, { emoji: string; label: string; color: string }> = {
  fire:    { emoji: '🔥', label: 'ไฟ',   color: 'text-element-fire' },
  water:   { emoji: '💧', label: 'น้ำ',   color: 'text-element-water' },
  wind:    { emoji: '🌪️', label: 'ลม',   color: 'text-element-wind' },
  earth:   { emoji: '🌍', label: 'ดิน',   color: 'text-element-earth' },
  light:   { emoji: '✨', label: 'แสง',  color: 'text-element-light' },
  dark:    { emoji: '🌑', label: 'มืด',   color: 'text-element-dark' },
  neutral: { emoji: '⚪', label: 'ไร้ธาตุ', color: 'text-element-neutral' },
};



export function ElementBadge({ element }: { element: ElementType }) {
  const config = elementConfig[element];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-surface-800/80 border border-surface-700/50 ${config.color}`}>
      <span>{config.emoji}</span>
      {config.label}
    </span>
  );
}

export const monsterTypeConfig: Record<MonsterType, { label: string; color: string; bg: string }> = {
  normal:     { label: 'ปกติ',       color: 'text-surface-200/70', bg: 'bg-surface-700/30' },
  mini_boss:  { label: 'มินิบอส',    color: 'text-amber-400',      bg: 'bg-amber-500/10' },
  boss:       { label: 'บอส',        color: 'text-red-400',        bg: 'bg-red-500/10' },
  event_boss: { label: 'อีเวนท์บอส', color: 'text-purple-400',     bg: 'bg-purple-500/10' },
};

export function MonsterTypeBadge({ type }: { type: MonsterType }) {
  const config = monsterTypeConfig[type];
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${config.color} ${config.bg} border border-current/10`}>
      {config.label}
    </span>
  );
}

export const itemTypeConfig: Record<ItemType, { label: string; icon: string; color: string }> = {
  weapon:     { label: 'อาวุธ',        icon: '⚔️', color: 'text-red-400' },
  armor:      { label: 'เกราะ',        icon: '🛡️', color: 'text-blue-400' },
  additional: { label: 'เสริม',        icon: '💍', color: 'text-green-400' },
  special:    { label: 'พิเศษ',        icon: '🎭', color: 'text-purple-400' },
  crystal:    { label: 'คริสตัล',      icon: '💎', color: 'text-cyan-400' },
  material:   { label: 'วัตถุดิบ',     icon: '📦', color: 'text-amber-400' },
  consumable: { label: 'ใช้แล้วหมด',   icon: '🧪', color: 'text-green-400' },
};

export function ItemTypeBadge({ type }: { type: ItemType }) {
  const config = itemTypeConfig[type];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-surface-800/80 border border-surface-700/50 ${config.color}`}>
      <span>{config.icon}</span>
      {config.label}
    </span>
  );
}

export function StatBar({ label, value, maxValue, type }: { label: string; value: number; maxValue?: number; type: 'flat' | 'percent' }) {
  const displayValue = type === 'percent' ? `${value}%` : value.toLocaleString();
  const barPercent = maxValue ? (value / maxValue) * 100 : Math.min(value / 5, 100);

  return (
    <div className="flex items-center gap-2 sm:gap-3 text-sm group w-full">
      <span className="w-24 sm:w-32 text-surface-200/60 shrink-0 text-[11px] sm:text-xs font-medium tracking-wide truncate" title={label}>{label}</span>
      <div className="flex-1 h-2 bg-surface-800/60 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-400 transition-all duration-700 ease-out group-hover:brightness-125"
          style={{ width: `${Math.min(barPercent, 100)}%` }}
        />
      </div>
      <span className="text-surface-100 font-semibold w-12 sm:w-16 text-right tabular-nums text-xs sm:text-sm">{displayValue}</span>
      {maxValue && (
        <span className="text-surface-200/40 text-[10px] sm:text-xs w-12 sm:w-16 text-right truncate">max {maxValue}</span>
      )}
    </div>
  );
}

export function formatHP(hp: number): string {
  if (hp >= 1_000_000) return `${(hp / 1_000_000).toFixed(1)}M`;
  if (hp >= 1_000) return `${(hp / 1_000).toFixed(0)}K`;
  return hp.toString();
}

export function formatNumber(num: number): string {
  return num.toLocaleString('th-TH');
}

export function getItemSubTypeIcon(subType: string): string {
  const map: Record<string, string> = {
    sword: '🗡️', bow: '🏹', bowgun: '🔫', staff: '🪄', magic_device: '🔮',
    halberd: '🪓', katana: '⚔️', knuckle: '🥊', dual_sword: '⚔️',
    body_armor: '🛡️', weapon_crystal: '💎', armor_crystal: '💎',
    mob_drop: '📦', boss_drop: '📦',
    wood: '🪵', leaf: '🌿', stone: '🪨', animal_skin: '🐾',
    additional_gear: '🎩', shield: '🛡️', teleport: '🗺️',
  };
  return map[subType] || '📦';
}

export function getSubTypeThai(subType: string): string {
  const map: Record<string, string> = {
    sword: 'ดาบ', bow: 'ธนู', bowgun: 'หน้าไม้', staff: 'ไม้เท้า', magic_device: 'เครื่องราง',
    halberd: 'หอก', katana: 'ดาบซามูไร', knuckle: 'สนับมือ', dual_sword: 'ดาบสเปเชียล',
    body_armor: 'ชุดเกราะ', weapon_crystal: 'คริสตัลอาวุธ', armor_crystal: 'คริสตัลชุดเกราะ',
    mob_drop: 'วัตถุดิบดรอป', boss_drop: 'วัตถุดิบบอส',
    wood: 'ไม้', leaf: 'ใบไม้', stone: 'หิน', animal_skin: 'หนังสัตว์',
    additional_gear: 'อุปกรณ์เสริม', shield: 'โล่', teleport: 'วาร์ป',
    // Main Types fallback
    weapon: 'อาวุธ', armor: 'เกราะ', additional: 'อุปกรณ์เสริม', crystal: 'คริสตัล', material: 'วัตถุดิบ', consumable: 'ของใช้',
  };
  return map[subType] || subType;
}

export function getStatThai(stat: string): string {
  const map: Record<string, string> = {
    'ATK': 'พลังโจมตี (ATK)',
    'MATK': 'โจมตีเวทย์ (MATK)',
    'DEF': 'พลังป้องกัน (DEF)',
    'MDEF': 'ต้านทานเวทย์ (MDEF)',
    'Max HP': 'HP สูงสุด',
    'Max MP': 'MP สูงสุด',
    'Critical Rate': 'อัตราคริ',
    'Critical Damage': 'ความแรงคริ',
    'ASPD': 'ความเร็วโจมตี',
    'CSPD': 'ความเร็วร่าย',
    'Accuracy': 'ความแม่นยำ',
    'Evasion': 'การหลบหลีก',
    'Stability': 'ความเสถียร',
    'Physical Resistance': 'ต้านทานกายภาพ',
    'Magical Resistance': 'ต้านทานเวทย์',
  };
  return map[stat] || stat;
}
