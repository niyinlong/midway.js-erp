import { StockReturnPickingLine } from '../entity/stock/stock.stockreturnpickingline.entity';

/**
 * StockReturnPickingLine 实体接口
 * 对应数据库表: stock_return_picking_line
 */
export interface StockReturnPickingLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockReturnPickingLine 的参数接口
 */
export interface CreateStockReturnPickingLineDTO extends Partial<StockReturnPickingLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockReturnPickingLine 的参数接口
 */
export interface UpdateStockReturnPickingLineDTO extends Partial<StockReturnPickingLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockReturnPickingLine 的参数接口
 */
export interface QueryStockReturnPickingLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockReturnPickingLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockReturnPickingLine 分页查询结果接口
 */
export interface StockReturnPickingLinePageResult {
  data: StockReturnPickingLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockReturnPickingLine API 响应接口
 */
export interface StockReturnPickingLineResponse {
  success: boolean;
  message: string;
  data?: StockReturnPickingLine | StockReturnPickingLine[] | StockReturnPickingLinePageResult;
  error?: string;
}
