import { ProductAttributeValue } from '../entity/product/product.productattributevalue.entity';

/**
 * ProductAttributeValue 实体接口
 * 对应数据库表: product_attribute_value
 */
export interface ProductAttributeValueInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductAttributeValue 的参数接口
 */
export interface CreateProductAttributeValueDTO extends Partial<ProductAttributeValueInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductAttributeValue 的参数接口
 */
export interface UpdateProductAttributeValueDTO extends Partial<ProductAttributeValueInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductAttributeValue 的参数接口
 */
export interface QueryProductAttributeValueDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductAttributeValueInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductAttributeValue 分页查询结果接口
 */
export interface ProductAttributeValuePageResult {
  data: ProductAttributeValue[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductAttributeValue API 响应接口
 */
export interface ProductAttributeValueResponse {
  success: boolean;
  message: string;
  data?: ProductAttributeValue | ProductAttributeValue[] | ProductAttributeValuePageResult;
  error?: string;
}
