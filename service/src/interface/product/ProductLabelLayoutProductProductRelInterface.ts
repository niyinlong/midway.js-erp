import { ProductLabelLayoutProductProductRel } from '../entity/product/product.productlabellayoutproductproductrel.entity';

/**
 * ProductLabelLayoutProductProductRel 实体接口
 * 对应数据库表: product_label_layout_product_product_rel
 */
export interface ProductLabelLayoutProductProductRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductLabelLayoutProductProductRel 的参数接口
 */
export interface CreateProductLabelLayoutProductProductRelDTO extends Partial<ProductLabelLayoutProductProductRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductLabelLayoutProductProductRel 的参数接口
 */
export interface UpdateProductLabelLayoutProductProductRelDTO extends Partial<ProductLabelLayoutProductProductRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductLabelLayoutProductProductRel 的参数接口
 */
export interface QueryProductLabelLayoutProductProductRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductLabelLayoutProductProductRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductLabelLayoutProductProductRel 分页查询结果接口
 */
export interface ProductLabelLayoutProductProductRelPageResult {
  data: ProductLabelLayoutProductProductRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductLabelLayoutProductProductRel API 响应接口
 */
export interface ProductLabelLayoutProductProductRelResponse {
  success: boolean;
  message: string;
  data?: ProductLabelLayoutProductProductRel | ProductLabelLayoutProductProductRel[] | ProductLabelLayoutProductProductRelPageResult;
  error?: string;
}
