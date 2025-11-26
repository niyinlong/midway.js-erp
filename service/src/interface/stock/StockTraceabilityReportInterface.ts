import { StockTraceabilityReport } from '../entity/stock/stock.stocktraceabilityreport.entity';

/**
 * StockTraceabilityReport 实体接口
 * 对应数据库表: stock_traceability_report
 */
export interface StockTraceabilityReportInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockTraceabilityReport 的参数接口
 */
export interface CreateStockTraceabilityReportDTO extends Partial<StockTraceabilityReportInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockTraceabilityReport 的参数接口
 */
export interface UpdateStockTraceabilityReportDTO extends Partial<StockTraceabilityReportInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockTraceabilityReport 的参数接口
 */
export interface QueryStockTraceabilityReportDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockTraceabilityReportInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockTraceabilityReport 分页查询结果接口
 */
export interface StockTraceabilityReportPageResult {
  data: StockTraceabilityReport[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockTraceabilityReport API 响应接口
 */
export interface StockTraceabilityReportResponse {
  success: boolean;
  message: string;
  data?: StockTraceabilityReport | StockTraceabilityReport[] | StockTraceabilityReportPageResult;
  error?: string;
}
