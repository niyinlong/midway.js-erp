import { StockPutawayRule } from '../entity/stock/stock.stockputawayrule.entity';

/**
 * StockPutawayRule 实体接口
 * 对应数据库表: stock_putaway_rule
 */
export interface StockPutawayRuleInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockPutawayRule 的参数接口
 */
export interface CreateStockPutawayRuleDTO extends Partial<StockPutawayRuleInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockPutawayRule 的参数接口
 */
export interface UpdateStockPutawayRuleDTO extends Partial<StockPutawayRuleInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockPutawayRule 的参数接口
 */
export interface QueryStockPutawayRuleDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockPutawayRuleInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockPutawayRule 分页查询结果接口
 */
export interface StockPutawayRulePageResult {
  data: StockPutawayRule[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockPutawayRule API 响应接口
 */
export interface StockPutawayRuleResponse {
  success: boolean;
  message: string;
  data?: StockPutawayRule | StockPutawayRule[] | StockPutawayRulePageResult;
  error?: string;
}
