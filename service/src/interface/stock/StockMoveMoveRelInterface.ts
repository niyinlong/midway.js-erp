import { StockMoveMoveRel } from '../entity/stock/stock.stockmovemoverel.entity';

/**
 * StockMoveMoveRel 实体接口
 * 对应数据库表: stock_move_move_rel
 */
export interface StockMoveMoveRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockMoveMoveRel 的参数接口
 */
export interface CreateStockMoveMoveRelDTO extends Partial<StockMoveMoveRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockMoveMoveRel 的参数接口
 */
export interface UpdateStockMoveMoveRelDTO extends Partial<StockMoveMoveRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockMoveMoveRel 的参数接口
 */
export interface QueryStockMoveMoveRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockMoveMoveRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockMoveMoveRel 分页查询结果接口
 */
export interface StockMoveMoveRelPageResult {
  data: StockMoveMoveRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockMoveMoveRel API 响应接口
 */
export interface StockMoveMoveRelResponse {
  success: boolean;
  message: string;
  data?: StockMoveMoveRel | StockMoveMoveRel[] | StockMoveMoveRelPageResult;
  error?: string;
}
