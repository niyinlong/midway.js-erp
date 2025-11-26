import { ProductAttributeCustomValue } from '../entity/product/product.productattributecustomvalue.entity';

/**
 * ProductAttributeCustomValue 实体接口
 * 对应数据库表: product_attribute_custom_value
 */
export interface ProductAttributeCustomValueInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductAttributeCustomValue 的参数接口
 */
export interface CreateProductAttributeCustomValueDTO extends Partial<ProductAttributeCustomValueInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductAttributeCustomValue 的参数接口
 */
export interface UpdateProductAttributeCustomValueDTO extends Partial<ProductAttributeCustomValueInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductAttributeCustomValue 的参数接口
 */
export interface QueryProductAttributeCustomValueDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductAttributeCustomValueInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductAttributeCustomValue 分页查询结果接口
 */
export interface ProductAttributeCustomValuePageResult {
  data: ProductAttributeCustomValue[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductAttributeCustomValue API 响应接口
 */
export interface ProductAttributeCustomValueResponse {
  success: boolean;
  message: string;
  data?: ProductAttributeCustomValue | ProductAttributeCustomValue[] | ProductAttributeCustomValuePageResult;
  error?: string;
}
