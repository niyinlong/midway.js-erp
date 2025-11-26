const fs = require('fs');
const path = require('path');

// 实体目录路径
const entityDir = path.join(__dirname, 'src', 'entity');

// 清理实体目录下的所有.ts文件
function cleanupEntityFiles() {
  try {
    // 读取实体目录
    const files = fs.readdirSync(entityDir);
    
    let deletedCount = 0;
    
    files.forEach(file => {
      const filePath = path.join(entityDir, file);
      const stat = fs.statSync(filePath);
      
      // 如果是.ts文件，删除它
      if (stat.isFile() && file.endsWith('.ts')) {
        fs.unlinkSync(filePath);
        console.log(`已删除: ${file}`);
        deletedCount++;
      }
    });
    
    console.log(`\n总共删除了 ${deletedCount} 个文件`);
    console.log('清理完成！');
  } catch (error) {
    console.error('清理过程中出错:', error.message);
  }
}

// 执行清理
cleanupEntityFiles();