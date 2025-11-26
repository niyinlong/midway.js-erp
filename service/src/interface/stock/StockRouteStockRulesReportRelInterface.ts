import { StockRouteStockRulesReportRel } from '../entity/stock/stock.stockroutestockrulesreportrel.entity';

/**
 * StockRouteStockRulesReportRel 实体接口
 * 对应数据库表: stock_route_stock_rules_report_rel
 */
export interface StockRouteStockRulesReportRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockRouteStockRulesReportRel 的参数接口
 */
export interface CreateStockRouteStockRulesReportRelDTO extends Partial<StockRouteStockRulesReportRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockRouteStockRulesReportRel 的参数接口
 */
export interface UpdateStockRouteStockRulesReportRelDTO extends Partial<StockRouteStockRulesReportRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockRouteStockRulesReportRel 的参数接口
 */
export interface QueryStockRouteStockRulesReportRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockRouteStockRulesReportRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockRouteStockRulesReportRel 分页查询结果接口
 */
export interface StockRouteStockRulesReportRelPageResult {
  data: StockRouteStockRulesReportRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockRouteStockRulesReportRel API 响应接口
 */
export interface StockRouteStockRulesReportRelResponse {
  success: boolean;
  message: string;
  data?: StockRouteStockRulesReportRel | StockRouteStockRulesReportRel[] | StockRouteStockRulesReportRelPageResult;
  error?: string;
}
