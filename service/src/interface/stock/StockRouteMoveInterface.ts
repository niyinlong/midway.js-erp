import { StockRouteMove } from '../entity/stock/stock.stockroutemove.entity';

/**
 * StockRouteMove 实体接口
 * 对应数据库表: stock_route_move
 */
export interface StockRouteMoveInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockRouteMove 的参数接口
 */
export interface CreateStockRouteMoveDTO extends Partial<StockRouteMoveInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockRouteMove 的参数接口
 */
export interface UpdateStockRouteMoveDTO extends Partial<StockRouteMoveInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockRouteMove 的参数接口
 */
export interface QueryStockRouteMoveDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockRouteMoveInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockRouteMove 分页查询结果接口
 */
export interface StockRouteMovePageResult {
  data: StockRouteMove[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockRouteMove API 响应接口
 */
export interface StockRouteMoveResponse {
  success: boolean;
  message: string;
  data?: StockRouteMove | StockRouteMove[] | StockRouteMovePageResult;
  error?: string;
}
