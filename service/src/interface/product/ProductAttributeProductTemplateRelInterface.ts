import { ProductAttributeProductTemplateRel } from '../entity/product/product.productattributeproducttemplaterel.entity';

/**
 * ProductAttributeProductTemplateRel 实体接口
 * 对应数据库表: product_attribute_product_template_rel
 */
export interface ProductAttributeProductTemplateRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductAttributeProductTemplateRel 的参数接口
 */
export interface CreateProductAttributeProductTemplateRelDTO extends Partial<ProductAttributeProductTemplateRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductAttributeProductTemplateRel 的参数接口
 */
export interface UpdateProductAttributeProductTemplateRelDTO extends Partial<ProductAttributeProductTemplateRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductAttributeProductTemplateRel 的参数接口
 */
export interface QueryProductAttributeProductTemplateRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductAttributeProductTemplateRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductAttributeProductTemplateRel 分页查询结果接口
 */
export interface ProductAttributeProductTemplateRelPageResult {
  data: ProductAttributeProductTemplateRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductAttributeProductTemplateRel API 响应接口
 */
export interface ProductAttributeProductTemplateRelResponse {
  success: boolean;
  message: string;
  data?: ProductAttributeProductTemplateRel | ProductAttributeProductTemplateRel[] | ProductAttributeProductTemplateRelPageResult;
  error?: string;
}
