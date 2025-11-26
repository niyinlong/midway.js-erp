const fs = require('fs');
const path = require('path');

// 实体目录路径
const entityDir = path.join(__dirname, 'src', 'entity');

// 验证实体类
function validateEntities() {
  console.log('开始验证 TypeORM 实体类...');
  
  try {
    // 读取实体目录中的所有文件
    const files = fs.readdirSync(entityDir).filter(file => file.endsWith('.ts'));
    
    if (files.length === 0) {
      console.error('错误: 实体目录中没有找到 .ts 文件');
      return false;
    }
    
    console.log(`找到 ${files.length} 个实体类文件`);
    
    let validCount = 0;
    let invalidCount = 0;
    const invalidFiles = [];
    
    files.forEach(file => {
      const filePath = path.join(entityDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      // 基本验证
      const issues = [];
      
      // 检查是否有 Entity 装饰器
      if (!fileContent.includes('@Entity')) {
        issues.push('缺少 @Entity 装饰器');
      }
      
      // 检查是否有 export class 声明
      if (!fileContent.match(/export\s+class\s+\w+/)) {
        issues.push('缺少 export class 声明');
      }
      
      // 检查是否有从 typeorm 导入必要的装饰器
      if (!fileContent.includes('from \'typeorm\'')) {
        issues.push('缺少从 typeorm 导入必要的装饰器');
      }
      
      // 检查文件内容是否为空
      if (fileContent.trim() === '') {
        issues.push('文件内容为空');
      }
      
      // 检查主键定义
      const hasPrimaryKey = fileContent.includes('@PrimaryGeneratedColumn') || 
                           fileContent.includes('@PrimaryColumn');
      
      if (!hasPrimaryKey && !fileContent.includes('RELATION BETWEEN')) {
        issues.push('缺少主键定义');
      }
      
      if (issues.length > 0) {
        invalidCount++;
        invalidFiles.push({
          file: file,
          issues: issues
        });
      } else {
        validCount++;
      }
    });
    
    console.log(`\n验证结果:`);
    console.log(`- 有效实体类: ${validCount}`);
    console.log(`- 无效实体类: ${invalidCount}`);
    
    if (invalidFiles.length > 0) {
      console.log('\n无效文件详情:');
      invalidFiles.forEach(item => {
        console.log(`\n${item.file}:`);
        item.issues.forEach(issue => {
          console.log(`  - ${issue}`);
        });
      });
      
      return false;
    }
    
    console.log('\n所有实体类验证通过!');
    return true;
    
  } catch (error) {
    console.error('验证过程中出错:', error.message);
    return false;
  }
}

// 运行验证
const isValid = validateEntities();

// 提供一些优化建议
if (isValid) {
  console.log('\n优化建议:');
  console.log('1. 考虑为外键关系取消注释 ManyToOne 等装饰器，建立实体间的关联');
  console.log('2. 根据实际需要调整字段类型和选项');
  console.log('3. 为 JSONB 字段添加更具体的类型定义');
  console.log('4. 确保所有关联实体都已生成');
}