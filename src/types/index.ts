export interface ItemStat {
  stat_name: string;
  base_value: number;
  max_value?: number;
  stat_type: 'flat' | 'percent';
}

export interface Item {
  id: number;
  name_en?: string;
  name_th: string;
  type: 'weapon' | 'armor' | 'additional' | 'special' | 'crystal' | 'material' | 'consumable';
  sub_type: string;
  level_req: number;
  sell_price: number;
  image_url?: string;
  is_tradeable: boolean;
  obtain_method: string;
  stats: ItemStat[];
  drops_from?: { monster_id: number; drop_rate: number; condition: string }[];
}

export interface Monster {
  id: number;
  name_en?: string;
  name_th: string;
  type: 'normal' | 'mini_boss' | 'boss' | 'event_boss';
  level: number;
  hp: number;
  element: 'neutral' | 'fire' | 'water' | 'wind' | 'earth' | 'light' | 'dark';
  exp_reward: number;
  image_url?: string;
  note_th?: string;
  locations: { map_name_en?: string; map_name_th: string }[];
  drops: { item_id: number; item_name_en?: string; item_name_th: string; drop_rate: number; condition: string }[];
}

export interface Skill {
  id: number;
  skill_tree: string;
  skill_tree_th: string;
  name_en?: string;
  name_th: string;
  type: 'active' | 'passive' | 'support';
  max_level: number;
  mp_cost: number;
  description_en?: string;
  description_th: string;
}

export interface MapArea {
  id: number;
  name_en?: string;
  name_th: string;
  region: string;
  level_range_min: number;
  level_range_max: number;
}

export type ElementType = Monster['element'];
export type MonsterType = Monster['type'];
export type ItemType = Item['type'];
