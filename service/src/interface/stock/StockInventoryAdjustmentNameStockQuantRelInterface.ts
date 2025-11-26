import { StockInventoryAdjustmentNameStockQuantRel } from '../entity/stock/stock.stockinventoryadjustmentnamestockquantrel.entity';

/**
 * StockInventoryAdjustmentNameStockQuantRel 实体接口
 * 对应数据库表: stock_inventory_adjustment_name_stock_quant_rel
 */
export interface StockInventoryAdjustmentNameStockQuantRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockInventoryAdjustmentNameStockQuantRel 的参数接口
 */
export interface CreateStockInventoryAdjustmentNameStockQuantRelDTO extends Partial<StockInventoryAdjustmentNameStockQuantRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockInventoryAdjustmentNameStockQuantRel 的参数接口
 */
export interface UpdateStockInventoryAdjustmentNameStockQuantRelDTO extends Partial<StockInventoryAdjustmentNameStockQuantRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockInventoryAdjustmentNameStockQuantRel 的参数接口
 */
export interface QueryStockInventoryAdjustmentNameStockQuantRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockInventoryAdjustmentNameStockQuantRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockInventoryAdjustmentNameStockQuantRel 分页查询结果接口
 */
export interface StockInventoryAdjustmentNameStockQuantRelPageResult {
  data: StockInventoryAdjustmentNameStockQuantRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockInventoryAdjustmentNameStockQuantRel API 响应接口
 */
export interface StockInventoryAdjustmentNameStockQuantRelResponse {
  success: boolean;
  message: string;
  data?: StockInventoryAdjustmentNameStockQuantRel | StockInventoryAdjustmentNameStockQuantRel[] | StockInventoryAdjustmentNameStockQuantRelPageResult;
  error?: string;
}
