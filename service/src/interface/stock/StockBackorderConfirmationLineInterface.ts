import { StockBackorderConfirmationLine } from '../entity/stock/stock.stockbackorderconfirmationline.entity';

/**
 * StockBackorderConfirmationLine 实体接口
 * 对应数据库表: stock_backorder_confirmation_line
 */
export interface StockBackorderConfirmationLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockBackorderConfirmationLine 的参数接口
 */
export interface CreateStockBackorderConfirmationLineDTO extends Partial<StockBackorderConfirmationLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockBackorderConfirmationLine 的参数接口
 */
export interface UpdateStockBackorderConfirmationLineDTO extends Partial<StockBackorderConfirmationLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockBackorderConfirmationLine 的参数接口
 */
export interface QueryStockBackorderConfirmationLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockBackorderConfirmationLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockBackorderConfirmationLine 分页查询结果接口
 */
export interface StockBackorderConfirmationLinePageResult {
  data: StockBackorderConfirmationLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockBackorderConfirmationLine API 响应接口
 */
export interface StockBackorderConfirmationLineResponse {
  success: boolean;
  message: string;
  data?: StockBackorderConfirmationLine | StockBackorderConfirmationLine[] | StockBackorderConfirmationLinePageResult;
  error?: string;
}
