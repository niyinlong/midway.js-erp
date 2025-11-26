import { ProductSupplierinfoStockReplenishmentInfoRel } from '../entity/product/product.productsupplierinfostockreplenishmentinforel.entity';

/**
 * ProductSupplierinfoStockReplenishmentInfoRel 实体接口
 * 对应数据库表: product_supplierinfo_stock_replenishment_info_rel
 */
export interface ProductSupplierinfoStockReplenishmentInfoRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductSupplierinfoStockReplenishmentInfoRel 的参数接口
 */
export interface CreateProductSupplierinfoStockReplenishmentInfoRelDTO extends Partial<ProductSupplierinfoStockReplenishmentInfoRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductSupplierinfoStockReplenishmentInfoRel 的参数接口
 */
export interface UpdateProductSupplierinfoStockReplenishmentInfoRelDTO extends Partial<ProductSupplierinfoStockReplenishmentInfoRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductSupplierinfoStockReplenishmentInfoRel 的参数接口
 */
export interface QueryProductSupplierinfoStockReplenishmentInfoRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductSupplierinfoStockReplenishmentInfoRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductSupplierinfoStockReplenishmentInfoRel 分页查询结果接口
 */
export interface ProductSupplierinfoStockReplenishmentInfoRelPageResult {
  data: ProductSupplierinfoStockReplenishmentInfoRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductSupplierinfoStockReplenishmentInfoRel API 响应接口
 */
export interface ProductSupplierinfoStockReplenishmentInfoRelResponse {
  success: boolean;
  message: string;
  data?: ProductSupplierinfoStockReplenishmentInfoRel | ProductSupplierinfoStockReplenishmentInfoRel[] | ProductSupplierinfoStockReplenishmentInfoRelPageResult;
  error?: string;
}
