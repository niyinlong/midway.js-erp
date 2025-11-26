import { StockRoute } from '../entity/stock/stock.stockroute.entity';

/**
 * StockRoute 实体接口
 * 对应数据库表: stock_route
 */
export interface StockRouteInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockRoute 的参数接口
 */
export interface CreateStockRouteDTO extends Partial<StockRouteInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockRoute 的参数接口
 */
export interface UpdateStockRouteDTO extends Partial<StockRouteInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockRoute 的参数接口
 */
export interface QueryStockRouteDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockRouteInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockRoute 分页查询结果接口
 */
export interface StockRoutePageResult {
  data: StockRoute[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockRoute API 响应接口
 */
export interface StockRouteResponse {
  success: boolean;
  message: string;
  data?: StockRoute | StockRoute[] | StockRoutePageResult;
  error?: string;
}
