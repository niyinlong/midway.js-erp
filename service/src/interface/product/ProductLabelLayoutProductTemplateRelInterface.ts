import { ProductLabelLayoutProductTemplateRel } from '../entity/product/product.productlabellayoutproducttemplaterel.entity';

/**
 * ProductLabelLayoutProductTemplateRel 实体接口
 * 对应数据库表: product_label_layout_product_template_rel
 */
export interface ProductLabelLayoutProductTemplateRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductLabelLayoutProductTemplateRel 的参数接口
 */
export interface CreateProductLabelLayoutProductTemplateRelDTO extends Partial<ProductLabelLayoutProductTemplateRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductLabelLayoutProductTemplateRel 的参数接口
 */
export interface UpdateProductLabelLayoutProductTemplateRelDTO extends Partial<ProductLabelLayoutProductTemplateRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductLabelLayoutProductTemplateRel 的参数接口
 */
export interface QueryProductLabelLayoutProductTemplateRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductLabelLayoutProductTemplateRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductLabelLayoutProductTemplateRel 分页查询结果接口
 */
export interface ProductLabelLayoutProductTemplateRelPageResult {
  data: ProductLabelLayoutProductTemplateRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductLabelLayoutProductTemplateRel API 响应接口
 */
export interface ProductLabelLayoutProductTemplateRelResponse {
  success: boolean;
  message: string;
  data?: ProductLabelLayoutProductTemplateRel | ProductLabelLayoutProductTemplateRel[] | ProductLabelLayoutProductTemplateRelPageResult;
  error?: string;
}
