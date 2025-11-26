import { PropertiesBaseDefinition } from '../entity/properties/properties.propertiesbasedefinition.entity';

/**
 * PropertiesBaseDefinition 实体接口
 * 对应数据库表: properties_base_definition
 */
export interface PropertiesBaseDefinitionInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PropertiesBaseDefinition 的参数接口
 */
export interface CreatePropertiesBaseDefinitionDTO extends Partial<PropertiesBaseDefinitionInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PropertiesBaseDefinition 的参数接口
 */
export interface UpdatePropertiesBaseDefinitionDTO extends Partial<PropertiesBaseDefinitionInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PropertiesBaseDefinition 的参数接口
 */
export interface QueryPropertiesBaseDefinitionDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PropertiesBaseDefinitionInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PropertiesBaseDefinition 分页查询结果接口
 */
export interface PropertiesBaseDefinitionPageResult {
  data: PropertiesBaseDefinition[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PropertiesBaseDefinition API 响应接口
 */
export interface PropertiesBaseDefinitionResponse {
  success: boolean;
  message: string;
  data?: PropertiesBaseDefinition | PropertiesBaseDefinition[] | PropertiesBaseDefinitionPageResult;
  error?: string;
}
