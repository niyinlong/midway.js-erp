import { ProductSupplierTaxesRel } from '../entity/product/product.productsuppliertaxesrel.entity';

/**
 * ProductSupplierTaxesRel 实体接口
 * 对应数据库表: product_supplier_taxes_rel
 */
export interface ProductSupplierTaxesRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductSupplierTaxesRel 的参数接口
 */
export interface CreateProductSupplierTaxesRelDTO extends Partial<ProductSupplierTaxesRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductSupplierTaxesRel 的参数接口
 */
export interface UpdateProductSupplierTaxesRelDTO extends Partial<ProductSupplierTaxesRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductSupplierTaxesRel 的参数接口
 */
export interface QueryProductSupplierTaxesRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductSupplierTaxesRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductSupplierTaxesRel 分页查询结果接口
 */
export interface ProductSupplierTaxesRelPageResult {
  data: ProductSupplierTaxesRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductSupplierTaxesRel API 响应接口
 */
export interface ProductSupplierTaxesRelResponse {
  success: boolean;
  message: string;
  data?: ProductSupplierTaxesRel | ProductSupplierTaxesRel[] | ProductSupplierTaxesRelPageResult;
  error?: string;
}
