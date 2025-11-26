import { StockReferenceProductionRel } from '../entity/stock/stock.stockreferenceproductionrel.entity';

/**
 * StockReferenceProductionRel 实体接口
 * 对应数据库表: stock_reference_production_rel
 */
export interface StockReferenceProductionRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockReferenceProductionRel 的参数接口
 */
export interface CreateStockReferenceProductionRelDTO extends Partial<StockReferenceProductionRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockReferenceProductionRel 的参数接口
 */
export interface UpdateStockReferenceProductionRelDTO extends Partial<StockReferenceProductionRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockReferenceProductionRel 的参数接口
 */
export interface QueryStockReferenceProductionRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockReferenceProductionRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockReferenceProductionRel 分页查询结果接口
 */
export interface StockReferenceProductionRelPageResult {
  data: StockReferenceProductionRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockReferenceProductionRel API 响应接口
 */
export interface StockReferenceProductionRelResponse {
  success: boolean;
  message: string;
  data?: StockReferenceProductionRel | StockReferenceProductionRel[] | StockReferenceProductionRelPageResult;
  error?: string;
}
