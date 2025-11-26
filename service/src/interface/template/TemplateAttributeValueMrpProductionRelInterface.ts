import { TemplateAttributeValueMrpProductionRel } from '../entity/template/template.templateattributevaluemrpproductionrel.entity';

/**
 * TemplateAttributeValueMrpProductionRel 实体接口
 * 对应数据库表: template_attribute_value_mrp_production_rel
 */
export interface TemplateAttributeValueMrpProductionRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 TemplateAttributeValueMrpProductionRel 的参数接口
 */
export interface CreateTemplateAttributeValueMrpProductionRelDTO extends Partial<TemplateAttributeValueMrpProductionRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 TemplateAttributeValueMrpProductionRel 的参数接口
 */
export interface UpdateTemplateAttributeValueMrpProductionRelDTO extends Partial<TemplateAttributeValueMrpProductionRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 TemplateAttributeValueMrpProductionRel 的参数接口
 */
export interface QueryTemplateAttributeValueMrpProductionRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof TemplateAttributeValueMrpProductionRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * TemplateAttributeValueMrpProductionRel 分页查询结果接口
 */
export interface TemplateAttributeValueMrpProductionRelPageResult {
  data: TemplateAttributeValueMrpProductionRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * TemplateAttributeValueMrpProductionRel API 响应接口
 */
export interface TemplateAttributeValueMrpProductionRelResponse {
  success: boolean;
  message: string;
  data?: TemplateAttributeValueMrpProductionRel | TemplateAttributeValueMrpProductionRel[] | TemplateAttributeValueMrpProductionRelPageResult;
  error?: string;
}
