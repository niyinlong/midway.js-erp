const fs = require('fs');
const path = require('path');

// 控制器文件目录
const controllerDir = path.join(__dirname, 'src', 'controller');

// 递归读取控制器文件
function readControllerFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(readControllerFiles(fullPath));
    } else if (item.endsWith('.ts') && !item.includes('BaseController')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// 修复单个控制器文件
function fixController(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 检查是否已经有apiPath定义
    if (!content.includes('const apiPath =')) {
      // 提取模块名和表名
      const relativePath = path.relative(controllerDir, filePath);
      const parts = relativePath.split(path.sep);
      const moduleName = parts[0];
      const fileName = parts[parts.length - 1].replace('.ts', '');
      
      // 移除Controller后缀
      let tableName = fileName.replace('Controller', '');
      // 转换为下划线命名法
      tableName = tableName.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();
      
      // 在类定义前添加apiPath定义
      const classIndex = content.indexOf('@Controller');
      if (classIndex > 0) {
        const apiPath = `const apiPath = '/${moduleName}/${tableName}';\n\n`;
        content = content.slice(0, classIndex) + apiPath + content.slice(classIndex);
      }
    }
    
    // 简单替换方法名冲突
    // 1. getById
    content = content.replace(
      'async getById(@Param(\'id\') id: string) {\n    // BaseController中的getById方法已经处理了响应\n    return this.getById(',
      'async getByIdHandler(@Param(\'id\') id: string) {\n    // BaseController中的getById方法已经处理了响应\n    return await super.getById('
    );
    
    // 2. list
    content = content.replace(
      'async list(@Query() query: ',
      'async listHandler(@Query() query: '
    );
    content = content.replace(
      '// BaseController中的list方法已经处理了响应\n    return this.list(',
      '// BaseController中的list方法已经处理了响应\n    return await super.list('
    );
    
    // 3. create
    content = content.replace(
      'async create(@Body() data: ',
      'async createHandler(@Body() data: '
    );
    content = content.replace(
      '// BaseController中的create方法已经处理了响应\n    return this.create(',
      '// BaseController中的create方法已经处理了响应\n    return await super.create('
    );
    
    // 4. update
    content = content.replace(
      'async update(@Param(\'id\') id: string, @Body() data: ',
      'async updateHandler(@Param(\'id\') id: string, @Body() data: '
    );
    content = content.replace(
      '// BaseController中的update方法已经处理了响应\n    return this.update(',
      '// BaseController中的update方法已经处理了响应\n    return await super.update('
    );
    
    // 5. delete
    content = content.replace(
      'async delete(@Param(\'id\') id: string) {\n    // BaseController中的delete方法已经处理了响应\n    return this.delete(',
      'async deleteHandler(@Param(\'id\') id: string) {\n    // BaseController中的delete方法已经处理了响应\n    return await super.delete('
    );
    
    // 6. batchDelete
    content = content.replace(
      'async batchDelete(@Body() body: { ids: (string | number)[] }) {\n    // BaseController中的batchDelete方法已经处理了响应\n    return this.batchDelete(',
      'async batchDeleteHandler(@Body() body: { ids: (string | number)[] }) {\n    // BaseController中的batchDelete方法已经处理了响应\n    return await super.batchDelete('
    );
    
    // 保存修复后的文件
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// 主函数
function main() {
  console.log('Starting simple controller conflict fix...');
  const controllerFiles = readControllerFiles(controllerDir);
  console.log(`Found ${controllerFiles.length} controller files.`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of controllerFiles) {
    if (fixController(file)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  }
  
  console.log(`\nFix Summary:`);
  console.log(`Total files processed: ${controllerFiles.length}`);
  console.log(`Successfully fixed: ${fixedCount}`);
  console.log(`Failed to fix: ${errorCount}`);
}

// 运行修复脚本
main();