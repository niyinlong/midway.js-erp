import { ProductRemoval } from '../entity/product/product.productremoval.entity';

/**
 * ProductRemoval 实体接口
 * 对应数据库表: product_removal
 */
export interface ProductRemovalInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductRemoval 的参数接口
 */
export interface CreateProductRemovalDTO extends Partial<ProductRemovalInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductRemoval 的参数接口
 */
export interface UpdateProductRemovalDTO extends Partial<ProductRemovalInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductRemoval 的参数接口
 */
export interface QueryProductRemovalDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductRemovalInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductRemoval 分页查询结果接口
 */
export interface ProductRemovalPageResult {
  data: ProductRemoval[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductRemoval API 响应接口
 */
export interface ProductRemovalResponse {
  success: boolean;
  message: string;
  data?: ProductRemoval | ProductRemoval[] | ProductRemovalPageResult;
  error?: string;
}
