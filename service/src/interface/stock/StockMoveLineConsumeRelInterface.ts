import { StockMoveLineConsumeRel } from '../entity/stock/stock.stockmovelineconsumerel.entity';

/**
 * StockMoveLineConsumeRel 实体接口
 * 对应数据库表: stock_move_line_consume_rel
 */
export interface StockMoveLineConsumeRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockMoveLineConsumeRel 的参数接口
 */
export interface CreateStockMoveLineConsumeRelDTO extends Partial<StockMoveLineConsumeRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockMoveLineConsumeRel 的参数接口
 */
export interface UpdateStockMoveLineConsumeRelDTO extends Partial<StockMoveLineConsumeRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockMoveLineConsumeRel 的参数接口
 */
export interface QueryStockMoveLineConsumeRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockMoveLineConsumeRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockMoveLineConsumeRel 分页查询结果接口
 */
export interface StockMoveLineConsumeRelPageResult {
  data: StockMoveLineConsumeRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockMoveLineConsumeRel API 响应接口
 */
export interface StockMoveLineConsumeRelResponse {
  success: boolean;
  message: string;
  data?: StockMoveLineConsumeRel | StockMoveLineConsumeRel[] | StockMoveLineConsumeRelPageResult;
  error?: string;
}
