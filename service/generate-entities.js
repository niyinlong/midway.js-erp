const fs = require('fs');
const path = require('path');

// 读取完整分析结果
const tableData = JSON.parse(fs.readFileSync(path.join(__dirname, 'table-analysis-full.json'), 'utf8'));
console.log(`总共找到 ${tableData.length} 个表`);

// 确保实体目录存在
const entityDir = path.join(__dirname, 'src', 'entity');
if (!fs.existsSync(entityDir)) {
  fs.mkdirSync(entityDir, { recursive: true });
}

// PostgreSQL 数据类型到 TypeScript/TypeORM 类型的映射
function mapDataType(postgresType) {
  switch (postgresType.toLowerCase()) {
    case 'integer':
    case 'numeric':
      return { type: 'number', typeOrmType: 'int' };
    case 'boolean':
      return { type: 'boolean', typeOrmType: 'boolean' };
    case 'character varying':
    case 'character':
    case 'text':
      return { type: 'string', typeOrmType: 'varchar' };
    case 'timestamp':
    case 'timestamp without time zone':
    case 'date':
      return { type: 'Date', typeOrmType: 'datetime' };
    case 'jsonb':
      return { type: 'object', typeOrmType: 'jsonb' };
    case 'bytea':
      return { type: 'Buffer', typeOrmType: 'bytea' };
    default:
      console.warn(`未知的数据类型: ${postgresType}，默认为 string`);
      return { type: 'string', typeOrmType: 'varchar' };
  }
}

// 转换表名为驼峰命名法并首字母大写
function toEntityName(tableName) {
  // 处理带下划线的表名
  return tableName.split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

// 提取实体名称的前缀
function extractPrefix(entityName) {
  // 查找大写字母的位置，提取第一个单词作为前缀
  // 例如 AccountAccount -> Account
  // StockMoveLine -> Stock
  const matches = entityName.match(/^([A-Z][a-z]*)/);
  if (matches && matches[1]) {
    return matches[1].toLowerCase();
  }
  return 'common'; // 默认前缀
}

// 生成 TypeORM 实体类
function generateEntity(table) {
  const entityName = toEntityName(table.name);
  const dataTypes = {};
  
  // 构建字段映射
  table.fields.forEach(field => {
    dataTypes[field.name] = mapDataType(field.type);
  });
  
  // 检查是否有 id 字段作为主键
  const hasIdField = table.fields.some(field => field.name === 'id');
  
  let entityContent = `import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

`;
  
  // 添加类注释
  if (table.comment) {
    entityContent += `/**
 * ${table.comment}
 */
`;
  }
  
  entityContent += `@Entity('${table.name}')
export class ${entityName} {
`;
  
  // 添加字段
  table.fields.forEach(field => {
    const mappedType = dataTypes[field.name];
    
    // 添加字段注释
    if (field.comment) {
      entityContent += `  /**
   * ${field.comment}
   */
`;
    }
    
    // 添加字段装饰器和定义
    if (field.name === 'id' && hasIdField) {
      entityContent += `  @PrimaryGeneratedColumn()
  ${field.name}: ${mappedType.type};
`;
    } else if (field.name.includes('_id') && field.name !== 'id') {
      // 尝试检测外键关系
      const relationEntityName = toEntityName(field.name.replace('_id', ''));
      entityContent += `  @Column({
    type: '${mappedType.typeOrmType}'
  })
  ${field.name}: ${mappedType.type};

  // @ManyToOne(() => ${relationEntityName})
  // @JoinColumn({ name: '${field.name}' })
  // ${field.name.replace('_id', '')}: ${relationEntityName};
`;
    } else {
      entityContent += `  @Column({
    type: '${mappedType.typeOrmType}'
  })
  ${field.name}: ${mappedType.type};
`;
    }
    
    entityContent += '\n';
  });
  
  entityContent += `}`;
  
  return {
    name: entityName,
    content: entityContent
  };
}

// 生成所有实体类
function generateAllEntities() {
  console.log('开始生成 TypeORM 实体类...');
  
  const entities = [];
  
  tableData.forEach(table => {
    // 不再跳过关联表，而是全部生成
    // if (table.comment && table.comment.startsWith('RELATION BETWEEN')) {
    //   console.log(`跳过关联表: ${table.name}`);
    //   return;
    // }
    
    try {
      const entity = generateEntity(table);
      entities.push(entity);
      console.log(`生成实体: ${entity.name}`);
    } catch (error) {
      console.error(`生成实体 ${table.name} 时出错:`, error.message);
    }
  });
  
  return entities;
}

// 将实体类写入文件
function writeEntitiesToFiles(entities) {
  console.log('\n将实体类写入文件...');
  
  entities.forEach(entity => {
    // 提取前缀
    const prefix = extractPrefix(entity.name);
    
    // 创建前缀文件夹
    const prefixDir = path.join(entityDir, prefix);
    if (!fs.existsSync(prefixDir)) {
      fs.mkdirSync(prefixDir, { recursive: true });
    }
    
    // 生成新的文件名 {prefix}.entity.ts
    // 如果是关联表或特殊表，可以添加后缀以避免冲突
    let fileName;
    if (entity.name === toEntityName(prefix)) {
      // 如果实体名称正好是前缀的驼峰形式，直接使用前缀
      fileName = `${prefix}.entity.ts`;
    } else {
      // 否则添加后缀以避免冲突
      const suffix = entity.name.substring(prefix.length);
      fileName = `${prefix}${suffix ? '.' + suffix.toLowerCase() : ''}.entity.ts`;
    }
    
    const filePath = path.join(prefixDir, fileName);
    fs.writeFileSync(filePath, entity.content);
    console.log(`写入文件: ${prefix}/${fileName}`);
  });
  
  console.log(`\n成功生成 ${entities.length} 个实体类`);
}

// 执行生成
const entities = generateAllEntities();
writeEntitiesToFiles(entities);