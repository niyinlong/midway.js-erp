import { MrpBomByproductProductTemplateAttributeValueRel } from '../entity/mrp/mrp.mrpbombyproductproducttemplateattributevaluerel.entity';

/**
 * MrpBomByproductProductTemplateAttributeValueRel 实体接口
 * 对应数据库表: mrp_bom_byproduct_product_template_attribute_value_rel
 */
export interface MrpBomByproductProductTemplateAttributeValueRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpBomByproductProductTemplateAttributeValueRel 的参数接口
 */
export interface CreateMrpBomByproductProductTemplateAttributeValueRelDTO extends Partial<MrpBomByproductProductTemplateAttributeValueRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpBomByproductProductTemplateAttributeValueRel 的参数接口
 */
export interface UpdateMrpBomByproductProductTemplateAttributeValueRelDTO extends Partial<MrpBomByproductProductTemplateAttributeValueRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpBomByproductProductTemplateAttributeValueRel 的参数接口
 */
export interface QueryMrpBomByproductProductTemplateAttributeValueRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpBomByproductProductTemplateAttributeValueRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpBomByproductProductTemplateAttributeValueRel 分页查询结果接口
 */
export interface MrpBomByproductProductTemplateAttributeValueRelPageResult {
  data: MrpBomByproductProductTemplateAttributeValueRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpBomByproductProductTemplateAttributeValueRel API 响应接口
 */
export interface MrpBomByproductProductTemplateAttributeValueRelResponse {
  success: boolean;
  message: string;
  data?: MrpBomByproductProductTemplateAttributeValueRel | MrpBomByproductProductTemplateAttributeValueRel[] | MrpBomByproductProductTemplateAttributeValueRelPageResult;
  error?: string;
}
