import { StockPackageTypeStockPutawayRuleRel } from '../entity/stock/stock.stockpackagetypestockputawayrulerel.entity';

/**
 * StockPackageTypeStockPutawayRuleRel 实体接口
 * 对应数据库表: stock_package_type_stock_putaway_rule_rel
 */
export interface StockPackageTypeStockPutawayRuleRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockPackageTypeStockPutawayRuleRel 的参数接口
 */
export interface CreateStockPackageTypeStockPutawayRuleRelDTO extends Partial<StockPackageTypeStockPutawayRuleRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockPackageTypeStockPutawayRuleRel 的参数接口
 */
export interface UpdateStockPackageTypeStockPutawayRuleRelDTO extends Partial<StockPackageTypeStockPutawayRuleRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockPackageTypeStockPutawayRuleRel 的参数接口
 */
export interface QueryStockPackageTypeStockPutawayRuleRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockPackageTypeStockPutawayRuleRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockPackageTypeStockPutawayRuleRel 分页查询结果接口
 */
export interface StockPackageTypeStockPutawayRuleRelPageResult {
  data: StockPackageTypeStockPutawayRuleRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockPackageTypeStockPutawayRuleRel API 响应接口
 */
export interface StockPackageTypeStockPutawayRuleRelResponse {
  success: boolean;
  message: string;
  data?: StockPackageTypeStockPutawayRuleRel | StockPackageTypeStockPutawayRuleRel[] | StockPackageTypeStockPutawayRuleRelPageResult;
  error?: string;
}
