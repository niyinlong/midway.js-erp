import { TemplateAttributeValueStockMoveRel } from '../entity/template/template.templateattributevaluestockmoverel.entity';

/**
 * TemplateAttributeValueStockMoveRel 实体接口
 * 对应数据库表: template_attribute_value_stock_move_rel
 */
export interface TemplateAttributeValueStockMoveRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 TemplateAttributeValueStockMoveRel 的参数接口
 */
export interface CreateTemplateAttributeValueStockMoveRelDTO extends Partial<TemplateAttributeValueStockMoveRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 TemplateAttributeValueStockMoveRel 的参数接口
 */
export interface UpdateTemplateAttributeValueStockMoveRelDTO extends Partial<TemplateAttributeValueStockMoveRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 TemplateAttributeValueStockMoveRel 的参数接口
 */
export interface QueryTemplateAttributeValueStockMoveRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof TemplateAttributeValueStockMoveRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * TemplateAttributeValueStockMoveRel 分页查询结果接口
 */
export interface TemplateAttributeValueStockMoveRelPageResult {
  data: TemplateAttributeValueStockMoveRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * TemplateAttributeValueStockMoveRel API 响应接口
 */
export interface TemplateAttributeValueStockMoveRelResponse {
  success: boolean;
  message: string;
  data?: TemplateAttributeValueStockMoveRel | TemplateAttributeValueStockMoveRel[] | TemplateAttributeValueStockMoveRelPageResult;
  error?: string;
}
