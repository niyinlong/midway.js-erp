import { ProductTaxesRel } from '../entity/product/product.producttaxesrel.entity';

/**
 * ProductTaxesRel 实体接口
 * 对应数据库表: product_taxes_rel
 */
export interface ProductTaxesRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductTaxesRel 的参数接口
 */
export interface CreateProductTaxesRelDTO extends Partial<ProductTaxesRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductTaxesRel 的参数接口
 */
export interface UpdateProductTaxesRelDTO extends Partial<ProductTaxesRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductTaxesRel 的参数接口
 */
export interface QueryProductTaxesRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductTaxesRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductTaxesRel 分页查询结果接口
 */
export interface ProductTaxesRelPageResult {
  data: ProductTaxesRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductTaxesRel API 响应接口
 */
export interface ProductTaxesRelResponse {
  success: boolean;
  message: string;
  data?: ProductTaxesRel | ProductTaxesRel[] | ProductTaxesRelPageResult;
  error?: string;
}
