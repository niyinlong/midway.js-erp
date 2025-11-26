import { MrpRoutingWorkcenterProductTemplateAttributeValueRel } from '../entity/mrp/mrp.mrproutingworkcenterproducttemplateattributevaluerel.entity';

/**
 * MrpRoutingWorkcenterProductTemplateAttributeValueRel 实体接口
 * 对应数据库表: mrp_routing_workcenter_product_template_attribute_value_rel
 */
export interface MrpRoutingWorkcenterProductTemplateAttributeValueRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpRoutingWorkcenterProductTemplateAttributeValueRel 的参数接口
 */
export interface CreateMrpRoutingWorkcenterProductTemplateAttributeValueRelDTO extends Partial<MrpRoutingWorkcenterProductTemplateAttributeValueRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpRoutingWorkcenterProductTemplateAttributeValueRel 的参数接口
 */
export interface UpdateMrpRoutingWorkcenterProductTemplateAttributeValueRelDTO extends Partial<MrpRoutingWorkcenterProductTemplateAttributeValueRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpRoutingWorkcenterProductTemplateAttributeValueRel 的参数接口
 */
export interface QueryMrpRoutingWorkcenterProductTemplateAttributeValueRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpRoutingWorkcenterProductTemplateAttributeValueRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpRoutingWorkcenterProductTemplateAttributeValueRel 分页查询结果接口
 */
export interface MrpRoutingWorkcenterProductTemplateAttributeValueRelPageResult {
  data: MrpRoutingWorkcenterProductTemplateAttributeValueRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpRoutingWorkcenterProductTemplateAttributeValueRel API 响应接口
 */
export interface MrpRoutingWorkcenterProductTemplateAttributeValueRelResponse {
  success: boolean;
  message: string;
  data?: MrpRoutingWorkcenterProductTemplateAttributeValueRel | MrpRoutingWorkcenterProductTemplateAttributeValueRel[] | MrpRoutingWorkcenterProductTemplateAttributeValueRelPageResult;
  error?: string;
}
