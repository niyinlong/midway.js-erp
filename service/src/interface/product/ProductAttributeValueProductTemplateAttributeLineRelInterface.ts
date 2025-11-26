import { ProductAttributeValueProductTemplateAttributeLineRel } from '../entity/product/product.productattributevalueproducttemplateattributelinerel.entity';

/**
 * ProductAttributeValueProductTemplateAttributeLineRel 实体接口
 * 对应数据库表: product_attribute_value_product_template_attribute_line_rel
 */
export interface ProductAttributeValueProductTemplateAttributeLineRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductAttributeValueProductTemplateAttributeLineRel 的参数接口
 */
export interface CreateProductAttributeValueProductTemplateAttributeLineRelDTO extends Partial<ProductAttributeValueProductTemplateAttributeLineRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductAttributeValueProductTemplateAttributeLineRel 的参数接口
 */
export interface UpdateProductAttributeValueProductTemplateAttributeLineRelDTO extends Partial<ProductAttributeValueProductTemplateAttributeLineRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductAttributeValueProductTemplateAttributeLineRel 的参数接口
 */
export interface QueryProductAttributeValueProductTemplateAttributeLineRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductAttributeValueProductTemplateAttributeLineRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductAttributeValueProductTemplateAttributeLineRel 分页查询结果接口
 */
export interface ProductAttributeValueProductTemplateAttributeLineRelPageResult {
  data: ProductAttributeValueProductTemplateAttributeLineRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductAttributeValueProductTemplateAttributeLineRel API 响应接口
 */
export interface ProductAttributeValueProductTemplateAttributeLineRelResponse {
  success: boolean;
  message: string;
  data?: ProductAttributeValueProductTemplateAttributeLineRel | ProductAttributeValueProductTemplateAttributeLineRel[] | ProductAttributeValueProductTemplateAttributeLineRelPageResult;
  error?: string;
}
