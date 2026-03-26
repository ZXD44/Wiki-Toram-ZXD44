import type { MapArea } from '../types';

export const maps: MapArea[] = [
  // ==========================================
  // เมืองหลัก และ สถานที่ปลอดภัย (Cities & Hubs)
  // ==========================================
  { id: 1, name_en: "Sofya City", name_th: "เมืองโซเฟีย", region: "Hubs", level_range_min: 0, level_range_max: 0 },
  { id: 2, name_en: "El Scaro", name_th: "เอลสคาโร", region: "Hubs", level_range_min: 0, level_range_max: 0 },
  { id: 3, name_en: "Einklang", name_th: "ไอน์แคล็ง", region: "Hubs", level_range_min: 0, level_range_max: 0 },
  { id: 4, name_en: "Hora Diomedea", name_th: "โฮรา ดิโอมีเดีย", region: "Hubs", level_range_min: 0, level_range_max: 0 },
  { id: 5, name_en: "Nov Saterica", name_th: "นอฟ ซาเทอริกา", region: "Hubs", level_range_min: 0, level_range_max: 0 },
  { id: 6, name_en: "Draco Town", name_th: "เมืองดราโค", region: "Hubs", level_range_min: 0, level_range_max: 0 },
  { id: 7, name_en: "Aquaza", name_th: "อะควาซ่า", region: "Hubs", level_range_min: 0, level_range_max: 0 },
  { id: 8, name_en: "Nov Diela", name_th: "นอฟ ดีเอลา", region: "Hubs", level_range_min: 0, level_range_max: 0 },
  { id: 9, name_en: "Guild Bar", name_th: "กิลด์บาร์", region: "Hubs", level_range_min: 0, level_range_max: 0 },
  { id: 10, name_en: "Your Land", name_th: "บ้านของผู้เล่น (My Room)", region: "Hubs", level_range_min: 0, level_range_max: 0 },
  
  // ==========================================
  // บทที่ 1: แสงอรุณแห่งการเริ่มต้น
  // ==========================================
  { id: 101, name_en: "Rakau Plains", name_th: "ที่ราบราเคา", region: "Chapter 1", level_range_min: 1, level_range_max: 10 },
  { id: 102, name_en: "Underground Channel", name_th: "ทางน้ำใต้ดิน", region: "Chapter 1", level_range_min: 10, level_range_max: 20 },
  { id: 103, name_en: "Reug Salt Plains: Wanderers Camp", name_th: "ที่ราบเกลือรอยก์: แคมป์นักเดินทาง", region: "Chapter 1", level_range_min: 10, level_range_max: 15 },
  { id: 104, name_en: "Ruined Temple", name_th: "วิหารซากปรักหักพัง", region: "Chapter 1", level_range_min: 15, level_range_max: 25 },
  { id: 105, name_en: "Ruined Temple: Forbidden Hall", name_th: "วิหารซากปรักหักพัง: ห้องต้องห้าม", region: "Chapter 1", level_range_min: 30, level_range_max: 35 },
  { id: 106, name_en: "Ribisco Cave", name_th: "ถ้ำริบิสโก", region: "Chapter 1", level_range_min: 15, level_range_max: 25 },
  { id: 107, name_en: "Land Under Development", name_th: "พื้นที่กำลังพัฒนา (เขตก่อสร้าง)", region: "Chapter 1", level_range_min: 5, level_range_max: 15 },


  // ==========================================
  // บทที่ 2: รูรับแสงของโลก
  // ==========================================
  { id: 201, name_en: "Witeka Scorched Plains", name_th: "ทุ่งหญ้าวิเทกากันดาร", region: "Chapter 2", level_range_min: 20, level_range_max: 25 },
  { id: 202, name_en: "Nisel Mountain", name_th: "ภูเขาไนเซล", region: "Chapter 2", level_range_min: 25, level_range_max: 35 },
  { id: 203, name_en: "Marbaro Forest", name_th: "ป่ามาร์บาโร", region: "Chapter 2", level_range_min: 30, level_range_max: 40 },
  { id: 204, name_en: "Zoktzda Ruins", name_th: "ซากโบราณซอกทส์ดา", region: "Chapter 2", level_range_min: 40, level_range_max: 55 },
  { id: 205, name_en: "Fiery Volcano", name_th: "ภูเขาไฟเพลิง", region: "Chapter 2", level_range_min: 45, level_range_max: 55 },
  
  // ==========================================
  // บทที่ 3: เหล่าทวยเทพในสมัยโบราณ (El Scaro)
  // ==========================================
  { id: 301, name_en: "Saham Crater", name_th: "ปากปล่องภูเขาไฟซาฮาม", region: "Chapter 3", level_range_min: 55, level_range_max: 65 },
  { id: 302, name_en: "Saham Underground Cave", name_th: "ถ้ำใต้ดินซาฮาม", region: "Chapter 3", level_range_min: 60, level_range_max: 70 },
  { id: 303, name_en: "Athema Ruins", name_th: "ซากระดับเทพเอธีมา", region: "Chapter 3", level_range_min: 65, level_range_max: 75 },
  { id: 304, name_en: "New Moon Palace", name_th: "พระราชวังจันทร์ดับ", region: "Chapter 3", level_range_min: 70, level_range_max: 80 },
  { id: 305, name_en: "Empress's Tomb", name_th: "สุสานจักรพรรดินี", region: "Chapter 3", level_range_min: 75, level_range_max: 85 },

  // ==========================================
  // บทที่ 4: เงามืดแห่งการล่มสลาย
  // ==========================================
  { id: 401, name_en: "Wanderers' Plains", name_th: "ที่ราบนักเดินทาง", region: "Chapter 4", level_range_min: 75, level_range_max: 85 },
  { id: 402, name_en: "Akaku Desert", name_th: "ทะเลทรายอาคาคุ", region: "Chapter 4", level_range_min: 80, level_range_max: 90 },
  { id: 403, name_en: "Polde Ice Valley", name_th: "หุบเขาน้ำแข็งโพลเด", region: "Chapter 4", level_range_min: 85, level_range_max: 95 },
  { id: 404, name_en: "Fort Solfini", name_th: "ป้อมปราการโซลฟินี", region: "Chapter 4", level_range_min: 90, level_range_max: 100 },

  // ==========================================
  // บทที่ 5: พายุที่มองไม่เห็น (Dark Domain)
  // ==========================================
  { id: 501, name_en: "Sykea Deep Valley", name_th: "หุบเขาลึกซิเคีย", region: "Chapter 5", level_range_min: 95, level_range_max: 105 },
  { id: 502, name_en: "Manor of the Heavens", name_th: "คฤหาสน์แห่งสวงสวรรค์", region: "Chapter 5", level_range_min: 100, level_range_max: 110 },
  { id: 503, name_en: "Gate to Another World", name_th: "ประตูสู่อีกโลก", region: "Chapter 5", level_range_min: 105, level_range_max: 110 },
  { id: 504, name_en: "Trace of Dark River", name_th: "ร่องรอยแม่น้ำทมิฬ", region: "Chapter 5", level_range_min: 110, level_range_max: 115 },
  { id: 505, name_en: "Plastida", name_th: "พลาสติด้า", region: "Chapter 5", level_range_min: 115, level_range_max: 125 },

  // ==========================================
  // บทที่ 6-7: ความลับแห่งไอน์แคล็ง และ โฮรา
  // ==========================================
  { id: 601, name_en: "Dark Domain", name_th: "ดินแดนแห่งความมืด", region: "Chapter 6", level_range_min: 120, level_range_max: 130 },
  { id: 602, name_en: "Blazing Graben", name_th: "แกรเบนเพลิง", region: "Chapter 6", level_range_min: 125, level_range_max: 135 },
  { id: 603, name_en: "Brahe Laboratory", name_th: "ศูนย์วิจัยบราเฮ", region: "Chapter 6", level_range_min: 135, level_range_max: 150 },
  { id: 604, name_en: "Cuervo Jail", name_th: "คุกเควอร์โว", region: "Chapter 7", level_range_min: 145, level_range_max: 155 },
  { id: 605, name_en: "Monster's Forest", name_th: "ป่าอสูร", region: "Chapter 7", level_range_min: 150, level_range_max: 160 },
  { id: 606, name_en: "Ultimea Palace", name_th: "พระราชวังอัลติเมีย", region: "Chapter 7", level_range_min: 155, level_range_max: 170 },

  // ==========================================
  // บทที่ 8-9: แสงสว่างจรัส และเมืองโรโคโค
  // ==========================================
  { id: 801, name_en: "Lufenas Mansion", name_th: "คฤหาสน์ลูฟีนัส", region: "Chapter 8", level_range_min: 165, level_range_max: 175 },
  { id: 802, name_en: "Wabatis Ruined Temple", name_th: "วิหารซากปรักหักพังวานาติส", region: "Chapter 8", level_range_min: 170, level_range_max: 180 },
  { id: 803, name_en: "Fugitive Lake Swamp", name_th: "หนองน้ำทะเลสาบผู้ลี้ภัย", region: "Chapter 9", level_range_min: 180, level_range_max: 195 },
  { id: 804, name_en: "Rokoko City Ruins", name_th: "ซากเมืองโรโคโค", region: "Chapter 9", level_range_min: 185, level_range_max: 200 },
  { id: 805, name_en: "Witch's Woods", name_th: "ป่าแม่มด", region: "Chapter 9", level_range_min: 195, level_range_max: 210 },

  // ==========================================
  // บทที่ 10-11: อาณาจักรดราโค และอินเจ
  // ==========================================
  { id: 1001, name_en: "Draco Town Ruins", name_th: "ซากเมืองดราโค", region: "Chapter 10", level_range_min: 205, level_range_max: 220 },
  { id: 1002, name_en: "Inje Village", name_th: "หมู่บ้านอินเจ", region: "Chapter 10", level_range_min: 215, level_range_max: 230 },
  { id: 1003, name_en: "Wazeero Street", name_th: "ถนนวาซีโร", region: "Chapter 11", level_range_min: 225, level_range_max: 240 },
  { id: 1004, name_en: "Altoale Sector", name_th: "เขตอัลโทเล", region: "Chapter 11", level_range_min: 230, level_range_max: 245 },

  // ==========================================
  // บทที่ 12-14 (อัปเดตปัจจุบัน): โลกคริสตัล และ นอฟ ดีเอลา
  // ==========================================
  { id: 1201, name_en: "Toram World", name_th: "พิภพทอรัม", region: "Chapter 12+", level_range_min: 240, level_range_max: 250 },
  { id: 1202, name_en: "Boma Konda", name_th: "โบมา คอนดา", region: "Chapter 12+", level_range_min: 245, level_range_max: 260 },
  { id: 1203, name_en: "Eltuden", name_th: "เอลทูเดน", region: "Chapter 13+", level_range_min: 255, level_range_max: 270 },
  { id: 1204, name_en: "Crysta World: Upper Area", name_th: "โลกคริสตัล: พื้นที่ตอนบน", region: "Chapter 13+", level_range_min: 265, level_range_max: 280 },
  { id: 1205, name_en: "Nezim Wetlands", name_th: "พื้นที่ชุ่มน้ำเนซิม", region: "Chapter 14+", level_range_min: 275, level_range_max: 290 },
  { id: 1206, name_en: "Weredrag Cave", name_th: "ถ้ำแวร์แดร็ก", region: "Chapter 14+", level_range_min: 285, level_range_max: 300 },

  // ==========================================
  // พื้นที่พิศวง (Special / Events)
  // ==========================================
  { id: 9001, name_en: "Spring of Rebirth", name_th: "น้ำพุแห่งการเกิดใหม่", region: "Special", level_range_min: 0, level_range_max: 0 },
  { id: 9002, name_en: "Guild Maze (Floor 1-1000)", name_th: "สวรรค์แห่งกิลด์ (เขาวงกต 1-1000)", region: "Special", level_range_min: 1, level_range_max: 1000 },
  { id: 9003, name_en: "High Difficulty Boss Arena", name_th: "ลานประลองบอสระดับความยากสูง", region: "Event", level_range_min: 150, level_range_max: 280 }
];
