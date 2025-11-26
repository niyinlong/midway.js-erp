import { StockOrderpointSnoozeStockWarehouseOrderpointRel } from '../entity/stock/stock.stockorderpointsnoozestockwarehouseorderpointrel.entity';

/**
 * StockOrderpointSnoozeStockWarehouseOrderpointRel 实体接口
 * 对应数据库表: stock_orderpoint_snooze_stock_warehouse_orderpoint_rel
 */
export interface StockOrderpointSnoozeStockWarehouseOrderpointRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockOrderpointSnoozeStockWarehouseOrderpointRel 的参数接口
 */
export interface CreateStockOrderpointSnoozeStockWarehouseOrderpointRelDTO extends Partial<StockOrderpointSnoozeStockWarehouseOrderpointRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockOrderpointSnoozeStockWarehouseOrderpointRel 的参数接口
 */
export interface UpdateStockOrderpointSnoozeStockWarehouseOrderpointRelDTO extends Partial<StockOrderpointSnoozeStockWarehouseOrderpointRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockOrderpointSnoozeStockWarehouseOrderpointRel 的参数接口
 */
export interface QueryStockOrderpointSnoozeStockWarehouseOrderpointRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockOrderpointSnoozeStockWarehouseOrderpointRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockOrderpointSnoozeStockWarehouseOrderpointRel 分页查询结果接口
 */
export interface StockOrderpointSnoozeStockWarehouseOrderpointRelPageResult {
  data: StockOrderpointSnoozeStockWarehouseOrderpointRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockOrderpointSnoozeStockWarehouseOrderpointRel API 响应接口
 */
export interface StockOrderpointSnoozeStockWarehouseOrderpointRelResponse {
  success: boolean;
  message: string;
  data?: StockOrderpointSnoozeStockWarehouseOrderpointRel | StockOrderpointSnoozeStockWarehouseOrderpointRel[] | StockOrderpointSnoozeStockWarehouseOrderpointRelPageResult;
  error?: string;
}
