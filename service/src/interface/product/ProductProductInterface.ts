import { ProductProduct } from '../entity/product/product.productproduct.entity';

/**
 * ProductProduct 实体接口
 * 对应数据库表: product_product
 */
export interface ProductProductInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductProduct 的参数接口
 */
export interface CreateProductProductDTO extends Partial<ProductProductInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductProduct 的参数接口
 */
export interface UpdateProductProductDTO extends Partial<ProductProductInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductProduct 的参数接口
 */
export interface QueryProductProductDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductProductInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductProduct 分页查询结果接口
 */
export interface ProductProductPageResult {
  data: ProductProduct[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductProduct API 响应接口
 */
export interface ProductProductResponse {
  success: boolean;
  message: string;
  data?: ProductProduct | ProductProduct[] | ProductProductPageResult;
  error?: string;
}
