const fs = require('fs');
const path = require('path');

// 文件路径
const ENTITY_ANALYSIS_FILE = path.join(__dirname, 'entity-analysis.json');
const INTERFACE_DIR = path.join(__dirname, 'src', 'interface');

/**
 * 生成实体参数接口内容
 * @param {Object} entity 实体信息
 * @returns {string} 参数接口代码
 */
function generateInterfaceContent(entity) {
  const moduleName = entity.moduleName;
  const className = entity.className;
  const tableName = entity.tableName;
  
  // 生成字段定义
  let fieldDefinitions = '';
  if (entity.fields && entity.fields.length > 0) {
    fieldDefinitions = entity.fields
      .map(field => `  ${field.name}: ${field.type};`)  
      .join('\n');
  } else {
    // 默认添加id字段
    fieldDefinitions = '  id: number;\n  createdAt?: Date;\n  updatedAt?: Date;';
  }
  
  return `import { ${className} } from '../entity/${moduleName}/${moduleName}.${className.toLowerCase().replace('.', '')}.entity';

/**
 * ${className} 实体接口
 * 对应数据库表: ${tableName}
 */
export interface ${className}Interface {
${fieldDefinitions}
}

/**
 * 创建 ${className} 的参数接口
 */
export interface Create${className}DTO extends Partial<${className}Interface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ${className} 的参数接口
 */
export interface Update${className}DTO extends Partial<${className}Interface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ${className} 的参数接口
 */
export interface Query${className}DTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ${className}Interface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ${className} 分页查询结果接口
 */
export interface ${className}PageResult {
  data: ${className}[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ${className} API 响应接口
 */
export interface ${className}Response {
  success: boolean;
  message: string;
  data?: ${className} | ${className}[] | ${className}PageResult;
  error?: string;
}
`;
}

/**
 * 创建目录（如果不存在）
 * @param {string} dirPath 目录路径
 */
function ensureDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * 主函数
 */
function main() {
  try {
    // 读取实体分析结果
    const entities = JSON.parse(fs.readFileSync(ENTITY_ANALYSIS_FILE, 'utf8'));
    
    console.log(`开始生成参数接口，共 ${entities.length} 个实体`);
    
    // 按模块分组生成接口文件
    const moduleMap = new Map();
    
    // 按模块分组
    entities.forEach(entity => {
      if (!moduleMap.has(entity.moduleName)) {
        moduleMap.set(entity.moduleName, []);
      }
      moduleMap.get(entity.moduleName).push(entity);
    });
    
    console.log(`按模块分组后：${moduleMap.size} 个模块`);
    
    // 生成每个模块的接口文件
    let interfaceCount = 0;
    
    moduleMap.forEach((moduleEntities, moduleName) => {
      const moduleDir = path.join(INTERFACE_DIR, moduleName);
      ensureDirectory(moduleDir);
      
      moduleEntities.forEach(entity => {
        const interfaceFilePath = path.join(moduleDir, `${entity.className}Interface.ts`);
        const interfaceContent = generateInterfaceContent(entity);
        
        fs.writeFileSync(interfaceFilePath, interfaceContent);
        interfaceCount++;
        
        if (interfaceCount % 100 === 0) {
          console.log(`已生成 ${interfaceCount} 个接口文件`);
        }
      });
    });
    
    console.log(`参数接口生成完成！共生成 ${interfaceCount} 个文件`);
    
  } catch (error) {
    console.error('生成参数接口失败:', error);
  }
}

// 执行主函数
main();