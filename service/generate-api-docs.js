const fs = require('fs');
const path = require('path');

// 文件路径
const ENTITY_ANALYSIS_FILE = path.join(__dirname, 'entity-analysis.json');
const API_DOCS_DIR = path.join(__dirname, 'api-docs');

// 创建目录（如果不存在）
function ensureDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// 生成API文档内容
function generateAPIDocContent(entity) {
  const moduleName = entity.moduleName;
  const className = entity.className;
  const tableName = entity.tableName;
  const lowercaseName = className.toLowerCase().replace('.', '');
  const apiPrefix = '/api/' + moduleName + '/' + lowercaseName;
  
  // 生成字段描述表格
  let fieldsTable = '| 字段名 | 类型 | 说明 |\n| --- | --- | --- |\n';
  if (entity.fields && entity.fields.length > 0) {
    fieldsTable += entity.fields.map(field => {
      return '| ' + field.name + ' | ' + field.type + ' | ' + (field.comment || '-');
    }).join('\n');
  } else {
    fieldsTable += '| id | number | 主键ID |\n| name | string | 名称 |\n| code | string | 编码 |\n| createTime | Date | 创建时间 |\n| updateTime | Date | 更新时间 |';
  }
  
  // 生成示例数据
  let exampleData = '';
  if (entity.fields && entity.fields.length > 0) {
    const exampleObj = {};
    entity.fields.forEach(field => {
      if (field.name.toLowerCase() !== 'id') {
        const type = field.type.toLowerCase();
        if (type.includes('string')) {
          exampleObj[field.name] = field.name === 'name' ? '示例数据' : field.name === 'code' ? 'EXAMPLE' : '示例' + field.name;
        } else if (type.includes('number') || type.includes('int')) {
          exampleObj[field.name] = 1;
        } else if (type.includes('boolean')) {
          exampleObj[field.name] = true;
        } else if (type.includes('date')) {
          exampleObj[field.name] = new Date().toISOString().split('T')[0];
        }
      }
    });
    exampleData = JSON.stringify(exampleObj, null, 2);
  } else {
    exampleData = JSON.stringify({ name: '示例数据', code: 'EXAMPLE' }, null, 2);
  }
  
  // 构建完整的Markdown文档
  let docContent = '';
  docContent += '# ' + className + ' API 文档\n\n';
  docContent += '## 实体说明\n\n';
  docContent += '| 项 | 说明 |\n';
  docContent += '| --- | --- |\n';
  docContent += '| 实体类名 | ' + className + ' |\n';
  docContent += '| 数据库表名 | ' + tableName + ' |\n';
  docContent += '| 所属模块 | ' + moduleName + ' |\n';
  docContent += '| API基础路径 | ' + apiPrefix + ' |\n\n';
  
  docContent += '## 字段说明\n\n';
  docContent += fieldsTable + '\n\n';
  
  docContent += '## API 接口列表\n\n';
  
  // 1. 获取单个实体详情
  docContent += '### 1. 获取单个实体详情\n\n';
  docContent += '**请求信息**\n';
  docContent += '- 方法：GET\n';
  docContent += '- 路径：' + apiPrefix + '/:id\n';
  docContent += '- 描述：根据ID获取单个' + className + '的详细信息\n\n';
  
  docContent += '**路径参数**\n';
  docContent += '| 参数名 | 类型 | 必填 | 说明 |\n';
  docContent += '| --- | --- | --- | --- |\n';
  docContent += '| id | number/string | 是 | 实体ID |\n\n';
  
  docContent += '**响应格式**\n';
  docContent += '```json\n';
  docContent += '{\n';
  docContent += '  "success": true,\n';
  docContent += '  "message": "获取成功",\n';
  docContent += '  "data": {\n';
  docContent += '    "id": 1,\n';
  docContent += '    "name": "示例数据",\n';
  docContent += '    "code": "EXAMPLE",\n';
  docContent += '    "createTime": "2024-01-01T00:00:00Z",\n';
  docContent += '    "updateTime": "2024-01-01T00:00:00Z"\n';
  docContent += '  }\n';
  docContent += '}\n';
  docContent += '```\n\n';
  
  // 2. 获取实体列表（分页）
  docContent += '### 2. 获取实体列表（分页）\n\n';
  docContent += '**请求信息**\n';
  docContent += '- 方法：GET\n';
  docContent += '- 路径：' + apiPrefix + '\n';
  docContent += '- 描述：分页获取' + className + '列表，支持关键字搜索和排序\n\n';
  
  docContent += '**查询参数**\n';
  docContent += '| 参数名 | 类型 | 必填 | 默认值 | 说明 |\n';
  docContent += '| --- | --- | --- | --- | --- |\n';
  docContent += '| page | number | 否 | 1 | 页码，从1开始 |\n';
  docContent += '| pageSize | number | 否 | 10 | 每页数量，最大100 |\n';
  docContent += '| sortBy | string | 否 | "id" | 排序字段 |\n';
  docContent += '| sortOrder | string | 否 | "DESC" | 排序方式，可选值：ASC, DESC |\n';
  docContent += '| keyword | string | 否 | - | 搜索关键字 |\n\n';
  
  docContent += '**响应格式**\n';
  docContent += '```json\n';
  docContent += '{\n';
  docContent += '  "success": true,\n';
  docContent += '  "message": "获取成功",\n';
  docContent += '  "data": {\n';
  docContent += '    "list": [\n';
  docContent += '      {\n';
  docContent += '        "id": 1,\n';
  docContent += '        "name": "示例数据1",\n';
  docContent += '        "code": "EXAMPLE1",\n';
  docContent += '        "createTime": "2024-01-01T00:00:00Z",\n';
  docContent += '        "updateTime": "2024-01-01T00:00:00Z"\n';
  docContent += '      },\n';
  docContent += '      {\n';
  docContent += '        "id": 2,\n';
  docContent += '        "name": "示例数据2",\n';
  docContent += '        "code": "EXAMPLE2",\n';
  docContent += '        "createTime": "2024-01-01T00:00:00Z",\n';
  docContent += '        "updateTime": "2024-01-01T00:00:00Z"\n';
  docContent += '      }\n';
  docContent += '    ],\n';
  docContent += '    "total": 100,\n';
  docContent += '    "page": 1,\n';
  docContent += '    "pageSize": 10\n';
  docContent += '  }\n';
  docContent += '}\n';
  docContent += '```\n\n';
  
  // 3. 新增实体
  docContent += '### 3. 新增实体\n\n';
  docContent += '**请求信息**\n';
  docContent += '- 方法：POST\n';
  docContent += '- 路径：' + apiPrefix + '\n';
  docContent += '- 描述：新增一个' + className + '实体\n\n';
  
  docContent += '**请求体**\n';
  docContent += '```json\n';
  docContent += exampleData + '\n';
  docContent += '```\n\n';
  
  docContent += '**响应格式**\n';
  docContent += '```json\n';
  docContent += '{\n';
  docContent += '  "success": true,\n';
  docContent += '  "message": "创建成功",\n';
  docContent += '  "data": {\n';
  docContent += '    "id": 1,\n';
  docContent += '    "name": "示例数据",\n';
  docContent += '    "code": "EXAMPLE",\n';
  docContent += '    "createTime": "2024-01-01T00:00:00Z",\n';
  docContent += '    "updateTime": "2024-01-01T00:00:00Z"\n';
  docContent += '  }\n';
  docContent += '}\n';
  docContent += '```\n\n';
  
  // 4. 更新实体
  docContent += '### 4. 更新实体\n\n';
  docContent += '**请求信息**\n';
  docContent += '- 方法：PUT\n';
  docContent += '- 路径：' + apiPrefix + '/:id\n';
  docContent += '- 描述：根据ID更新' + className + '实体\n\n';
  
  docContent += '**路径参数**\n';
  docContent += '| 参数名 | 类型 | 必填 | 说明 |\n';
  docContent += '| --- | --- | --- | --- |\n';
  docContent += '| id | number/string | 是 | 实体ID |\n\n';
  
  docContent += '**请求体**\n';
  docContent += '```json\n';
  docContent += '{\n';
  docContent += '  "name": "更新后的名称",\n';
  docContent += '  "code": "UPDATED"\n';
  docContent += '}\n';
  docContent += '```\n\n';
  
  docContent += '**响应格式**\n';
  docContent += '```json\n';
  docContent += '{\n';
  docContent += '  "success": true,\n';
  docContent += '  "message": "更新成功",\n';
  docContent += '  "data": {\n';
  docContent += '    "id": 1,\n';
  docContent += '    "name": "更新后的名称",\n';
  docContent += '    "code": "UPDATED",\n';
  docContent += '    "createTime": "2024-01-01T00:00:00Z",\n';
  docContent += '    "updateTime": "2024-01-01T12:00:00Z"\n';
  docContent += '  }\n';
  docContent += '}\n';
  docContent += '```\n\n';
  
  // 5. 删除实体
  docContent += '### 5. 删除实体\n\n';
  docContent += '**请求信息**\n';
  docContent += '- 方法：DELETE\n';
  docContent += '- 路径：' + apiPrefix + '/:id\n';
  docContent += '- 描述：根据ID删除' + className + '实体\n\n';
  
  docContent += '**路径参数**\n';
  docContent += '| 参数名 | 类型 | 必填 | 说明 |\n';
  docContent += '| --- | --- | --- | --- |\n';
  docContent += '| id | number/string | 是 | 实体ID |\n\n';
  
  docContent += '**响应格式**\n';
  docContent += '```json\n';
  docContent += '{\n';
  docContent += '  "success": true,\n';
  docContent += '  "message": "删除成功",\n';
  docContent += '  "data": null\n';
  docContent += '}\n';
  docContent += '```\n\n';
  
  // 6. 批量删除实体
  docContent += '### 6. 批量删除实体\n\n';
  docContent += '**请求信息**\n';
  docContent += '- 方法：DELETE\n';
  docContent += '- 路径：' + apiPrefix + '/batch\n';
  docContent += '- 描述：批量删除' + className + '实体\n\n';
  
  docContent += '**请求体**\n';
  docContent += '```json\n';
  docContent += '{\n';
  docContent += '  "ids": [1, 2, 3]\n';
  docContent += '}\n';
  docContent += '```\n\n';
  
  docContent += '**响应格式**\n';
  docContent += '```json\n';
  docContent += '{\n';
  docContent += '  "success": true,\n';
  docContent += '  "message": "批量删除成功",\n';
  docContent += '  "data": {\n';
  docContent += '    "deletedCount": 3\n';
  docContent += '  }\n';
  docContent += '}\n';
  docContent += '```\n\n';
  
  // 错误响应格式
  docContent += '## 错误响应格式\n\n';
  docContent += '```json\n';
  docContent += '{\n';
  docContent += '  "success": false,\n';
  docContent += '  "message": "错误信息描述",\n';
  docContent += '  "data": null\n';
  docContent += '}\n\n';
  docContent += '// 参数验证错误\n';
  docContent += '{\n';
  docContent += '  "success": false,\n';
  docContent += '  "message": "参数验证失败",\n';
  docContent += '  "data": {\n';
  docContent += '    "errors": [\n';
  docContent += '      {\n';
  docContent += '        "field": "name",\n';
  docContent += '        "message": "名称不能为空"\n';
  docContent += '      }\n';
  docContent += '    ]\n';
  docContent += '  }\n';
  docContent += '}\n';
  docContent += '```\n\n';
  
  // 数据结构说明
  docContent += '## 数据结构说明\n\n';
  docContent += '### 响应数据结构\n\n';
  docContent += '| 字段名 | 类型 | 说明 |\n';
  docContent += '| --- | --- | --- |\n';
  docContent += '| success | boolean | 请求是否成功 |\n';
  docContent += '| message | string | 响应消息 |\n';
  docContent += '| data | any | 响应数据，根据接口不同而变化 |\n\n';
  
  docContent += '### 分页数据结构\n\n';
  docContent += '| 字段名 | 类型 | 说明 |\n';
  docContent += '| --- | --- | --- |\n';
  docContent += '| list | array | 数据列表 |\n';
  docContent += '| total | number | 总记录数 |\n';
  docContent += '| page | number | 当前页码 |\n';
  docContent += '| pageSize | number | 每页记录数 |\n\n';
  
  // 注意事项
  docContent += '## 注意事项\n\n';
  docContent += '1. 所有接口都支持JSON格式的请求和响应\n';
  docContent += '2. 查询参数中，keyword参数会在name和code字段中进行模糊匹配\n';
  docContent += '3. 创建和更新操作会自动处理createTime和updateTime字段\n';
  docContent += '4. 删除操作通常是软删除，请确保在数据库中配置了相应的删除标记字段\n';
  docContent += '5. 批量操作时，建议一次性操作的数量不超过100个';
  
  return docContent;
}

// 主函数
function main() {
  try {
    // 读取实体分析结果
    const entities = JSON.parse(fs.readFileSync(ENTITY_ANALYSIS_FILE, 'utf8'));
    
    console.log('开始生成API文档，共 ' + entities.length + ' 个实体');
    
    // 按模块分组生成API文档
    const moduleMap = new Map();
    
    // 按模块分组
    entities.forEach(entity => {
      if (!moduleMap.has(entity.moduleName)) {
        moduleMap.set(entity.moduleName, []);
      }
      moduleMap.get(entity.moduleName).push(entity);
    });
    
    console.log('按模块分组后：' + moduleMap.size + ' 个模块');
    
    // 生成每个模块的API文档
    let docCount = 0;
    
    moduleMap.forEach((moduleEntities, moduleName) => {
      const moduleDir = path.join(API_DOCS_DIR, moduleName);
      ensureDirectory(moduleDir);
      
      moduleEntities.forEach(entity => {
        const docFilePath = path.join(moduleDir, entity.className + '.md');
        const docContent = generateAPIDocContent(entity);
        
        fs.writeFileSync(docFilePath, docContent);
        docCount++;
        
        if (docCount % 100 === 0) {
          console.log('已生成 ' + docCount + ' 个API文档文件');
        }
      });
    });
    
    console.log('API文档生成完成！共生成 ' + docCount + ' 个文件');
    
  } catch (error) {
    console.error('生成API文档失败:', error);
  }
}

// 执行主函数
main();