import { ProductPricelist } from '../entity/product/product.productpricelist.entity';

/**
 * ProductPricelist 实体接口
 * 对应数据库表: product_pricelist
 */
export interface ProductPricelistInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductPricelist 的参数接口
 */
export interface CreateProductPricelistDTO extends Partial<ProductPricelistInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductPricelist 的参数接口
 */
export interface UpdateProductPricelistDTO extends Partial<ProductPricelistInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductPricelist 的参数接口
 */
export interface QueryProductPricelistDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductPricelistInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductPricelist 分页查询结果接口
 */
export interface ProductPricelistPageResult {
  data: ProductPricelist[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductPricelist API 响应接口
 */
export interface ProductPricelistResponse {
  success: boolean;
  message: string;
  data?: ProductPricelist | ProductPricelist[] | ProductPricelistPageResult;
  error?: string;
}
