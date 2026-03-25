import type { Skill } from '../types';

export const skills: Skill[] = [
  // Blade Skills
  {
    id: 1,
    skill_tree: "Blade Skills",
    skill_tree_th: "สกิลดาบ (ดาบเดี่ยว/ดาบใหญ่)",
    name_en: "Hard Hit",
    name_th: "ฮาร์ดฮิต (Hard Hit)",
    type: "active",
    max_level: 10,
    mp_cost: 100,
    description_en: "A strong blow. Flinches the target. Requires a Sword.",
    description_th: "โจมตีอย่างรุนแรง มีโอกาสทำให้เป้าหมายชะงัก (Flinch) หากสวมใส่ดาบเดี่ยวหรือดาบใหญ่"
  },
  {
    id: 2,
    skill_tree: "Blade Skills",
    skill_tree_th: "สกิลดาบ (ดาบเดี่ยว/ดาบใหญ่)",
    name_en: "Astute",
    name_th: "แอสทิวต์ (Astute)",
    type: "active",
    max_level: 10,
    mp_cost: 200,
    description_en: "A sharp blow. Increases Critical Rate upon use.",
    description_th: "ฟาดฟันอย่างเฉียบคม เมื่อใช้งานจะเพิ่ม Critical Rate ให้กับผู้ใช้ช่วงเวลาหนึ่ง"
  },
  {
    id: 3,
    skill_tree: "Blade Skills",
    skill_tree_th: "สกิลดาบ (ดาบเดี่ยว/ดาบใหญ่)",
    name_en: "Meteor Breaker",
    name_th: "เมทีออร์เบรกเกอร์ (Meteor Breaker)",
    type: "active",
    max_level: 10,
    mp_cost: 600,
    description_en: "Jump and crash down. Chance to inflict Dizzy.",
    description_th: "กระโดดขึ้นฟ้าแล้วพุ่งกระแทกลงมาอย่างรุนแรง มีโอกาสทำให้ศัตรูติดสถานะมึนงง (Dizzy) ผู้ใช้จะเป็นอมตะ (Invincible) ระหว่างกระโดด"
  },
  
  // Magic Skills
  {
    id: 4,
    skill_tree: "Magic Skills",
    skill_tree_th: "สกิลเวทมนตร์ (ไม้เท้า/อุปกรณ์เวท)",
    name_en: "Magic: Arrows",
    name_th: "เวทมนตร์: ศรเวท (Magic: Arrows)",
    type: "active",
    max_level: 10,
    mp_cost: 100,
    description_en: "Fires magic arrows. The number of arrows increases by level.",
    description_th: "ยิงศรเวทมนตร์โจมตีศัตรู จำนวนธนูเวทจะเพิ่มขึ้นตามเลเวลของสกิล"
  },
  {
    id: 5,
    skill_tree: "Magic Skills",
    skill_tree_th: "สกิลเวทมนตร์ (ไม้เท้า/อุปกรณ์เวท)",
    name_en: "Magic: Storm",
    name_th: "เวทมนตร์: พายุเวท (Magic: Storm)",
    type: "active",
    max_level: 10,
    mp_cost: 400,
    description_en: "Summons a storm that deals multi-hit AoE damage.",
    description_th: "อัญเชิญพายุเวทมนตร์โจมตีศัตรูในวงกว้างเป็นระยะเวลาหนึ่ง สามารถดูดมอนสเตอร์เข้ามารวมกันได้"
  },
  {
    id: 6,
    skill_tree: "Magic Skills",
    skill_tree_th: "สกิลเวทมนตร์ (ไม้เท้า/อุปกรณ์เวท)",
    name_en: "Magic: Finale",
    name_th: "เวทมนตร์: ฟินาเล่ (Magic: Finale)",
    type: "active",
    max_level: 10,
    mp_cost: 1600,
    description_en: "A devastating magic attack. Takes a long time to cast.",
    description_th: "เวทมนตร์ทำลายล้างขั้นสุดยอด ต้องใช้เวลาร่ายนานมาก แต่สร้างความเสียหายมหาศาลแบบวงกว้าง"
  },

  // Shot Skills
  {
    id: 7,
    skill_tree: "Shot Skills",
    skill_tree_th: "สกิลธนู (ธนู/หน้าไม้)",
    name_en: "Snipe",
    name_th: "สไนป์ (Snipe)",
    type: "active",
    max_level: 10,
    mp_cost: 400,
    description_en: "A precise shot. Deals armor break if the target is debuffed.",
    description_th: "ยิงทะลวงจุดตาย มีโอกาสทำลายเกราะศัตรู (Armor Break) ทำให้พลังป้องกันลดลง"
  },
  {
    id: 8,
    skill_tree: "Shot Skills",
    skill_tree_th: "สกิลธนู (ธนู/หน้าไม้)",
    name_en: "Cross Fire",
    name_th: "ครอสไฟร์ (Cross Fire)",
    type: "active",
    max_level: 10,
    mp_cost: 400,
    description_en: "Charge power to shoot a strong arrow. Can release at 1-5 charges.",
    description_th: "ชาร์จพลังงานเพื่อยิงลูกศรระเบิด ยิ่งชาร์จไว้นาน (สูงสุด 5 ขั้น) ความเสียหายและระยะวงกว้างจะยิ่งเพิ่มขึ้น"
  }
];
