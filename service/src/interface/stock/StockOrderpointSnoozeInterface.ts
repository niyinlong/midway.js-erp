import { StockOrderpointSnooze } from '../entity/stock/stock.stockorderpointsnooze.entity';

/**
 * StockOrderpointSnooze 实体接口
 * 对应数据库表: stock_orderpoint_snooze
 */
export interface StockOrderpointSnoozeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockOrderpointSnooze 的参数接口
 */
export interface CreateStockOrderpointSnoozeDTO extends Partial<StockOrderpointSnoozeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockOrderpointSnooze 的参数接口
 */
export interface UpdateStockOrderpointSnoozeDTO extends Partial<StockOrderpointSnoozeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockOrderpointSnooze 的参数接口
 */
export interface QueryStockOrderpointSnoozeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockOrderpointSnoozeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockOrderpointSnooze 分页查询结果接口
 */
export interface StockOrderpointSnoozePageResult {
  data: StockOrderpointSnooze[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockOrderpointSnooze API 响应接口
 */
export interface StockOrderpointSnoozeResponse {
  success: boolean;
  message: string;
  data?: StockOrderpointSnooze | StockOrderpointSnooze[] | StockOrderpointSnoozePageResult;
  error?: string;
}
