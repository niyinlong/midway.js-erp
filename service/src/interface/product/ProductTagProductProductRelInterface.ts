import { ProductTagProductProductRel } from '../entity/product/product.producttagproductproductrel.entity';

/**
 * ProductTagProductProductRel 实体接口
 * 对应数据库表: product_tag_product_product_rel
 */
export interface ProductTagProductProductRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductTagProductProductRel 的参数接口
 */
export interface CreateProductTagProductProductRelDTO extends Partial<ProductTagProductProductRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductTagProductProductRel 的参数接口
 */
export interface UpdateProductTagProductProductRelDTO extends Partial<ProductTagProductProductRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductTagProductProductRel 的参数接口
 */
export interface QueryProductTagProductProductRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductTagProductProductRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductTagProductProductRel 分页查询结果接口
 */
export interface ProductTagProductProductRelPageResult {
  data: ProductTagProductProductRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductTagProductProductRel API 响应接口
 */
export interface ProductTagProductProductRelResponse {
  success: boolean;
  message: string;
  data?: ProductTagProductProductRel | ProductTagProductProductRel[] | ProductTagProductProductRelPageResult;
  error?: string;
}
