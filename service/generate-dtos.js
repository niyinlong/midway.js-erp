const fs = require('fs');
const path = require('path');

// 文件路径
const ENTITY_ANALYSIS_FILE = path.join(__dirname, 'entity-analysis.json');
const DTO_DIR = path.join(__dirname, 'src', 'dto');

/**
 * 根据TypeScript类型获取对应的验证规则
 * @param {string} tsType TypeScript类型
 * @returns {string} 验证规则装饰器
 */
function getValidationDecorator(tsType) {
  const type = tsType.toLowerCase();
  
  if (type.includes('string')) {
    return `@Rule(RuleType.string())`;
  } else if (type.includes('number') || type.includes('int')) {
    return `@Rule(RuleType.number())`;
  } else if (type.includes('boolean')) {
    return `@Rule(RuleType.boolean())`;
  } else if (type.includes('date')) {
    return `@Rule(RuleType.date())`;
  } else {
    return `@Rule(RuleType.any())`;
  }
}

/**
 * 生成DTO类内容
 * @param {Object} entity 实体信息
 * @returns {string} DTO类代码
 */
function generateDTOContent(entity) {
  const moduleName = entity.moduleName;
  const className = entity.className;
  const tableName = entity.tableName;
  
  // 生成字段验证规则
  let createFieldValidations = '';
  let updateFieldValidations = '';
  
  if (entity.fields && entity.fields.length > 0) {
    // 为创建DTO生成字段验证
    createFieldValidations = entity.fields
      .filter(field => field.name.toLowerCase() !== 'id') // 创建时通常不包含id
      .map(field => {
        const decorator = getValidationDecorator(field.type);
        // 除了id字段外，其他字段在创建时都设为必填
        const isRequired = field.name.toLowerCase() !== 'id';
        const requiredDecorator = isRequired ? `@Required()` : '';
        return `${requiredDecorator ? '  ' + requiredDecorator : ''}  ${decorator}\n  ${field.name}: ${field.type};`;
      })
      .join('\n');
    
    // 为更新DTO生成字段验证（所有字段都是可选的）
    updateFieldValidations = entity.fields
      .filter(field => field.name.toLowerCase() !== 'id') // 更新时不允许修改id
      .map(field => {
        const decorator = getValidationDecorator(field.type);
        return `  ${decorator}\n  ${field.name}?: ${field.type};`;
      })
      .join('\n');
  } else {
    // 默认字段
    createFieldValidations = `  @Rule(RuleType.string())
  name?: string;\n  @Rule(RuleType.string())
  code?: string;`;
    updateFieldValidations = `  @Rule(RuleType.string())
  name?: string;\n  @Rule(RuleType.string())
  code?: string;`;
  }
  
  return `import { Rule, RuleType, Required } from '@midwayjs/validate';
import { ${className} } from '../entity/${moduleName}/${moduleName}.${className.toLowerCase().replace('.', '')}.entity';
import { Create${className}DTO as CreateBaseDTO, Update${className}DTO as UpdateBaseDTO } from '../interface/${moduleName}/${className}Interface';

/**
 * 创建 ${className} 的DTO验证类
 * 对应数据库表: ${tableName}
 */
export class Create${className}DTO implements CreateBaseDTO {
${createFieldValidations}
  
  /**
   * 可以添加自定义验证方法
   */
  validate() {
    // 自定义验证逻辑
    return true;
  }
}

/**
 * 更新 ${className} 的DTO验证类
 */
export class Update${className}DTO implements UpdateBaseDTO {
${updateFieldValidations}
  
  /**
   * 可以添加自定义验证方法
   */
  validate() {
    // 自定义验证逻辑
    return true;
  }
}

/**
 * 查询 ${className} 的DTO验证类
 */
export class Query${className}DTO {
  @Rule(RuleType.number().integer().min(1))
  page?: number = 1;
  
  @Rule(RuleType.number().integer().min(1).max(100))
  pageSize?: number = 10;
  
  @Rule(RuleType.string())
  sortBy?: string = 'id';
  
  @Rule(RuleType.string().valid('ASC', 'DESC'))
  sortOrder?: 'ASC' | 'DESC' = 'DESC';
  
  @Rule(RuleType.string())
  keyword?: string;
  
  // 可以根据实体字段扩展更多查询条件验证
}

/**
 * 批量删除 ${className} 的DTO验证类
 */
export class BatchDelete${className}DTO {
  @Required()
  @Rule(RuleType.array().required().items(RuleType.union([RuleType.string(), RuleType.number()])))
  ids: (string | number)[];
}

/**
 * ID参数验证类
 */
export class IdParamDTO {
  @Required()
  @Rule(RuleType.union([RuleType.string(), RuleType.number()]))
  id: string | number;
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
    
    console.log(`开始生成DTO验证文件，共 ${entities.length} 个实体`);
    
    // 按模块分组生成DTO文件
    const moduleMap = new Map();
    
    // 按模块分组
    entities.forEach(entity => {
      if (!moduleMap.has(entity.moduleName)) {
        moduleMap.set(entity.moduleName, []);
      }
      moduleMap.get(entity.moduleName).push(entity);
    });
    
    console.log(`按模块分组后：${moduleMap.size} 个模块`);
    
    // 生成每个模块的DTO文件
    let dtoCount = 0;
    
    moduleMap.forEach((moduleEntities, moduleName) => {
      const moduleDir = path.join(DTO_DIR, moduleName);
      ensureDirectory(moduleDir);
      
      moduleEntities.forEach(entity => {
        const dtoFilePath = path.join(moduleDir, `${entity.className}DTO.ts`);
        const dtoContent = generateDTOContent(entity);
        
        fs.writeFileSync(dtoFilePath, dtoContent);
        dtoCount++;
        
        if (dtoCount % 100 === 0) {
          console.log(`已生成 ${dtoCount} 个DTO文件`);
        }
      });
    });
    
    console.log(`DTO验证文件生成完成！共生成 ${dtoCount} 个文件`);
    
  } catch (error) {
    console.error('生成DTO验证文件失败:', error);
  }
}

// 执行主函数
main();