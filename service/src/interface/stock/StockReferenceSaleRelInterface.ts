import { StockReferenceSaleRel } from '../entity/stock/stock.stockreferencesalerel.entity';

/**
 * StockReferenceSaleRel 实体接口
 * 对应数据库表: stock_reference_sale_rel
 */
export interface StockReferenceSaleRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockReferenceSaleRel 的参数接口
 */
export interface CreateStockReferenceSaleRelDTO extends Partial<StockReferenceSaleRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockReferenceSaleRel 的参数接口
 */
export interface UpdateStockReferenceSaleRelDTO extends Partial<StockReferenceSaleRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockReferenceSaleRel 的参数接口
 */
export interface QueryStockReferenceSaleRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockReferenceSaleRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockReferenceSaleRel 分页查询结果接口
 */
export interface StockReferenceSaleRelPageResult {
  data: StockReferenceSaleRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockReferenceSaleRel API 响应接口
 */
export interface StockReferenceSaleRelResponse {
  success: boolean;
  message: string;
  data?: StockReferenceSaleRel | StockReferenceSaleRel[] | StockReferenceSaleRelPageResult;
  error?: string;
}
