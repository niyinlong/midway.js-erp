import { ProductTemplateAttributeLine } from '../entity/product/product.producttemplateattributeline.entity';

/**
 * ProductTemplateAttributeLine 实体接口
 * 对应数据库表: product_template_attribute_line
 */
export interface ProductTemplateAttributeLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductTemplateAttributeLine 的参数接口
 */
export interface CreateProductTemplateAttributeLineDTO extends Partial<ProductTemplateAttributeLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductTemplateAttributeLine 的参数接口
 */
export interface UpdateProductTemplateAttributeLineDTO extends Partial<ProductTemplateAttributeLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductTemplateAttributeLine 的参数接口
 */
export interface QueryProductTemplateAttributeLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductTemplateAttributeLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductTemplateAttributeLine 分页查询结果接口
 */
export interface ProductTemplateAttributeLinePageResult {
  data: ProductTemplateAttributeLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductTemplateAttributeLine API 响应接口
 */
export interface ProductTemplateAttributeLineResponse {
  success: boolean;
  message: string;
  data?: ProductTemplateAttributeLine | ProductTemplateAttributeLine[] | ProductTemplateAttributeLinePageResult;
  error?: string;
}
