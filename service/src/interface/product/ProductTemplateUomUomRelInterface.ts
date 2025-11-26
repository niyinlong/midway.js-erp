import { ProductTemplateUomUomRel } from '../entity/product/product.producttemplateuomuomrel.entity';

/**
 * ProductTemplateUomUomRel 实体接口
 * 对应数据库表: product_template_uom_uom_rel
 */
export interface ProductTemplateUomUomRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductTemplateUomUomRel 的参数接口
 */
export interface CreateProductTemplateUomUomRelDTO extends Partial<ProductTemplateUomUomRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductTemplateUomUomRel 的参数接口
 */
export interface UpdateProductTemplateUomUomRelDTO extends Partial<ProductTemplateUomUomRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductTemplateUomUomRel 的参数接口
 */
export interface QueryProductTemplateUomUomRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductTemplateUomUomRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductTemplateUomUomRel 分页查询结果接口
 */
export interface ProductTemplateUomUomRelPageResult {
  data: ProductTemplateUomUomRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductTemplateUomUomRel API 响应接口
 */
export interface ProductTemplateUomUomRelResponse {
  success: boolean;
  message: string;
  data?: ProductTemplateUomUomRel | ProductTemplateUomUomRel[] | ProductTemplateUomUomRelPageResult;
  error?: string;
}
