import { ProductTemplateAttributeValuePurchaseOrderLineRel } from '../entity/product/product.producttemplateattributevaluepurchaseorderlinerel.entity';

/**
 * ProductTemplateAttributeValuePurchaseOrderLineRel 实体接口
 * 对应数据库表: product_template_attribute_value_purchase_order_line_rel
 */
export interface ProductTemplateAttributeValuePurchaseOrderLineRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductTemplateAttributeValuePurchaseOrderLineRel 的参数接口
 */
export interface CreateProductTemplateAttributeValuePurchaseOrderLineRelDTO extends Partial<ProductTemplateAttributeValuePurchaseOrderLineRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductTemplateAttributeValuePurchaseOrderLineRel 的参数接口
 */
export interface UpdateProductTemplateAttributeValuePurchaseOrderLineRelDTO extends Partial<ProductTemplateAttributeValuePurchaseOrderLineRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductTemplateAttributeValuePurchaseOrderLineRel 的参数接口
 */
export interface QueryProductTemplateAttributeValuePurchaseOrderLineRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductTemplateAttributeValuePurchaseOrderLineRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductTemplateAttributeValuePurchaseOrderLineRel 分页查询结果接口
 */
export interface ProductTemplateAttributeValuePurchaseOrderLineRelPageResult {
  data: ProductTemplateAttributeValuePurchaseOrderLineRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductTemplateAttributeValuePurchaseOrderLineRel API 响应接口
 */
export interface ProductTemplateAttributeValuePurchaseOrderLineRelResponse {
  success: boolean;
  message: string;
  data?: ProductTemplateAttributeValuePurchaseOrderLineRel | ProductTemplateAttributeValuePurchaseOrderLineRel[] | ProductTemplateAttributeValuePurchaseOrderLineRelPageResult;
  error?: string;
}
