import { StockWarnInsufficientQtyScrap } from '../entity/stock/stock.stockwarninsufficientqtyscrap.entity';

/**
 * StockWarnInsufficientQtyScrap 实体接口
 * 对应数据库表: stock_warn_insufficient_qty_scrap
 */
export interface StockWarnInsufficientQtyScrapInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockWarnInsufficientQtyScrap 的参数接口
 */
export interface CreateStockWarnInsufficientQtyScrapDTO extends Partial<StockWarnInsufficientQtyScrapInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockWarnInsufficientQtyScrap 的参数接口
 */
export interface UpdateStockWarnInsufficientQtyScrapDTO extends Partial<StockWarnInsufficientQtyScrapInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockWarnInsufficientQtyScrap 的参数接口
 */
export interface QueryStockWarnInsufficientQtyScrapDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockWarnInsufficientQtyScrapInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockWarnInsufficientQtyScrap 分页查询结果接口
 */
export interface StockWarnInsufficientQtyScrapPageResult {
  data: StockWarnInsufficientQtyScrap[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockWarnInsufficientQtyScrap API 响应接口
 */
export interface StockWarnInsufficientQtyScrapResponse {
  success: boolean;
  message: string;
  data?: StockWarnInsufficientQtyScrap | StockWarnInsufficientQtyScrap[] | StockWarnInsufficientQtyScrapPageResult;
  error?: string;
}
