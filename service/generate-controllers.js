const fs = require('fs');
const path = require('path');

// 文件路径
const ENTITY_ANALYSIS_FILE = path.join(__dirname, 'entity-analysis.json');
const CONTROLLER_DIR = path.join(__dirname, 'src', 'controller');

/**
 * 生成Controller类内容
 * @param {Object} entity 实体信息
 * @returns {string} Controller类代码
 */
function generateControllerContent(entity) {
  const moduleName = entity.moduleName;
  const className = entity.className;
  const tableName = entity.tableName;
  
  // 生成API路径（使用下划线分隔）
  const apiPath = `/${moduleName}/${tableName.toLowerCase()}`;
  
  // 首字母小写的实体名称
  const entityName = className.charAt(0).toLowerCase() + className.slice(1);
  
  return `import { Controller, Get, Post, Put, Delete, Inject, Query, Body, Param } from '@midwayjs/core';
import { BaseController } from '../base/BaseController';
import { ${className} } from '../../entity/${moduleName}/${moduleName}.${className.toLowerCase().replace('.', '')}.entity';
import { ${className}Service } from '../../service/${moduleName}/${className}Service';
import {
  Create${className}DTO,
  Update${className}DTO,
  Query${className}DTO,
  ${className}Response
} from '../../interface/${moduleName}/${className}Interface';

/**
 * ${className} 控制器
 * 处理 ${tableName} 相关的HTTP请求
 */
@Controller(apiPath)
export class ${className}Controller extends BaseController<${className}> {
  constructor(
    @Inject()
    private ${entityName}Service: ${className}Service
  ) {
    super(${entityName}Service);
  }

  /**
   * 获取单个${className}
   * @param id 实体ID
   * @returns ${className}对象
   */
  @Get('/:id')
  async getById(@Param('id') id: string) {
    // BaseController中的getById方法已经处理了响应
    return this.getById({
      params: { id },
      body: {},
      query: {},
      status: (code) => {},
      set body(data: any) {}
    } as any);
  }

  /**
   * 获取${className}列表（支持分页）
   * @param query 查询参数
   * @returns 分页查询结果
   */
  @Get()
  async list(@Query() query: Query${className}DTO) {
    // BaseController中的list方法已经处理了响应
    return this.list({
      query,
      body: {},
      params: {},
      status: (code) => {},
      set body(data: any) {}
    } as any);
  }

  /**
   * 创建新的${className}
   * @param data 创建数据
   * @returns 创建的${className}对象
   */
  @Post()
  async create(@Body() data: Create${className}DTO) {
    // BaseController中的create方法已经处理了响应
    return this.create({
      body: data,
      query: {},
      params: {},
      status: (code) => {},
      set body(response: any) {}
    } as any);
  }

  /**
   * 更新${className}
   * @param id 实体ID
   * @param data 更新数据
   * @returns 更新后的${className}对象
   */
  @Put('/:id')
  async update(@Param('id') id: string, @Body() data: Update${className}DTO) {
    // BaseController中的update方法已经处理了响应
    return this.update({
      params: { id },
      body: data,
      query: {},
      status: (code) => {},
      set body(response: any) {}
    } as any);
  }

  /**
   * 删除${className}
   * @param id 实体ID
   * @returns 删除结果
   */
  @Delete('/:id')
  async delete(@Param('id') id: string) {
    // BaseController中的delete方法已经处理了响应
    return this.delete({
      params: { id },
      body: {},
      query: {},
      status: (code) => {},
      set body(response: any) {}
    } as any);
  }

  /**
   * 批量删除${className}
   * @param body 包含ids数组的请求体
   * @returns 删除结果
   */
  @Delete('/batch')
  async batchDelete(@Body() body: { ids: (string | number)[] }) {
    // BaseController中的batchDelete方法已经处理了响应
    return this.batchDelete({
      body,
      query: {},
      params: {},
      status: (code) => {},
      set body(response: any) {}
    } as any);
  }

  /**
   * 自定义查询方法示例
   * 可以根据业务需求扩展更多接口
   */
  @Get('/search/advanced')
  async advancedSearch(@Query() params: any) {
    try {
      const result = await this.${entityName}Service.advancedSearch(params);
      this.success({
        status: (code) => {},
        set body(data: any) {}
      } as any, result, '查询成功');
    } catch (error) {
      this.error({
        status: (code) => {},
        set body(data: any) {}
      } as any, '查询失败', 500, error);
    }
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
    
    console.log(`开始生成Controller类，共 ${entities.length} 个实体`);
    
    // 按模块分组生成Controller
    const moduleMap = new Map();
    
    // 按模块分组
    entities.forEach(entity => {
      if (!moduleMap.has(entity.moduleName)) {
        moduleMap.set(entity.moduleName, []);
      }
      moduleMap.get(entity.moduleName).push(entity);
    });
    
    console.log(`按模块分组后：${moduleMap.size} 个模块`);
    
    // 生成每个模块的Controller文件
    let controllerCount = 0;
    
    moduleMap.forEach((moduleEntities, moduleName) => {
      const moduleDir = path.join(CONTROLLER_DIR, moduleName);
      ensureDirectory(moduleDir);
      
      moduleEntities.forEach(entity => {
        const controllerFilePath = path.join(moduleDir, `${entity.className}Controller.ts`);
        const controllerContent = generateControllerContent(entity);
        
        fs.writeFileSync(controllerFilePath, controllerContent);
        controllerCount++;
        
        if (controllerCount % 100 === 0) {
          console.log(`已生成 ${controllerCount} 个Controller文件`);
        }
      });
    });
    
    console.log(`Controller文件生成完成！共生成 ${controllerCount} 个文件`);
    
  } catch (error) {
    console.error('生成Controller类失败:', error);
  }
}

// 执行主函数
main();