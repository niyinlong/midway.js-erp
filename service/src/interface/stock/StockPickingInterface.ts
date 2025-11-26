import { StockPicking } from '../entity/stock/stock.stockpicking.entity';

/**
 * StockPicking 实体接口
 * 对应数据库表: stock_picking
 */
export interface StockPickingInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockPicking 的参数接口
 */
export interface CreateStockPickingDTO extends Partial<StockPickingInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockPicking 的参数接口
 */
export interface UpdateStockPickingDTO extends Partial<StockPickingInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockPicking 的参数接口
 */
export interface QueryStockPickingDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockPickingInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockPicking 分页查询结果接口
 */
export interface StockPickingPageResult {
  data: StockPicking[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockPicking API 响应接口
 */
export interface StockPickingResponse {
  success: boolean;
  message: string;
  data?: StockPicking | StockPicking[] | StockPickingPageResult;
  error?: string;
}
