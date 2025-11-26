const fs = require('fs');
const path = require('path');

// 文件路径
const ENTITY_ANALYSIS_FILE = path.join(__dirname, 'entity-analysis.json');
const SERVICE_DIR = path.join(__dirname, 'src', 'service');

/**
 * 生成Service类内容
 * @param {Object} entity 实体信息
 * @returns {string} Service类代码
 */
function generateServiceContent(entity) {
  const moduleName = entity.moduleName;
  const className = entity.className;
  const tableName = entity.tableName;
  
  // 首字母小写的实体名称
  const entityName = className.charAt(0).toLowerCase() + className.slice(1);
  
  return `import { Inject, Provide } from '@midwayjs/core';
import { InjectRepository } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { ${className} } from '../../entity/${moduleName}/${moduleName}.${className.toLowerCase().replace('.', '')}.entity';
import { BaseService } from '../base/BaseService';

/**
 * ${className} 服务类
 * 处理 ${tableName} 表的数据库操作
 */
@Provide()
export class ${className}Service extends BaseService<${className}> {
  constructor(
    @InjectRepository(${className})
    repository: Repository<${className}>
  ) {
    super(repository);
  }

  /**
   * 根据自定义条件查询${className}
   * 可以在此添加业务相关的查询方法
   */
  async findByCustomCondition(condition: any) {
    return this.findOne(condition);
  }

  /**
   * 高级查询方法示例
   * 可根据业务需求扩展
   */
  async advancedSearch(params: {
    keyword?: string;
    status?: string;
    startDate?: Date;
    endDate?: Date;
    page?: number;
    pageSize?: number;
  }) {
    const where: any = {};
    
    // 根据实体字段动态构建查询条件
    // 这里可以根据实际字段名进行调整
    if (params.keyword) {
      // 假设有name或code字段可搜索
      where.$or = [
        { name: { $like: '%' + params.keyword + '%' } },
        { code: { $like: '%' + params.keyword + '%' } },
      ];
    }
    
    if (params.status) {
      where.status = params.status;
    }
    
    if (params.startDate && params.endDate) {
      where.createTime = {
        $gte: params.startDate,
        $lte: params.endDate,
      };
    }
    
    // 执行分页查询
    return this.findWithPagination(
      params.page || 1,
      params.pageSize || 10,
      where
    );
  }
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
    
    console.log(`开始生成Service类，共 ${entities.length} 个实体`);
    
    // 按模块分组生成Service
    const moduleMap = new Map();
    
    // 按模块分组
    entities.forEach(entity => {
      if (!moduleMap.has(entity.moduleName)) {
        moduleMap.set(entity.moduleName, []);
      }
      moduleMap.get(entity.moduleName).push(entity);
    });
    
    console.log(`按模块分组后：${moduleMap.size} 个模块`);
    
    // 生成每个模块的Service文件
    let serviceCount = 0;
    
    moduleMap.forEach((moduleEntities, moduleName) => {
      const moduleDir = path.join(SERVICE_DIR, moduleName);
      ensureDirectory(moduleDir);
      
      moduleEntities.forEach(entity => {
        const serviceFilePath = path.join(moduleDir, `${entity.className}Service.ts`);
        const serviceContent = generateServiceContent(entity);
        
        fs.writeFileSync(serviceFilePath, serviceContent);
        serviceCount++;
        
        if (serviceCount % 100 === 0) {
          console.log(`已生成 ${serviceCount} 个Service文件`);
        }
      });
    });
    
    console.log(`Service文件生成完成！共生成 ${serviceCount} 个文件`);
    
  } catch (error) {
    console.error('生成Service类失败:', error);
  }
}

// 执行主函数
main();