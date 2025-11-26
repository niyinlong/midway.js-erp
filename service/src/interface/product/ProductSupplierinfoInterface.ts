import { ProductSupplierinfo } from '../entity/product/product.productsupplierinfo.entity';

/**
 * ProductSupplierinfo 实体接口
 * 对应数据库表: product_supplierinfo
 */
export interface ProductSupplierinfoInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductSupplierinfo 的参数接口
 */
export interface CreateProductSupplierinfoDTO extends Partial<ProductSupplierinfoInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductSupplierinfo 的参数接口
 */
export interface UpdateProductSupplierinfoDTO extends Partial<ProductSupplierinfoInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductSupplierinfo 的参数接口
 */
export interface QueryProductSupplierinfoDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductSupplierinfoInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductSupplierinfo 分页查询结果接口
 */
export interface ProductSupplierinfoPageResult {
  data: ProductSupplierinfo[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductSupplierinfo API 响应接口
 */
export interface ProductSupplierinfoResponse {
  success: boolean;
  message: string;
  data?: ProductSupplierinfo | ProductSupplierinfo[] | ProductSupplierinfoPageResult;
  error?: string;
}
