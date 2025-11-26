import { StockReturnPicking } from '../entity/stock/stock.stockreturnpicking.entity';

/**
 * StockReturnPicking 实体接口
 * 对应数据库表: stock_return_picking
 */
export interface StockReturnPickingInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockReturnPicking 的参数接口
 */
export interface CreateStockReturnPickingDTO extends Partial<StockReturnPickingInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockReturnPicking 的参数接口
 */
export interface UpdateStockReturnPickingDTO extends Partial<StockReturnPickingInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockReturnPicking 的参数接口
 */
export interface QueryStockReturnPickingDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockReturnPickingInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockReturnPicking 分页查询结果接口
 */
export interface StockReturnPickingPageResult {
  data: StockReturnPicking[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockReturnPicking API 响应接口
 */
export interface StockReturnPickingResponse {
  success: boolean;
  message: string;
  data?: StockReturnPicking | StockReturnPicking[] | StockReturnPickingPageResult;
  error?: string;
}
