const fs = require('fs');
const path = require('path');

// 实体目录路径
const ENTITY_DIR = path.join(__dirname, 'src', 'entity');

/**
 * 分析实体文件，提取表结构信息
 * @param {string} filePath 实体文件路径
 * @param {string} moduleName 模块名称（文件夹名）
 * @returns {Object} 实体信息对象
 */
function analyzeEntityFile(filePath, moduleName) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // 提取表名
    const tableNameMatch = fileContent.match(/@Entity\(['"]([\w_]+)['"]\)/);
    if (!tableNameMatch) return null;
    
    const tableName = tableNameMatch[1];
    
    // 提取实体类名
    const classNameMatch = fileContent.match(/class\s+([\w]+)/);
    const className = classNameMatch ? classNameMatch[1] : path.basename(filePath, '.ts');
    
    // 提取字段信息
    const fields = [];
    const fieldMatches = fileContent.matchAll(/@Column\b([^;]+);/g);
    
    for (const match of fieldMatches) {
      const fieldInfo = match[1];
      const fieldNameMatch = fieldInfo.match(/public\s+(\w+)\s*:/);
      const fieldTypeMatch = fieldInfo.match(/:\s*(\w+)/);
      
      if (fieldNameMatch && fieldTypeMatch) {
        fields.push({
          name: fieldNameMatch[1],
          type: fieldTypeMatch[1]
        });
      }
    }
    
    return {
      moduleName,
      tableName,
      className,
      filePath: path.relative(ENTITY_DIR, filePath),
      fields
    };
  } catch (error) {
    console.error(`分析文件失败: ${filePath}`, error);
    return null;
  }
}

/**
 * 扫描实体目录，分析所有实体文件
 */
function scanEntityDirectory() {
  const entities = [];
  
  // 获取所有模块文件夹
  const moduleDirs = fs.readdirSync(ENTITY_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  console.log(`找到 ${moduleDirs.length} 个模块文件夹`);
  
  // 遍历每个模块文件夹
  for (const moduleName of moduleDirs) {
    const modulePath = path.join(ENTITY_DIR, moduleName);
    
    try {
      // 获取模块中的所有实体文件
      const entityFiles = fs.readdirSync(modulePath)
        .filter(filename => filename.endsWith('.entity.ts'));
      
      console.log(`模块 ${moduleName}: 找到 ${entityFiles.length} 个实体文件`);
      
      // 分析每个实体文件
      for (const filename of entityFiles) {
        const filePath = path.join(modulePath, filename);
        const entityInfo = analyzeEntityFile(filePath, moduleName);
        
        if (entityInfo) {
          entities.push(entityInfo);
        }
      }
    } catch (error) {
      console.error(`扫描模块 ${moduleName} 失败`, error);
    }
  }
  
  return entities;
}

/**
 * 主函数
 */
function main() {
  console.log('开始分析实体结构...');
  const startTime = Date.now();
  
  const entities = scanEntityDirectory();
  
  console.log(`总共分析了 ${entities.length} 个实体`);
  
  // 保存分析结果
  const outputPath = path.join(__dirname, 'entity-analysis.json');
  fs.writeFileSync(outputPath, JSON.stringify(entities, null, 2));
  
  console.log(`分析结果已保存到 ${outputPath}`);
  console.log(`总耗时: ${(Date.now() - startTime) / 1000} 秒`);
}

// 执行主函数
main();