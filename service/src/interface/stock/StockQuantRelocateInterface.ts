import { StockQuantRelocate } from '../entity/stock/stock.stockquantrelocate.entity';

/**
 * StockQuantRelocate 实体接口
 * 对应数据库表: stock_quant_relocate
 */
export interface StockQuantRelocateInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockQuantRelocate 的参数接口
 */
export interface CreateStockQuantRelocateDTO extends Partial<StockQuantRelocateInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockQuantRelocate 的参数接口
 */
export interface UpdateStockQuantRelocateDTO extends Partial<StockQuantRelocateInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockQuantRelocate 的参数接口
 */
export interface QueryStockQuantRelocateDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockQuantRelocateInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockQuantRelocate 分页查询结果接口
 */
export interface StockQuantRelocatePageResult {
  data: StockQuantRelocate[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockQuantRelocate API 响应接口
 */
export interface StockQuantRelocateResponse {
  success: boolean;
  message: string;
  data?: StockQuantRelocate | StockQuantRelocate[] | StockQuantRelocatePageResult;
  error?: string;
}
