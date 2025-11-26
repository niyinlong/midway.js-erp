import { StockLocation } from '../entity/stock/stock.stocklocation.entity';

/**
 * StockLocation 实体接口
 * 对应数据库表: stock_location
 */
export interface StockLocationInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockLocation 的参数接口
 */
export interface CreateStockLocationDTO extends Partial<StockLocationInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockLocation 的参数接口
 */
export interface UpdateStockLocationDTO extends Partial<StockLocationInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockLocation 的参数接口
 */
export interface QueryStockLocationDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockLocationInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockLocation 分页查询结果接口
 */
export interface StockLocationPageResult {
  data: StockLocation[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockLocation API 响应接口
 */
export interface StockLocationResponse {
  success: boolean;
  message: string;
  data?: StockLocation | StockLocation[] | StockLocationPageResult;
  error?: string;
}
