import { StockInventoryConflict } from '../entity/stock/stock.stockinventoryconflict.entity';

/**
 * StockInventoryConflict 实体接口
 * 对应数据库表: stock_inventory_conflict
 */
export interface StockInventoryConflictInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockInventoryConflict 的参数接口
 */
export interface CreateStockInventoryConflictDTO extends Partial<StockInventoryConflictInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockInventoryConflict 的参数接口
 */
export interface UpdateStockInventoryConflictDTO extends Partial<StockInventoryConflictInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockInventoryConflict 的参数接口
 */
export interface QueryStockInventoryConflictDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockInventoryConflictInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockInventoryConflict 分页查询结果接口
 */
export interface StockInventoryConflictPageResult {
  data: StockInventoryConflict[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockInventoryConflict API 响应接口
 */
export interface StockInventoryConflictResponse {
  success: boolean;
  message: string;
  data?: StockInventoryConflict | StockInventoryConflict[] | StockInventoryConflictPageResult;
  error?: string;
}
