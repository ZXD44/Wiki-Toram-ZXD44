import type { Monster } from '../types';

export const monsters: Monster[] = [
  {
    id: 1,
    name_en: "Colon",
    name_th: "โคลอน",
    type: "normal",
    level: 1,
    hp: 50,
    element: "earth",
    exp_reward: 2,
    note_th: "มอนสเตอร์ตัวแรกที่ผู้เล่นจะได้เจอ อ่อนแอต่อธาตุไฟ",
    locations: [{ map_name_en: "Rakau Plains", map_name_th: "ที่ราบราเคา" }],
    drops: [
      { item_id: 1, item_name_en: "Shortsword", item_name_th: "ดาบสั้น", drop_rate: 10.0, condition: "normal" }
    ],
  },
  {
    id: 2,
    name_en: "Boss Colon",
    name_th: "บอสโคลอน",
    type: "boss",
    level: 10,
    hp: 1200,
    element: "earth",
    exp_reward: 120,
    note_th: "บอสตัวแรกของเกม ระวังสกิลพุ่งชน",
    locations: [{ map_name_en: "Land Under Development", map_name_th: "พื้นที่กำลังพัฒนา" }],
    drops: [
      { item_id: 2, item_name_en: "Boss Colon Skin", item_name_th: "หนังบอสโคลอน", drop_rate: 35.0, condition: "normal" },
      { item_id: 9, item_name_en: "Boss Colon Crysta", item_name_th: "คริสตัลบอสโคลอน", drop_rate: 1.0, condition: "normal" }
    ],
  },
  {
    id: 3,
    name_en: "Gespenst",
    name_th: "เกสเพนสต์",
    type: "boss",
    level: 20,
    hp: 14000,
    element: "dark",
    exp_reward: 480,
    note_th: "บอสตัวใหญ่ ใช้เคียวเกี่ยว มีท่าฟาดพื้นที่เป็นวงกว้าง (AOE)",
    locations: [{ map_name_en: "Underground Channel", map_name_th: "ทางน้ำใต้ดิน" }],
    drops: [
      { item_id: 6, item_name_en: "Gespenst Crysta", item_name_th: "คริสตัลเกสเพนสต์", drop_rate: 1.0, condition: "normal" }
    ],
  },
  {
    id: 4,
    name_en: "Minotaur",
    name_th: "มิโนทอร์",
    type: "boss",
    level: 32,
    hp: 26000,
    element: "fire",
    exp_reward: 1100,
    note_th: "ต้องการการหลบหลีกที่ดี ระวังสกิลพุ่งชนและทุบพื้น (พังแตกได้ที่บริเวณเขาเป้าหมาย)",
    image_url: "/images/monsters/bosses/minotaur_boss.png",
    locations: [{ map_name_en: "Ruined Temple: Forbidden Hall", map_name_th: "วิหารซากปรักหักพัง: ห้องต้องห้าม" }],
    drops: [
      { item_id: 3, item_name_en: "Minotaur Skin", item_name_th: "หนังมิโนทอร์", drop_rate: 40.0, condition: "normal" },
      { item_id: 7, item_name_en: "Minotaur Horn", item_name_th: "เขามิโนทอร์", drop_rate: 15.0, condition: "break" }
    ],
  },
  {
    id: 5,
    name_en: "Brutal Dragon Decel",
    name_th: "มังกรคลุ้มคลั่งเดเซล",
    type: "boss",
    level: 40,
    hp: 40000,
    element: "earth",
    exp_reward: 2000,
    note_th: "มังกรที่ติดเชื้อมลทิน โจมตีแรงและมีตีเป็นวงกว้าง ควบคุมพื้นที่ได้ดี",
    locations: [
      { map_name_en: "Nisel Mountain: Top", map_name_th: "ยอดภูเขาไนเซล" }
    ],
    drops: [
      { item_id: 4, item_name_en: "Brutal Dragon Armor", item_name_th: "เกราะมังกรคลุ้มคลั่ง", drop_rate: 5.0, condition: "break" }
    ],
  },
  {
    id: 6,
    name_en: "Flare Volg",
    name_th: "แฟลร์โวลก์",
    type: "boss",
    level: 50,
    hp: 81000,
    element: "fire",
    exp_reward: 3800,
    note_th: "บอสมังกรไฟขนาดใหญ่ มีท่าพ่นไฟและทุบกรงเล็บ โจมตีเป็นเส้นตรงยาวมาก",
    locations: [{ map_name_en: "Fiery Volcano: Boss Map", map_name_th: "ภูเขาไฟเพลิง: ส่วนลึกสุด" }],
    drops: [
      { item_id: 5, item_name_en: "Volg Sword", item_name_th: "ดาบแฟลร์โวลก์", drop_rate: 4.0, condition: "break" }
    ],
  },
  {
    id: 7,
    name_en: "Coryn",
    name_th: "โคริน",
    type: "normal",
    level: 15,
    hp: 450,
    element: "light",
    exp_reward: 45,
    note_th: "มอนสเตอร์หน้าตาน่ารัก ตัวสีเขียว พบได้ทั่วไปบริเวณทุ่ง",
    locations: [{ map_name_en: "Douce Hamlet", map_name_th: "หมู่บ้านดูเซอ" }],
    drops: [],
  },
  {
    id: 8,
    name_en: "Boss Roga",
    name_th: "บอสโรกา",
    type: "boss",
    level: 62,
    hp: 151000,
    element: "neutral",
    exp_reward: 9200,
    note_th: "บอสกอริลลายักษ์ พละกำลังมหาศาล สกิลทุบพื้นทำให้สลบได้",
    locations: [
      { map_name_en: "Saham Underground Cave: Deepest Part", map_name_th: "ถ้ำใต้ดินซาฮาม: ส่วนลึกสุด" }
    ],
    drops: [
      { item_id: 8, item_name_en: "Boss Roga Crysta", item_name_th: "คริสตัลบอสโรกา", drop_rate: 1.0, condition: "normal" }
    ],
  },
];
