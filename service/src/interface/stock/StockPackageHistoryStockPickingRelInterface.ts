import { StockPackageHistoryStockPickingRel } from '../entity/stock/stock.stockpackagehistorystockpickingrel.entity';

/**
 * StockPackageHistoryStockPickingRel 实体接口
 * 对应数据库表: stock_package_history_stock_picking_rel
 */
export interface StockPackageHistoryStockPickingRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockPackageHistoryStockPickingRel 的参数接口
 */
export interface CreateStockPackageHistoryStockPickingRelDTO extends Partial<StockPackageHistoryStockPickingRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockPackageHistoryStockPickingRel 的参数接口
 */
export interface UpdateStockPackageHistoryStockPickingRelDTO extends Partial<StockPackageHistoryStockPickingRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockPackageHistoryStockPickingRel 的参数接口
 */
export interface QueryStockPackageHistoryStockPickingRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockPackageHistoryStockPickingRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockPackageHistoryStockPickingRel 分页查询结果接口
 */
export interface StockPackageHistoryStockPickingRelPageResult {
  data: StockPackageHistoryStockPickingRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockPackageHistoryStockPickingRel API 响应接口
 */
export interface StockPackageHistoryStockPickingRelResponse {
  success: boolean;
  message: string;
  data?: StockPackageHistoryStockPickingRel | StockPackageHistoryStockPickingRel[] | StockPackageHistoryStockPickingRelPageResult;
  error?: string;
}
