import { ProductReplenish } from '../entity/product/product.productreplenish.entity';

/**
 * ProductReplenish 实体接口
 * 对应数据库表: product_replenish
 */
export interface ProductReplenishInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductReplenish 的参数接口
 */
export interface CreateProductReplenishDTO extends Partial<ProductReplenishInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductReplenish 的参数接口
 */
export interface UpdateProductReplenishDTO extends Partial<ProductReplenishInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductReplenish 的参数接口
 */
export interface QueryProductReplenishDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductReplenishInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductReplenish 分页查询结果接口
 */
export interface ProductReplenishPageResult {
  data: ProductReplenish[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductReplenish API 响应接口
 */
export interface ProductReplenishResponse {
  success: boolean;
  message: string;
  data?: ProductReplenish | ProductReplenish[] | ProductReplenishPageResult;
  error?: string;
}
