# 🎮 Wiki Toram Online TH

> ฐานข้อมูลเกม Toram Online ภาษาไทย — สร้างโดยชุมชนผู้เล่นชาวไทย เพื่อผู้เล่นชาวไทย

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)

---

## 📋 สารบัญ

- [เกี่ยวกับโปรเจกต์](#-เกี่ยวกับโปรเจกต์)
- [เว็บไซต์ออนไลน์](#-เว็บไซต์ออนไลน์)
- [ฟีเจอร์](#-ฟีเจอร์)
- [Tech Stack](#-tech-stack)
- [การติดตั้งและรันในเครื่อง](#-การติดตั้งและรันในเครื่อง)
- [คู่มือการอัปโหลดขึ้น GitHub (Deploy)](#-คู่มือการอัปโหลดขึ้น-git)
- [โครงสร้างโปรเจกต์](#-โครงสร้างโปรเจกต์)
- [หน้าเว็บ](#-หน้าเว็บ)
- [การพัฒนาต่อ](#-การพัฒนาต่อ)
- [เครดิต](#-เครดิต)

---

## 🌟 เกี่ยวกับโปรเจกต์

Wiki Toram Online TH คือเว็บไซต์ฐานข้อมูลเกม **Toram Online** ภาษาไทย ออกแบบมาให้ผู้เล่นชาวไทยค้นหาข้อมูลเกมได้ง่าย รวดเร็ว และสวยงาม

รองรับข้อมูล:
- ⚔️ **ไอเทม** — อาวุธ, เกราะ, คริสตัล, วัตถุดิบ พร้อมสเตตัสครบ
- 👾 **มอนสเตอร์** — บอส, มินิบอส, มอนปกติ พร้อม HP, ธาตุ, จุดดรอป
- 🗺️ **แผนที่** — ตำแหน่งที่พบมอนสเตอร์แต่ละตัว
- 🎁 **ตารางดรอป** — เชื่อมโยงว่ามอนสเตอร์ตัวไหนดรอปไอเทมอะไร อัตราเท่าไหร่

---

## 🌐 เว็บไซต์ออนไลน์

สามารถใช้งาน Wiki ได้ทันทีผ่านหน้าเว็บไซต์ (อัปเดตอัตโนมัติเมื่อแก้โค้ดชึ้น GitHub)
👉 **[เข้าใช้งาน Wiki Toram Online TH คลิ๊กที่นี่](https://zxd44.github.io/Wiki-Toram-ZXD44/)**

---

## ✨ ฟีเจอร์

| ฟีเจอร์ | รายละเอียด |
|---------|-----------|
| 🔍 ค้นหา | ค้นหาไอเทม/มอนสเตอร์ด้วยชื่อไทยหรืออังกฤษ |
| 🏷️ ตัวกรอง | กรองตามประเภท, ธาตุ, เรียงตามเลเวล/HP/ชื่อ |
| 🔗 เชื่อมโยงข้อมูล | คลิกจากมอนสเตอร์ไปหน้าไอเทมที่ดรอป หรือย้อนกลับ |
| 🌙 Dark Mode | ธีมมืดสบายตา พร้อม Glassmorphism |
| ✨ Animation | Micro-animations ทั่วทั้งเว็บ |
| 📱 Responsive | ใช้งานได้ทั้ง Desktop, Tablet, Mobile |
| 🇹🇭 ภาษาไทย | UI และข้อมูลเกมเป็นภาษาไทยทั้งหมด |

---

## 🛠️ Tech Stack

- **React 19** — UI Framework
- **Vite 8** — Build Tool & Dev Server (Hot Module Replacement)
- **TailwindCSS v4** — Utility-first CSS Framework
- **React Router v7** — Client-side Routing
- **TypeScript ~5.9** — Type Safety

---

## 📦 การติดตั้งและรันในเครื่อง

### ความต้องการ (Prerequisites)
- **Node.js** 18 ขึ้นไป
- **npm** 9 ขึ้นไป

### ขั้นตอน

```bash
# 1. Clone repository
git clone https://github.com/ZXD44/Wiki-Toram-ZXD44.git

# 2. เข้าไปในโฟลเดอร์โปรเจกต์
cd Wiki-Toram-ZXD44

# 3. ติดตั้ง dependencies
npm install
```

---

## 🚀 คำสั่งรัน

| คำสั่ง | คำอธิบาย |
|-------|---------|
| `npm run dev` | รัน Dev Server (http://localhost:5173/) พร้อม Hot Reload |
| `npm run build` | Build เวอร์ชัน Production ไปที่โฟลเดอร์ `dist/` |
| `npm run preview` | Preview เวอร์ชัน Production ที่ build แล้ว |

### ตัวอย่างการใช้งาน

```bash
# รัน Development Server
npm run dev

# เปิดเบราว์เซอร์ไปที่
# → http://localhost:5173/

# Build สำหรับ Production
npm run build

# Preview Production Build
npm run preview
```

---

## 🆙 คู่มือการอัปโหลดขึ้น Git (อัปเดตเว็บอัตโนมัติ)

เว็บไซต์ระบบนี้เชื่องโยงกับระบบ **GitHub Actions** ทุกครั้งที่คุณแก้โค้ดและส่งข้อมูลขึ้น Github ระบบจะตีโค้ดคุณเป็นหน้าเว็บอัตโนมัติภายใน 1 นาที!

**ขั้นตอนการอัปโหลด (เวลาแก้ไขเว็บเพิ่ม):**
1. เปิด Terminal ด้านล่างของ IDE โปรแกรม (หรือกด `Ctrl` + `\``)
2. พิมพ์คำสั่ง 3 บรรทัดนี้ (ทีละบรรทัด):

```bash
# บอกว่าเราแก้ไขอะไรไปบ้าง (เอาไฟล์ทุกอันเข้าเตรียมอัป)
git add .

# เขียนบันทึกบอกตัวเองว่ารอบนี้เราใส่อะไรเพิ่มไป (เช่น "อัปเดตบอสใหม่")
git commit -m "อัปเดตข้อมูลมอนสเตอร์ใหม่และใส่ระบบค้นหา"

# ยิงข้อมูลขึ้นไปบน Git ทันที
git push origin master
```

3. เมื่อคำสั่งเสร็จสิ้น ให้เข้าไปที่เว็บ **GitHub** ของคุณ -> ดูที่แถบ **Actions** 
4. เมื่อวงกลมขึ้นสีเขียว 🟢 ให้รีเฟรชหน้าเว็บ [zxd44.github.io](https://zxd44.github.io/Wiki-Toram-ZXD44/) เพื่อดูการเปลี่ยนแปลงได้เลย!

---

## 📂 โครงสร้างโปรเจกต์

```
Wiki-Toram/
├── index.html              # HTML หลัก (SEO meta tags ภาษาไทย)
├── vite.config.ts           # Vite config (React + TailwindCSS plugins)
├── tsconfig.json            # TypeScript config
├── package.json             # Dependencies & Scripts
├── public/
│   ├── favicon.svg          # ไอคอนเว็บ
│   └── icons.svg            # SVG icons
│
└── src/
    ├── main.tsx             # Entry point (React DOM render)
    ├── App.tsx              # Router + Layout (Navbar/Footer)
    ├── index.css            # Design System (theme tokens, animations)
    │
    ├── types/
    │   └── index.ts         # TypeScript interfaces ทั้งหมด
    │
    ├── data/
    │   ├── items.ts         # ข้อมูลไอเทม (mock data)
    │   └── monsters.ts      # ข้อมูลมอนสเตอร์ (mock data)
    │
    ├── components/
    │   ├── Navbar.tsx        # แถบนำทางด้านบน
    │   ├── Footer.tsx        # ส่วนท้ายเว็บ
    │   └── GameBadges.tsx    # Badge ธาตุ, ประเภท, สเตตัสบาร์
    │
    └── pages/
        ├── HomePage.tsx          # หน้าหลัก
        ├── ItemsPage.tsx         # รายการไอเทม
        ├── ItemDetailPage.tsx    # รายละเอียดไอเทม
        ├── MonstersPage.tsx      # รายการมอนสเตอร์
        └── MonsterDetailPage.tsx # รายละเอียดมอนสเตอร์
```

---

## 📄 หน้าเว็บ

| เส้นทาง (Route) | หน้า | รายละเอียด |
|----------------|------|-----------|
| `/` | หน้าหลัก | Hero section, สถิติ, บอสยอดนิยม, ไอเทมแนะนำ |
| `/items` | รายการไอเทม | ค้นหา, กรองตามประเภท, เรียงลำดับ |
| `/items/:id` | รายละเอียดไอเทม | สเตตัส, แหล่งดรอป, วิธีได้มา |
| `/monsters` | รายการมอนสเตอร์ | ค้นหา, กรองตามประเภท + ธาตุ |
| `/monsters/:id` | รายละเอียดมอนสเตอร์ | HP bar, ตารางดรอป, แผนที่, เคล็ดลับ |

---

## 🔮 การพัฒนาต่อ (Roadmap)

- [ ] ระบบค้นหาแบบ Global Search
- [ ] หน้า Skill Trees & Skill Calculator
- [ ] หน้า Map Gallery
- [ ] Stat Calculator สำหรับคำนวณดาเมจ
- [ ] ระบบ Localization (สลับ EN/TH)
- [ ] Data Scraping จาก Coryn Club
- [ ] Backend API (Node.js + PostgreSQL)
- [ ] User Login & Bookmark System
- [ ] Deployment บน VPS + Cloudflare

---

## 📊 Database Schema

ออกแบบตาราง 7 ตารางหลัก:

| ตาราง | คำอธิบาย |
|-------|---------|
| `items` | ข้อมูลไอเทมทั้งหมด (ชื่อ, ประเภท, เลเวล, ราคา) |
| `item_stats` | สเตตัสของไอเทมแต่ละชิ้น (ATK, DEF, MATK...) |
| `monsters` | ข้อมูลมอนสเตอร์ (HP, ธาตุ, เลเวล, EXP) |
| `maps` | ข้อมูลแผนที่ (ชื่อ, ช่วงเลเวล) |
| `monster_locations` | ตำแหน่งที่พบมอนสเตอร์ |
| `drop_list` | ตารางดรอป (มอนสเตอร์ → ไอเทม, อัตราดรอป) |
| `skills` / `skill_trees` | ข้อมูลสกิลและ Skill Tree |

---

## 🙏 เครดิต

| | |
|---|---|
| **สร้างโดย** | **ZirconX** |
| ข้อมูลอ้างอิง | Coryn Club, Toram Online Fandom Wiki |
| เกม | Toram Online © ASOBIMO, Inc. |

> ⚠️ **หมายเหตุ:** เว็บนี้ไม่ได้มีส่วนเกี่ยวข้องกับ ASOBIMO, Inc. แต่อย่างใด เป็นเว็บที่สร้างโดยแฟนเกมเพื่อชุมชนผู้เล่น

---

## 📜 License

MIT License — ใช้งานได้อิสระ

---

<p align="center">
  Made with 💜 by <strong>ZirconX</strong>
</p>
