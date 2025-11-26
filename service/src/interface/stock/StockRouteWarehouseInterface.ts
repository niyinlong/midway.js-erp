import { StockRouteWarehouse } from '../entity/stock/stock.stockroutewarehouse.entity';

/**
 * StockRouteWarehouse 实体接口
 * 对应数据库表: stock_route_warehouse
 */
export interface StockRouteWarehouseInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockRouteWarehouse 的参数接口
 */
export interface CreateStockRouteWarehouseDTO extends Partial<StockRouteWarehouseInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockRouteWarehouse 的参数接口
 */
export interface UpdateStockRouteWarehouseDTO extends Partial<StockRouteWarehouseInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockRouteWarehouse 的参数接口
 */
export interface QueryStockRouteWarehouseDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockRouteWarehouseInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockRouteWarehouse 分页查询结果接口
 */
export interface StockRouteWarehousePageResult {
  data: StockRouteWarehouse[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockRouteWarehouse API 响应接口
 */
export interface StockRouteWarehouseResponse {
  success: boolean;
  message: string;
  data?: StockRouteWarehouse | StockRouteWarehouse[] | StockRouteWarehousePageResult;
  error?: string;
}
