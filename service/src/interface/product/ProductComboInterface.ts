import { ProductCombo } from '../entity/product/product.productcombo.entity';

/**
 * ProductCombo 实体接口
 * 对应数据库表: product_combo
 */
export interface ProductComboInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductCombo 的参数接口
 */
export interface CreateProductComboDTO extends Partial<ProductComboInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductCombo 的参数接口
 */
export interface UpdateProductComboDTO extends Partial<ProductComboInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductCombo 的参数接口
 */
export interface QueryProductComboDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductComboInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductCombo 分页查询结果接口
 */
export interface ProductComboPageResult {
  data: ProductCombo[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductCombo API 响应接口
 */
export interface ProductComboResponse {
  success: boolean;
  message: string;
  data?: ProductCombo | ProductCombo[] | ProductComboPageResult;
  error?: string;
}
