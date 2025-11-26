import { ProductTagProductTemplateRel } from '../entity/product/product.producttagproducttemplaterel.entity';

/**
 * ProductTagProductTemplateRel 实体接口
 * 对应数据库表: product_tag_product_template_rel
 */
export interface ProductTagProductTemplateRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductTagProductTemplateRel 的参数接口
 */
export interface CreateProductTagProductTemplateRelDTO extends Partial<ProductTagProductTemplateRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductTagProductTemplateRel 的参数接口
 */
export interface UpdateProductTagProductTemplateRelDTO extends Partial<ProductTagProductTemplateRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductTagProductTemplateRel 的参数接口
 */
export interface QueryProductTagProductTemplateRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductTagProductTemplateRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductTagProductTemplateRel 分页查询结果接口
 */
export interface ProductTagProductTemplateRelPageResult {
  data: ProductTagProductTemplateRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductTagProductTemplateRel API 响应接口
 */
export interface ProductTagProductTemplateRelResponse {
  success: boolean;
  message: string;
  data?: ProductTagProductTemplateRel | ProductTagProductTemplateRel[] | ProductTagProductTemplateRelPageResult;
  error?: string;
}
