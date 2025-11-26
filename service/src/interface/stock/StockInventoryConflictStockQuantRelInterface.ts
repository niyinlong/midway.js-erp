import { StockInventoryConflictStockQuantRel } from '../entity/stock/stock.stockinventoryconflictstockquantrel.entity';

/**
 * StockInventoryConflictStockQuantRel 实体接口
 * 对应数据库表: stock_inventory_conflict_stock_quant_rel
 */
export interface StockInventoryConflictStockQuantRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockInventoryConflictStockQuantRel 的参数接口
 */
export interface CreateStockInventoryConflictStockQuantRelDTO extends Partial<StockInventoryConflictStockQuantRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockInventoryConflictStockQuantRel 的参数接口
 */
export interface UpdateStockInventoryConflictStockQuantRelDTO extends Partial<StockInventoryConflictStockQuantRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockInventoryConflictStockQuantRel 的参数接口
 */
export interface QueryStockInventoryConflictStockQuantRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockInventoryConflictStockQuantRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockInventoryConflictStockQuantRel 分页查询结果接口
 */
export interface StockInventoryConflictStockQuantRelPageResult {
  data: StockInventoryConflictStockQuantRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockInventoryConflictStockQuantRel API 响应接口
 */
export interface StockInventoryConflictStockQuantRelResponse {
  success: boolean;
  message: string;
  data?: StockInventoryConflictStockQuantRel | StockInventoryConflictStockQuantRel[] | StockInventoryConflictStockQuantRelPageResult;
  error?: string;
}
