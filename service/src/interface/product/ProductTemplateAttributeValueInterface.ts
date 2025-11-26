import { ProductTemplateAttributeValue } from '../entity/product/product.producttemplateattributevalue.entity';

/**
 * ProductTemplateAttributeValue 实体接口
 * 对应数据库表: product_template_attribute_value
 */
export interface ProductTemplateAttributeValueInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductTemplateAttributeValue 的参数接口
 */
export interface CreateProductTemplateAttributeValueDTO extends Partial<ProductTemplateAttributeValueInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductTemplateAttributeValue 的参数接口
 */
export interface UpdateProductTemplateAttributeValueDTO extends Partial<ProductTemplateAttributeValueInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductTemplateAttributeValue 的参数接口
 */
export interface QueryProductTemplateAttributeValueDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductTemplateAttributeValueInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductTemplateAttributeValue 分页查询结果接口
 */
export interface ProductTemplateAttributeValuePageResult {
  data: ProductTemplateAttributeValue[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductTemplateAttributeValue API 响应接口
 */
export interface ProductTemplateAttributeValueResponse {
  success: boolean;
  message: string;
  data?: ProductTemplateAttributeValue | ProductTemplateAttributeValue[] | ProductTemplateAttributeValuePageResult;
  error?: string;
}
