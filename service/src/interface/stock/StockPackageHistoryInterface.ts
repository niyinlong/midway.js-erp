import { StockPackageHistory } from '../entity/stock/stock.stockpackagehistory.entity';

/**
 * StockPackageHistory 实体接口
 * 对应数据库表: stock_package_history
 */
export interface StockPackageHistoryInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockPackageHistory 的参数接口
 */
export interface CreateStockPackageHistoryDTO extends Partial<StockPackageHistoryInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockPackageHistory 的参数接口
 */
export interface UpdateStockPackageHistoryDTO extends Partial<StockPackageHistoryInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockPackageHistory 的参数接口
 */
export interface QueryStockPackageHistoryDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockPackageHistoryInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockPackageHistory 分页查询结果接口
 */
export interface StockPackageHistoryPageResult {
  data: StockPackageHistory[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockPackageHistory API 响应接口
 */
export interface StockPackageHistoryResponse {
  success: boolean;
  message: string;
  data?: StockPackageHistory | StockPackageHistory[] | StockPackageHistoryPageResult;
  error?: string;
}
