import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Setup directories
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const imagesDir = path.join(rootDir, 'public', 'images');
const dataDir = path.join(rootDir, 'src', 'data');

async function processDirectory(directory) {
  if (!fs.existsSync(directory)) return;

  const files = fs.readdirSync(directory);
  let convertedCount = 0;
  let savedBytes = 0;

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      const result = await processDirectory(fullPath);
      convertedCount += result.convertedCount;
      savedBytes += result.savedBytes;
    } else if (file.match(/\.(png|jpe?g)$/i)) {
      // Process image
      const ext = path.extname(file);
      const newFileName = file.replace(new RegExp(`${ext}$`, 'i'), '.webp');
      const newFullPath = path.join(directory, newFileName);

      try {
        const originalSize = stat.size;
        
        // Convert to WebP
        await sharp(fullPath)
          .webp({ quality: 80, effort: 6 }) // quality 80 is virtually lossless for standard viewing, max compression effort
          .toFile(newFullPath);

        const newSize = fs.statSync(newFullPath).size;
        const saved = originalSize - newSize;
        savedBytes += saved;
        convertedCount++;

        console.log(`✅ Converted: ${file} -> ${newFileName} (Saved ${(saved/1024).toFixed(2)} KB)`);

        // Delete original file
        fs.unlinkSync(fullPath);
      } catch (err) {
        console.error(`❌ Failed to convert ${file}:`, err);
      }
    }
  }
  
  return { convertedCount, savedBytes };
}

function updateDataFiles() {
  const dataFiles = ['items.ts', 'monsters.ts'];
  let updatedCount = 0;

  dataFiles.forEach(fileName => {
    const filePath = path.join(dataDir, fileName);
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf-8');
      
      // Replace .png, .jpg, .jpeg with .webp in the content
      // We look specifically for .png/.jpg inside strings ending in quotes
      const newContent = content.replace(/\.(png|jpe?g)(['"])/gi, '.webp$2');
      
      if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`📝 Updated image paths in ${fileName}`);
        updatedCount++;
      }
    }
  });
  
  return updatedCount;
}

async function run() {
  console.log('🚀 Starting Image Optimization (WebP)...');
  
  if (!fs.existsSync(imagesDir)) {
    console.log(`⚠️ directory ${imagesDir} does not exist. Please place images there first.`);
    return;
  }

  const { convertedCount, savedBytes } = await processDirectory(imagesDir);
  
  if (convertedCount > 0) {
    console.log(`\n======================================`);
    console.log(`🎉 Optimization Complete!`);
    console.log(`🔄 Total images converted: ${convertedCount}`);
    console.log(`💾 Total space saved: ${(savedBytes / 1024 / 1024).toFixed(2)} MB`);
    console.log(`======================================\n`);
    
    // Update data files mapping after successful conversion
    updateDataFiles();
  } else {
    console.log('✨ No PNG/JPG images found to optimize. Everything is either already WebP or empty.');
  }
}

run();
