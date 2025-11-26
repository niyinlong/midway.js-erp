import { StockWarnInsufficientQtyUnbuild } from '../entity/stock/stock.stockwarninsufficientqtyunbuild.entity';

/**
 * StockWarnInsufficientQtyUnbuild 实体接口
 * 对应数据库表: stock_warn_insufficient_qty_unbuild
 */
export interface StockWarnInsufficientQtyUnbuildInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockWarnInsufficientQtyUnbuild 的参数接口
 */
export interface CreateStockWarnInsufficientQtyUnbuildDTO extends Partial<StockWarnInsufficientQtyUnbuildInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockWarnInsufficientQtyUnbuild 的参数接口
 */
export interface UpdateStockWarnInsufficientQtyUnbuildDTO extends Partial<StockWarnInsufficientQtyUnbuildInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockWarnInsufficientQtyUnbuild 的参数接口
 */
export interface QueryStockWarnInsufficientQtyUnbuildDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockWarnInsufficientQtyUnbuildInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockWarnInsufficientQtyUnbuild 分页查询结果接口
 */
export interface StockWarnInsufficientQtyUnbuildPageResult {
  data: StockWarnInsufficientQtyUnbuild[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockWarnInsufficientQtyUnbuild API 响应接口
 */
export interface StockWarnInsufficientQtyUnbuildResponse {
  success: boolean;
  message: string;
  data?: StockWarnInsufficientQtyUnbuild | StockWarnInsufficientQtyUnbuild[] | StockWarnInsufficientQtyUnbuildPageResult;
  error?: string;
}
