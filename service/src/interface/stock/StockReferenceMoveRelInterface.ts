import { StockReferenceMoveRel } from '../entity/stock/stock.stockreferencemoverel.entity';

/**
 * StockReferenceMoveRel 实体接口
 * 对应数据库表: stock_reference_move_rel
 */
export interface StockReferenceMoveRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockReferenceMoveRel 的参数接口
 */
export interface CreateStockReferenceMoveRelDTO extends Partial<StockReferenceMoveRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockReferenceMoveRel 的参数接口
 */
export interface UpdateStockReferenceMoveRelDTO extends Partial<StockReferenceMoveRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockReferenceMoveRel 的参数接口
 */
export interface QueryStockReferenceMoveRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockReferenceMoveRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockReferenceMoveRel 分页查询结果接口
 */
export interface StockReferenceMoveRelPageResult {
  data: StockReferenceMoveRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockReferenceMoveRel API 响应接口
 */
export interface StockReferenceMoveRelResponse {
  success: boolean;
  message: string;
  data?: StockReferenceMoveRel | StockReferenceMoveRel[] | StockReferenceMoveRelPageResult;
  error?: string;
}
