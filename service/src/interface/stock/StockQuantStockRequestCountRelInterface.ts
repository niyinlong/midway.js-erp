import { StockQuantStockRequestCountRel } from '../entity/stock/stock.stockquantstockrequestcountrel.entity';

/**
 * StockQuantStockRequestCountRel 实体接口
 * 对应数据库表: stock_quant_stock_request_count_rel
 */
export interface StockQuantStockRequestCountRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockQuantStockRequestCountRel 的参数接口
 */
export interface CreateStockQuantStockRequestCountRelDTO extends Partial<StockQuantStockRequestCountRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockQuantStockRequestCountRel 的参数接口
 */
export interface UpdateStockQuantStockRequestCountRelDTO extends Partial<StockQuantStockRequestCountRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockQuantStockRequestCountRel 的参数接口
 */
export interface QueryStockQuantStockRequestCountRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockQuantStockRequestCountRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockQuantStockRequestCountRel 分页查询结果接口
 */
export interface StockQuantStockRequestCountRelPageResult {
  data: StockQuantStockRequestCountRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockQuantStockRequestCountRel API 响应接口
 */
export interface StockQuantStockRequestCountRelResponse {
  success: boolean;
  message: string;
  data?: StockQuantStockRequestCountRel | StockQuantStockRequestCountRel[] | StockQuantStockRequestCountRelPageResult;
  error?: string;
}
