import { StockWarehouse } from '../entity/stock/stock.stockwarehouse.entity';

/**
 * StockWarehouse 实体接口
 * 对应数据库表: stock_warehouse
 */
export interface StockWarehouseInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockWarehouse 的参数接口
 */
export interface CreateStockWarehouseDTO extends Partial<StockWarehouseInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockWarehouse 的参数接口
 */
export interface UpdateStockWarehouseDTO extends Partial<StockWarehouseInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockWarehouse 的参数接口
 */
export interface QueryStockWarehouseDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockWarehouseInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockWarehouse 分页查询结果接口
 */
export interface StockWarehousePageResult {
  data: StockWarehouse[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockWarehouse API 响应接口
 */
export interface StockWarehouseResponse {
  success: boolean;
  message: string;
  data?: StockWarehouse | StockWarehouse[] | StockWarehousePageResult;
  error?: string;
}
