import { StockMoveLineStockPutInPackRel } from '../entity/stock/stock.stockmovelinestockputinpackrel.entity';

/**
 * StockMoveLineStockPutInPackRel 实体接口
 * 对应数据库表: stock_move_line_stock_put_in_pack_rel
 */
export interface StockMoveLineStockPutInPackRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockMoveLineStockPutInPackRel 的参数接口
 */
export interface CreateStockMoveLineStockPutInPackRelDTO extends Partial<StockMoveLineStockPutInPackRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockMoveLineStockPutInPackRel 的参数接口
 */
export interface UpdateStockMoveLineStockPutInPackRelDTO extends Partial<StockMoveLineStockPutInPackRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockMoveLineStockPutInPackRel 的参数接口
 */
export interface QueryStockMoveLineStockPutInPackRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockMoveLineStockPutInPackRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockMoveLineStockPutInPackRel 分页查询结果接口
 */
export interface StockMoveLineStockPutInPackRelPageResult {
  data: StockMoveLineStockPutInPackRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockMoveLineStockPutInPackRel API 响应接口
 */
export interface StockMoveLineStockPutInPackRelResponse {
  success: boolean;
  message: string;
  data?: StockMoveLineStockPutInPackRel | StockMoveLineStockPutInPackRel[] | StockMoveLineStockPutInPackRelPageResult;
  error?: string;
}
