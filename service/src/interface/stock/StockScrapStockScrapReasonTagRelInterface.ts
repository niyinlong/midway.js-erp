import { StockScrapStockScrapReasonTagRel } from '../entity/stock/stock.stockscrapstockscrapreasontagrel.entity';

/**
 * StockScrapStockScrapReasonTagRel 实体接口
 * 对应数据库表: stock_scrap_stock_scrap_reason_tag_rel
 */
export interface StockScrapStockScrapReasonTagRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockScrapStockScrapReasonTagRel 的参数接口
 */
export interface CreateStockScrapStockScrapReasonTagRelDTO extends Partial<StockScrapStockScrapReasonTagRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockScrapStockScrapReasonTagRel 的参数接口
 */
export interface UpdateStockScrapStockScrapReasonTagRelDTO extends Partial<StockScrapStockScrapReasonTagRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockScrapStockScrapReasonTagRel 的参数接口
 */
export interface QueryStockScrapStockScrapReasonTagRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockScrapStockScrapReasonTagRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockScrapStockScrapReasonTagRel 分页查询结果接口
 */
export interface StockScrapStockScrapReasonTagRelPageResult {
  data: StockScrapStockScrapReasonTagRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockScrapStockScrapReasonTagRel API 响应接口
 */
export interface StockScrapStockScrapReasonTagRelResponse {
  success: boolean;
  message: string;
  data?: StockScrapStockScrapReasonTagRel | StockScrapStockScrapReasonTagRel[] | StockScrapStockScrapReasonTagRelPageResult;
  error?: string;
}
