import { StockWarehouseOrderpoint } from '../entity/stock/stock.stockwarehouseorderpoint.entity';

/**
 * StockWarehouseOrderpoint 实体接口
 * 对应数据库表: stock_warehouse_orderpoint
 */
export interface StockWarehouseOrderpointInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockWarehouseOrderpoint 的参数接口
 */
export interface CreateStockWarehouseOrderpointDTO extends Partial<StockWarehouseOrderpointInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockWarehouseOrderpoint 的参数接口
 */
export interface UpdateStockWarehouseOrderpointDTO extends Partial<StockWarehouseOrderpointInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockWarehouseOrderpoint 的参数接口
 */
export interface QueryStockWarehouseOrderpointDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockWarehouseOrderpointInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockWarehouseOrderpoint 分页查询结果接口
 */
export interface StockWarehouseOrderpointPageResult {
  data: StockWarehouseOrderpoint[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockWarehouseOrderpoint API 响应接口
 */
export interface StockWarehouseOrderpointResponse {
  success: boolean;
  message: string;
  data?: StockWarehouseOrderpoint | StockWarehouseOrderpoint[] | StockWarehouseOrderpointPageResult;
  error?: string;
}
