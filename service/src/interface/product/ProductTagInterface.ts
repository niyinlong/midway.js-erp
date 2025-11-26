import { ProductTag } from '../entity/product/product.producttag.entity';

/**
 * ProductTag 实体接口
 * 对应数据库表: product_tag
 */
export interface ProductTagInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductTag 的参数接口
 */
export interface CreateProductTagDTO extends Partial<ProductTagInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductTag 的参数接口
 */
export interface UpdateProductTagDTO extends Partial<ProductTagInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductTag 的参数接口
 */
export interface QueryProductTagDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductTagInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductTag 分页查询结果接口
 */
export interface ProductTagPageResult {
  data: ProductTag[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductTag API 响应接口
 */
export interface ProductTagResponse {
  success: boolean;
  message: string;
  data?: ProductTag | ProductTag[] | ProductTagPageResult;
  error?: string;
}
