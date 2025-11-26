import { ProductAttribute } from '../entity/product/product.productattribute.entity';

/**
 * ProductAttribute 实体接口
 * 对应数据库表: product_attribute
 */
export interface ProductAttributeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductAttribute 的参数接口
 */
export interface CreateProductAttributeDTO extends Partial<ProductAttributeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductAttribute 的参数接口
 */
export interface UpdateProductAttributeDTO extends Partial<ProductAttributeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductAttribute 的参数接口
 */
export interface QueryProductAttributeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductAttributeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductAttribute 分页查询结果接口
 */
export interface ProductAttributePageResult {
  data: ProductAttribute[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductAttribute API 响应接口
 */
export interface ProductAttributeResponse {
  success: boolean;
  message: string;
  data?: ProductAttribute | ProductAttribute[] | ProductAttributePageResult;
  error?: string;
}
