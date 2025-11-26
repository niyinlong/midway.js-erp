import { StockRulesReport } from '../entity/stock/stock.stockrulesreport.entity';

/**
 * StockRulesReport 实体接口
 * 对应数据库表: stock_rules_report
 */
export interface StockRulesReportInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockRulesReport 的参数接口
 */
export interface CreateStockRulesReportDTO extends Partial<StockRulesReportInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockRulesReport 的参数接口
 */
export interface UpdateStockRulesReportDTO extends Partial<StockRulesReportInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockRulesReport 的参数接口
 */
export interface QueryStockRulesReportDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockRulesReportInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockRulesReport 分页查询结果接口
 */
export interface StockRulesReportPageResult {
  data: StockRulesReport[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockRulesReport API 响应接口
 */
export interface StockRulesReportResponse {
  success: boolean;
  message: string;
  data?: StockRulesReport | StockRulesReport[] | StockRulesReportPageResult;
  error?: string;
}
