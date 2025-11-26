import { ProductVariantCombination } from '../entity/product/product.productvariantcombination.entity';

/**
 * ProductVariantCombination 实体接口
 * 对应数据库表: product_variant_combination
 */
export interface ProductVariantCombinationInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductVariantCombination 的参数接口
 */
export interface CreateProductVariantCombinationDTO extends Partial<ProductVariantCombinationInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductVariantCombination 的参数接口
 */
export interface UpdateProductVariantCombinationDTO extends Partial<ProductVariantCombinationInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductVariantCombination 的参数接口
 */
export interface QueryProductVariantCombinationDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductVariantCombinationInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductVariantCombination 分页查询结果接口
 */
export interface ProductVariantCombinationPageResult {
  data: ProductVariantCombination[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductVariantCombination API 响应接口
 */
export interface ProductVariantCombinationResponse {
  success: boolean;
  message: string;
  data?: ProductVariantCombination | ProductVariantCombination[] | ProductVariantCombinationPageResult;
  error?: string;
}
