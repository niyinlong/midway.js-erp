import { StockRouteProduct } from '../entity/stock/stock.stockrouteproduct.entity';

/**
 * StockRouteProduct 实体接口
 * 对应数据库表: stock_route_product
 */
export interface StockRouteProductInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockRouteProduct 的参数接口
 */
export interface CreateStockRouteProductDTO extends Partial<StockRouteProductInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockRouteProduct 的参数接口
 */
export interface UpdateStockRouteProductDTO extends Partial<StockRouteProductInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockRouteProduct 的参数接口
 */
export interface QueryStockRouteProductDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockRouteProductInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockRouteProduct 分页查询结果接口
 */
export interface StockRouteProductPageResult {
  data: StockRouteProduct[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockRouteProduct API 响应接口
 */
export interface StockRouteProductResponse {
  success: boolean;
  message: string;
  data?: StockRouteProduct | StockRouteProduct[] | StockRouteProductPageResult;
  error?: string;
}
