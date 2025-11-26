import { StockMoveLine } from '../entity/stock/stock.stockmoveline.entity';

/**
 * StockMoveLine 实体接口
 * 对应数据库表: stock_move_line
 */
export interface StockMoveLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockMoveLine 的参数接口
 */
export interface CreateStockMoveLineDTO extends Partial<StockMoveLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockMoveLine 的参数接口
 */
export interface UpdateStockMoveLineDTO extends Partial<StockMoveLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockMoveLine 的参数接口
 */
export interface QueryStockMoveLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockMoveLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockMoveLine 分页查询结果接口
 */
export interface StockMoveLinePageResult {
  data: StockMoveLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockMoveLine API 响应接口
 */
export interface StockMoveLineResponse {
  success: boolean;
  message: string;
  data?: StockMoveLine | StockMoveLine[] | StockMoveLinePageResult;
  error?: string;
}
