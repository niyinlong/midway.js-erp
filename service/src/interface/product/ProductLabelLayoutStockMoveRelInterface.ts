import { ProductLabelLayoutStockMoveRel } from '../entity/product/product.productlabellayoutstockmoverel.entity';

/**
 * ProductLabelLayoutStockMoveRel 实体接口
 * 对应数据库表: product_label_layout_stock_move_rel
 */
export interface ProductLabelLayoutStockMoveRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductLabelLayoutStockMoveRel 的参数接口
 */
export interface CreateProductLabelLayoutStockMoveRelDTO extends Partial<ProductLabelLayoutStockMoveRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductLabelLayoutStockMoveRel 的参数接口
 */
export interface UpdateProductLabelLayoutStockMoveRelDTO extends Partial<ProductLabelLayoutStockMoveRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductLabelLayoutStockMoveRel 的参数接口
 */
export interface QueryProductLabelLayoutStockMoveRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductLabelLayoutStockMoveRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductLabelLayoutStockMoveRel 分页查询结果接口
 */
export interface ProductLabelLayoutStockMoveRelPageResult {
  data: ProductLabelLayoutStockMoveRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductLabelLayoutStockMoveRel API 响应接口
 */
export interface ProductLabelLayoutStockMoveRelResponse {
  success: boolean;
  message: string;
  data?: ProductLabelLayoutStockMoveRel | ProductLabelLayoutStockMoveRel[] | ProductLabelLayoutStockMoveRelPageResult;
  error?: string;
}
