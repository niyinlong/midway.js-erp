import { ProductLabelLayout } from '../entity/product/product.productlabellayout.entity';

/**
 * ProductLabelLayout 实体接口
 * 对应数据库表: product_label_layout
 */
export interface ProductLabelLayoutInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductLabelLayout 的参数接口
 */
export interface CreateProductLabelLayoutDTO extends Partial<ProductLabelLayoutInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductLabelLayout 的参数接口
 */
export interface UpdateProductLabelLayoutDTO extends Partial<ProductLabelLayoutInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductLabelLayout 的参数接口
 */
export interface QueryProductLabelLayoutDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductLabelLayoutInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductLabelLayout 分页查询结果接口
 */
export interface ProductLabelLayoutPageResult {
  data: ProductLabelLayout[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductLabelLayout API 响应接口
 */
export interface ProductLabelLayoutResponse {
  success: boolean;
  message: string;
  data?: ProductLabelLayout | ProductLabelLayout[] | ProductLabelLayoutPageResult;
  error?: string;
}
