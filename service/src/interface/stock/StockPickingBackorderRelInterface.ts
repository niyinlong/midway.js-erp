import { StockPickingBackorderRel } from '../entity/stock/stock.stockpickingbackorderrel.entity';

/**
 * StockPickingBackorderRel 实体接口
 * 对应数据库表: stock_picking_backorder_rel
 */
export interface StockPickingBackorderRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockPickingBackorderRel 的参数接口
 */
export interface CreateStockPickingBackorderRelDTO extends Partial<StockPickingBackorderRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockPickingBackorderRel 的参数接口
 */
export interface UpdateStockPickingBackorderRelDTO extends Partial<StockPickingBackorderRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockPickingBackorderRel 的参数接口
 */
export interface QueryStockPickingBackorderRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockPickingBackorderRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockPickingBackorderRel 分页查询结果接口
 */
export interface StockPickingBackorderRelPageResult {
  data: StockPickingBackorderRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockPickingBackorderRel API 响应接口
 */
export interface StockPickingBackorderRelResponse {
  success: boolean;
  message: string;
  data?: StockPickingBackorderRel | StockPickingBackorderRel[] | StockPickingBackorderRelPageResult;
  error?: string;
}
