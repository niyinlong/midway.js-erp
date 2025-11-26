import { StockReference } from '../entity/stock/stock.stockreference.entity';

/**
 * StockReference 实体接口
 * 对应数据库表: stock_reference
 */
export interface StockReferenceInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockReference 的参数接口
 */
export interface CreateStockReferenceDTO extends Partial<StockReferenceInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockReference 的参数接口
 */
export interface UpdateStockReferenceDTO extends Partial<StockReferenceInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockReference 的参数接口
 */
export interface QueryStockReferenceDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockReferenceInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockReference 分页查询结果接口
 */
export interface StockReferencePageResult {
  data: StockReference[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockReference API 响应接口
 */
export interface StockReferenceResponse {
  success: boolean;
  message: string;
  data?: StockReference | StockReference[] | StockReferencePageResult;
  error?: string;
}
