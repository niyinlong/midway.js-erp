import { StockScrap } from '../entity/stock/stock.stockscrap.entity';

/**
 * StockScrap 实体接口
 * 对应数据库表: stock_scrap
 */
export interface StockScrapInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockScrap 的参数接口
 */
export interface CreateStockScrapDTO extends Partial<StockScrapInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockScrap 的参数接口
 */
export interface UpdateStockScrapDTO extends Partial<StockScrapInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockScrap 的参数接口
 */
export interface QueryStockScrapDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockScrapInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockScrap 分页查询结果接口
 */
export interface StockScrapPageResult {
  data: StockScrap[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockScrap API 响应接口
 */
export interface StockScrapResponse {
  success: boolean;
  message: string;
  data?: StockScrap | StockScrap[] | StockScrapPageResult;
  error?: string;
}
