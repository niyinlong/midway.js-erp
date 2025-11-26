const fs = require('fs');
const path = require('path');

// 读取 SQL 文件的前几行来分析表结构
const sqlFilePath = path.join(__dirname, 'dump.sql');

// 创建一个函数来分析 SQL 文件并提取表信息
function analyzeSQLFile() {
  try {
    // 读取整个文件，但分批处理以避免内存问题
    const fileContent = fs.readFileSync(sqlFilePath, 'utf8');
    const lines = fileContent.split('\n');
    console.log(`文件总共有 ${lines.length} 行`);
    
    const tables = [];
    let currentTable = null;
    let inCreateTable = false;
    
    // 不限制行数，处理整个文件
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      // 每处理10000行输出一次进度
      if (i % 10000 === 0) {
        console.log(`处理到第 ${i} 行...`);
      }
      
      // 检测 CREATE TABLE 语句
      if (line.startsWith('CREATE TABLE public.')) {
        inCreateTable = true;
        const tableMatch = line.match(/CREATE TABLE public\.(["\w]+)/);
        if (tableMatch) {
          let tableName = tableMatch[1];
          // 移除引号
          if (tableName.startsWith('"') && tableName.endsWith('"')) {
            tableName = tableName.substring(1, tableName.length - 1);
          }
          
          currentTable = {
            name: tableName,
            fields: [],
            comment: ''
          };
          tables.push(currentTable);
        }
      }
      
      // 检测表注释
      if (line.startsWith('COMMENT ON TABLE public.')) {
        const commentMatch = line.match(/COMMENT ON TABLE public\.(["\w]+) IS '(.*)'/);
        if (commentMatch) {
          let tableName = commentMatch[1];
          if (tableName.startsWith('"') && tableName.endsWith('"')) {
            tableName = tableName.substring(1, tableName.length - 1);
          }
          
          const table = tables.find(t => t.name === tableName);
          if (table) {
            table.comment = commentMatch[2];
          }
        }
      }
      
      // 检测字段定义
      if (inCreateTable && currentTable && !line.startsWith(')') && !line.startsWith('CREATE TABLE')) {
        // 匹配字段定义
        const fieldMatch = line.match(/\s*(\w+)\s+(\w+(?:\[\d+\])?)\s*(.*?),?/);
        if (fieldMatch) {
          const fieldName = fieldMatch[1];
          const fieldType = fieldMatch[2];
          const fieldOptions = fieldMatch[3] || '';
          
          currentTable.fields.push({
            name: fieldName,
            type: fieldType,
            options: fieldOptions,
            comment: ''
          });
        }
      }
      
      // 检测字段注释
      if (line.startsWith('COMMENT ON COLUMN public.')) {
        const commentMatch = line.match(/COMMENT ON COLUMN public\.(["\w\.]+\.\w+) IS '(.*)'/);
        if (commentMatch) {
          let tableAndField = commentMatch[1];
          // 处理可能的带引号的表名
          if (tableAndField.includes('."')) {
            const parts = tableAndField.split('."');
            const tableName = parts[0];
            const fieldName = parts[1].replace('"', '');
            
            const table = tables.find(t => t.name === tableName);
            if (table) {
              const field = table.fields.find(f => f.name === fieldName);
              if (field) {
                field.comment = commentMatch[2];
              }
            }
          } else {
            const parts = tableAndField.split('.');
            const tableName = parts[0];
            const fieldName = parts[1];
            
            const table = tables.find(t => t.name === tableName);
            if (table) {
              const field = table.fields.find(f => f.name === fieldName);
              if (field) {
                field.comment = commentMatch[2];
              }
            }
          }
        }
      }
      
      // 检测表结束
      if (inCreateTable && line === ');') {
        inCreateTable = false;
      }
    }
    
    // 输出分析结果
    console.log('=== 表结构分析结果 ===');
    console.log(`找到 ${tables.length} 个表\n`);
    
    tables.forEach(table => {
      console.log(`表名: ${table.name}`);
      if (table.comment) {
        console.log(`注释: ${table.comment}`);
      }
      console.log('字段:');
      table.fields.forEach(field => {
        console.log(`  - ${field.name} (${field.type})` + (field.comment ? `: ${field.comment}` : ''));
      });
      console.log('---\n');
    });
    
    // 保存分析结果到文件
    fs.writeFileSync(
      path.join(__dirname, 'table-analysis-full.json'),
      JSON.stringify(tables, null, 2)
    );
    console.log('\n分析结果已保存到 table-analysis.json');
    
  } catch (error) {
    console.error('分析 SQL 文件时出错:', error.message);
  }
}

// 执行分析
analyzeSQLFile();