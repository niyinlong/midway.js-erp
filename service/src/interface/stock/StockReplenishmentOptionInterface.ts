import { StockReplenishmentOption } from '../entity/stock/stock.stockreplenishmentoption.entity';

/**
 * StockReplenishmentOption 实体接口
 * 对应数据库表: stock_replenishment_option
 */
export interface StockReplenishmentOptionInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockReplenishmentOption 的参数接口
 */
export interface CreateStockReplenishmentOptionDTO extends Partial<StockReplenishmentOptionInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockReplenishmentOption 的参数接口
 */
export interface UpdateStockReplenishmentOptionDTO extends Partial<StockReplenishmentOptionInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockReplenishmentOption 的参数接口
 */
export interface QueryStockReplenishmentOptionDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockReplenishmentOptionInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockReplenishmentOption 分页查询结果接口
 */
export interface StockReplenishmentOptionPageResult {
  data: StockReplenishmentOption[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockReplenishmentOption API 响应接口
 */
export interface StockReplenishmentOptionResponse {
  success: boolean;
  message: string;
  data?: StockReplenishmentOption | StockReplenishmentOption[] | StockReplenishmentOptionPageResult;
  error?: string;
}
