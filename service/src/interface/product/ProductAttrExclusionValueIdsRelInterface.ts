import { ProductAttrExclusionValueIdsRel } from '../entity/product/product.productattrexclusionvalueidsrel.entity';

/**
 * ProductAttrExclusionValueIdsRel 实体接口
 * 对应数据库表: product_attr_exclusion_value_ids_rel
 */
export interface ProductAttrExclusionValueIdsRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductAttrExclusionValueIdsRel 的参数接口
 */
export interface CreateProductAttrExclusionValueIdsRelDTO extends Partial<ProductAttrExclusionValueIdsRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductAttrExclusionValueIdsRel 的参数接口
 */
export interface UpdateProductAttrExclusionValueIdsRelDTO extends Partial<ProductAttrExclusionValueIdsRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductAttrExclusionValueIdsRel 的参数接口
 */
export interface QueryProductAttrExclusionValueIdsRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductAttrExclusionValueIdsRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductAttrExclusionValueIdsRel 分页查询结果接口
 */
export interface ProductAttrExclusionValueIdsRelPageResult {
  data: ProductAttrExclusionValueIdsRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductAttrExclusionValueIdsRel API 响应接口
 */
export interface ProductAttrExclusionValueIdsRelResponse {
  success: boolean;
  message: string;
  data?: ProductAttrExclusionValueIdsRel | ProductAttrExclusionValueIdsRel[] | ProductAttrExclusionValueIdsRelPageResult;
  error?: string;
}
