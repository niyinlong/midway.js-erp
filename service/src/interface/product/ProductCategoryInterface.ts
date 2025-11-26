import { ProductCategory } from '../entity/product/product.productcategory.entity';

/**
 * ProductCategory 实体接口
 * 对应数据库表: product_category
 */
export interface ProductCategoryInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductCategory 的参数接口
 */
export interface CreateProductCategoryDTO extends Partial<ProductCategoryInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductCategory 的参数接口
 */
export interface UpdateProductCategoryDTO extends Partial<ProductCategoryInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductCategory 的参数接口
 */
export interface QueryProductCategoryDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductCategoryInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductCategory 分页查询结果接口
 */
export interface ProductCategoryPageResult {
  data: ProductCategory[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductCategory API 响应接口
 */
export interface ProductCategoryResponse {
  success: boolean;
  message: string;
  data?: ProductCategory | ProductCategory[] | ProductCategoryPageResult;
  error?: string;
}
