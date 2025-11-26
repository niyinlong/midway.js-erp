import { ProductOptionalRel } from '../entity/product/product.productoptionalrel.entity';

/**
 * ProductOptionalRel 实体接口
 * 对应数据库表: product_optional_rel
 */
export interface ProductOptionalRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductOptionalRel 的参数接口
 */
export interface CreateProductOptionalRelDTO extends Partial<ProductOptionalRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductOptionalRel 的参数接口
 */
export interface UpdateProductOptionalRelDTO extends Partial<ProductOptionalRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductOptionalRel 的参数接口
 */
export interface QueryProductOptionalRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductOptionalRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductOptionalRel 分页查询结果接口
 */
export interface ProductOptionalRelPageResult {
  data: ProductOptionalRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductOptionalRel API 响应接口
 */
export interface ProductOptionalRelResponse {
  success: boolean;
  message: string;
  data?: ProductOptionalRel | ProductOptionalRel[] | ProductOptionalRelPageResult;
  error?: string;
}
