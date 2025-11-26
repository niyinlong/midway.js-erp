import { StockInventoryAdjustmentName } from '../entity/stock/stock.stockinventoryadjustmentname.entity';

/**
 * StockInventoryAdjustmentName 实体接口
 * 对应数据库表: stock_inventory_adjustment_name
 */
export interface StockInventoryAdjustmentNameInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockInventoryAdjustmentName 的参数接口
 */
export interface CreateStockInventoryAdjustmentNameDTO extends Partial<StockInventoryAdjustmentNameInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockInventoryAdjustmentName 的参数接口
 */
export interface UpdateStockInventoryAdjustmentNameDTO extends Partial<StockInventoryAdjustmentNameInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockInventoryAdjustmentName 的参数接口
 */
export interface QueryStockInventoryAdjustmentNameDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockInventoryAdjustmentNameInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockInventoryAdjustmentName 分页查询结果接口
 */
export interface StockInventoryAdjustmentNamePageResult {
  data: StockInventoryAdjustmentName[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockInventoryAdjustmentName API 响应接口
 */
export interface StockInventoryAdjustmentNameResponse {
  success: boolean;
  message: string;
  data?: StockInventoryAdjustmentName | StockInventoryAdjustmentName[] | StockInventoryAdjustmentNamePageResult;
  error?: string;
}
