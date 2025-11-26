import { StockConflictQuantRel } from '../entity/stock/stock.stockconflictquantrel.entity';

/**
 * StockConflictQuantRel 实体接口
 * 对应数据库表: stock_conflict_quant_rel
 */
export interface StockConflictQuantRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockConflictQuantRel 的参数接口
 */
export interface CreateStockConflictQuantRelDTO extends Partial<StockConflictQuantRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockConflictQuantRel 的参数接口
 */
export interface UpdateStockConflictQuantRelDTO extends Partial<StockConflictQuantRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockConflictQuantRel 的参数接口
 */
export interface QueryStockConflictQuantRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockConflictQuantRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockConflictQuantRel 分页查询结果接口
 */
export interface StockConflictQuantRelPageResult {
  data: StockConflictQuantRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockConflictQuantRel API 响应接口
 */
export interface StockConflictQuantRelResponse {
  success: boolean;
  message: string;
  data?: StockConflictQuantRel | StockConflictQuantRel[] | StockConflictQuantRelPageResult;
  error?: string;
}
