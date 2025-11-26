import { StockBackorderConfirmation } from '../entity/stock/stock.stockbackorderconfirmation.entity';

/**
 * StockBackorderConfirmation 实体接口
 * 对应数据库表: stock_backorder_confirmation
 */
export interface StockBackorderConfirmationInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockBackorderConfirmation 的参数接口
 */
export interface CreateStockBackorderConfirmationDTO extends Partial<StockBackorderConfirmationInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockBackorderConfirmation 的参数接口
 */
export interface UpdateStockBackorderConfirmationDTO extends Partial<StockBackorderConfirmationInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockBackorderConfirmation 的参数接口
 */
export interface QueryStockBackorderConfirmationDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockBackorderConfirmationInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockBackorderConfirmation 分页查询结果接口
 */
export interface StockBackorderConfirmationPageResult {
  data: StockBackorderConfirmation[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockBackorderConfirmation API 响应接口
 */
export interface StockBackorderConfirmationResponse {
  success: boolean;
  message: string;
  data?: StockBackorderConfirmation | StockBackorderConfirmation[] | StockBackorderConfirmationPageResult;
  error?: string;
}
