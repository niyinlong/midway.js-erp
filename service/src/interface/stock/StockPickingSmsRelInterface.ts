import { StockPickingSmsRel } from '../entity/stock/stock.stockpickingsmsrel.entity';

/**
 * StockPickingSmsRel 实体接口
 * 对应数据库表: stock_picking_sms_rel
 */
export interface StockPickingSmsRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockPickingSmsRel 的参数接口
 */
export interface CreateStockPickingSmsRelDTO extends Partial<StockPickingSmsRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockPickingSmsRel 的参数接口
 */
export interface UpdateStockPickingSmsRelDTO extends Partial<StockPickingSmsRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockPickingSmsRel 的参数接口
 */
export interface QueryStockPickingSmsRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockPickingSmsRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockPickingSmsRel 分页查询结果接口
 */
export interface StockPickingSmsRelPageResult {
  data: StockPickingSmsRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockPickingSmsRel API 响应接口
 */
export interface StockPickingSmsRelResponse {
  success: boolean;
  message: string;
  data?: StockPickingSmsRel | StockPickingSmsRel[] | StockPickingSmsRelPageResult;
  error?: string;
}
