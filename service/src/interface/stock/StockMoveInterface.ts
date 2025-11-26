import { StockMove } from '../entity/stock/stock.stockmove.entity';

/**
 * StockMove 实体接口
 * 对应数据库表: stock_move
 */
export interface StockMoveInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockMove 的参数接口
 */
export interface CreateStockMoveDTO extends Partial<StockMoveInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockMove 的参数接口
 */
export interface UpdateStockMoveDTO extends Partial<StockMoveInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockMove 的参数接口
 */
export interface QueryStockMoveDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockMoveInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockMove 分页查询结果接口
 */
export interface StockMovePageResult {
  data: StockMove[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockMove API 响应接口
 */
export interface StockMoveResponse {
  success: boolean;
  message: string;
  data?: StockMove | StockMove[] | StockMovePageResult;
  error?: string;
}
