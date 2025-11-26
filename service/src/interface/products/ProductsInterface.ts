import { Products } from '../entity/products/products.products.entity';

/**
 * Products 实体接口
 * 对应数据库表: Products
 */
export interface ProductsInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 Products 的参数接口
 */
export interface CreateProductsDTO extends Partial<ProductsInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 Products 的参数接口
 */
export interface UpdateProductsDTO extends Partial<ProductsInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 Products 的参数接口
 */
export interface QueryProductsDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductsInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * Products 分页查询结果接口
 */
export interface ProductsPageResult {
  data: Products[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * Products API 响应接口
 */
export interface ProductsResponse {
  success: boolean;
  message: string;
  data?: Products | Products[] | ProductsPageResult;
  error?: string;
}
