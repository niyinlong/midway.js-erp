import { StockInventoryWarningStockQuantRel } from '../entity/stock/stock.stockinventorywarningstockquantrel.entity';

/**
 * StockInventoryWarningStockQuantRel 实体接口
 * 对应数据库表: stock_inventory_warning_stock_quant_rel
 */
export interface StockInventoryWarningStockQuantRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockInventoryWarningStockQuantRel 的参数接口
 */
export interface CreateStockInventoryWarningStockQuantRelDTO extends Partial<StockInventoryWarningStockQuantRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockInventoryWarningStockQuantRel 的参数接口
 */
export interface UpdateStockInventoryWarningStockQuantRelDTO extends Partial<StockInventoryWarningStockQuantRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockInventoryWarningStockQuantRel 的参数接口
 */
export interface QueryStockInventoryWarningStockQuantRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockInventoryWarningStockQuantRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockInventoryWarningStockQuantRel 分页查询结果接口
 */
export interface StockInventoryWarningStockQuantRelPageResult {
  data: StockInventoryWarningStockQuantRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockInventoryWarningStockQuantRel API 响应接口
 */
export interface StockInventoryWarningStockQuantRelResponse {
  success: boolean;
  message: string;
  data?: StockInventoryWarningStockQuantRel | StockInventoryWarningStockQuantRel[] | StockInventoryWarningStockQuantRelPageResult;
  error?: string;
}
