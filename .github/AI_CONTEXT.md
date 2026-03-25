# 🧠 AI Context & Project Status

ไฟล์นี้ถูกสร้างขึ้นเพื่อให้ **AI Assistant** หรือ **ผู้พัฒนาคนต่อไป** สามารถอ่านและทำความเข้าใจถึงโครงสร้าง Tech Stack และความคืบหน้าของโปรเจกต์ **Wiki Toram Online TH** ได้อย่างรวดเร็วโดยไม่ต้องเสียเวลาไล่โค้ดใหม่ทั้งหมด

---

## 🏗️ 1. Project Overview & Tech Stack
**เป้าหมาย:** สร้างเว็บไซต์สารานุกรมข้อมูล (Wiki) เกม Toram Online สมบูรณ์แบบที่เป็น **ภาษาไทย** ล้วน 
- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 8
- **Styling:** TailwindCSS v4 (ใช้ Glassmorphism UI)
- **Routing:** `react-router-dom` (ใช้ **HashRouter** เพื่อป้องกันการเกิดหน้าจอ 404 ตอน Deploy ขึ้น GitHub Pages)
- **Hosting / Deploy:** GitHub Pages (ผ่าน GitHub Actions `deploy.yml`)

---

## ✅ 2. สิ่งที่ทำเสร็จแล้ว (Completed Features)

### 🖥️ Frontend & UI
1. **Responsive Design:** 
   - วาง Layout ด้วย `grid` และ `flex` ยืดหยุ่นรองรับ หน้าจอ Desktop, Tablet, และ Mobile 100%
   - ใส่ `overflow-x: hidden` กันหน้าจอสไลด์แนวนอนเวลาตั้งบนมือถือ
2. **Global Search (หน้า `/search`):** 
   - พัฒนาระบบค้นหาแบบ Real-time ข้ามหมวดหมู่ (Items, Monsters, Maps, Skills) ผ่านหน้าเดียว
3. **Image Lightbox (ImageModal):** 
   - ผู้เล่นสามารถคลิกที่รูปภาพของบอส หรือ อาวุธ เพื่อขยายใหญ่เต็มหน้าจอ

### 📁 Database / Data Structure (อยู่ใน `src/data/`)
ข้อมูลถูกจัดการในรูปของ TypeScript Arrays ชั่วคราว (เตรียมพร้อมในการเชื่อมต่อ REST API ในอนาคต):
1. **`items.ts`:** ไอเทมสวมใส่ (ดาบ, เกราะ, ไอเทมดรอป) ข้อมูลของจริง (Lv.1 - 250)
2. **`monsters.ts`:** มอนสเตอร์และบอสของจริง (เช่น Boss Roga, Minotaur) พร้อมข้อมูลจุดดรอปและสเตตัส HP ตรงเป๊ะ
3. **`maps.ts`:** ใส่ผังแผนที่จริงของ Toram กว่า 50+ สถานที่ ครอบคลุมตั้งแต่ Chapter 1 จนถึง Chapter 14 (แพทช์ล่าสุด)
4. **`skills.ts`:** ผังข้อมูลสกิลพื้นฐานเตรียมขยายเป็นตารางอัปสกิล

### 🖼️ Asset Management
- สร้างฟังก์ชัน **`getAssetPath(url)`** ใน `src/utils/assets.ts` 
- **ระบบนี้สำคัญมาก:** เนื่องจากเรานำเว็บไปรันบน GitHub Pages (อยู่ในโฟลเดอร์ย่อย `/Wiki-Toram-ZXD44/`) การเขียน Path สด `/images/...` จะพัง ฟังก์ชันนี้จะเป็นตัวต่อเติมฐาน (Base URL) ให้อัตโนมัติทุกภาพ

---

## 🚧 3. สิ่งที่ต้องทำต่อไป (Future Tasks / Roadmap)
หาก AI ถูกเรียกตัวมาเพื่อทำต่อ แนะนำให้พิจารณาฟีเจอร์เหล่านี้เรียงตามลำดับ:

1. **🔨 Blacksmith & Synthesis Recipes (สูตรคราฟของ)**
   - สร้างตารางและหน้ารายละเอียดว่า อาวุธนี้ใช้ "วัตถุดิบอะไรบ้าง" "ตีที่ NPC เลเวลเท่าไหร่"
2. **🎭 Dye & Appearance System (ระบบย้อมสีและแฟชั่น)**
   - เพิ่มฐานข้อมูลสีเกราะ (Color A, B, C) และรูปหน้าตอแฟชั่น
3. **💎 Crysta Upgrade Path (คริสตัลอัปเกรด)**
   - แสดงแผนผังเชื่อมโยงคริสตัลบอส (เช่น Boss Colon -> Boss Roga -> Iconos)
4. **🧠 Combo & Stat Simulator (เครื่องจำลองคอมโบและอัปสเตตัส)**
   - ฟีเจอร์ขั้นสูง: ให้ผู้เล่นกดลากสกิลมาเรียงกัน แล้ว AI ช่วยคำนวณ "Mana (MP)" ที่ใช้ทั้งหมด และ "โบนัสความแรงดาเมจ (Smite/Save)"
5. **⚙️ Backend Migration**
   - เปลี่ยนจากอ่านไฟล์ Static TS ไปเป็น Web Scraping ดึงจาก Coryn Club (ทาง Node.js + PostgreSQL) เพื่ออัปเดตข้อมูลอัตโนมัติ

---
**📍 หมายเหตุสำหรับ AI:** เมื่อเริ่มทำงาน ควรอ่านไฟล์นี้ก่อนเสมอเพื่อ Context ที่ต่อเนื่อง
