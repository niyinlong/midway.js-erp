import { ProductTemplate } from '../entity/product/product.producttemplate.entity';

/**
 * ProductTemplate 实体接口
 * 对应数据库表: product_template
 */
export interface ProductTemplateInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductTemplate 的参数接口
 */
export interface CreateProductTemplateDTO extends Partial<ProductTemplateInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductTemplate 的参数接口
 */
export interface UpdateProductTemplateDTO extends Partial<ProductTemplateInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductTemplate 的参数接口
 */
export interface QueryProductTemplateDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductTemplateInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductTemplate 分页查询结果接口
 */
export interface ProductTemplatePageResult {
  data: ProductTemplate[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductTemplate API 响应接口
 */
export interface ProductTemplateResponse {
  success: boolean;
  message: string;
  data?: ProductTemplate | ProductTemplate[] | ProductTemplatePageResult;
  error?: string;
}
