import { ProductComboProductTemplateRel } from '../entity/product/product.productcomboproducttemplaterel.entity';

/**
 * ProductComboProductTemplateRel 实体接口
 * 对应数据库表: product_combo_product_template_rel
 */
export interface ProductComboProductTemplateRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductComboProductTemplateRel 的参数接口
 */
export interface CreateProductComboProductTemplateRelDTO extends Partial<ProductComboProductTemplateRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductComboProductTemplateRel 的参数接口
 */
export interface UpdateProductComboProductTemplateRelDTO extends Partial<ProductComboProductTemplateRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductComboProductTemplateRel 的参数接口
 */
export interface QueryProductComboProductTemplateRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductComboProductTemplateRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductComboProductTemplateRel 分页查询结果接口
 */
export interface ProductComboProductTemplateRelPageResult {
  data: ProductComboProductTemplateRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductComboProductTemplateRel API 响应接口
 */
export interface ProductComboProductTemplateRelResponse {
  success: boolean;
  message: string;
  data?: ProductComboProductTemplateRel | ProductComboProductTemplateRel[] | ProductComboProductTemplateRelPageResult;
  error?: string;
}
