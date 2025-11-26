import { StockPickingType } from '../entity/stock/stock.stockpickingtype.entity';

/**
 * StockPickingType 实体接口
 * 对应数据库表: stock_picking_type
 */
export interface StockPickingTypeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockPickingType 的参数接口
 */
export interface CreateStockPickingTypeDTO extends Partial<StockPickingTypeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockPickingType 的参数接口
 */
export interface UpdateStockPickingTypeDTO extends Partial<StockPickingTypeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockPickingType 的参数接口
 */
export interface QueryStockPickingTypeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockPickingTypeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockPickingType 分页查询结果接口
 */
export interface StockPickingTypePageResult {
  data: StockPickingType[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockPickingType API 响应接口
 */
export interface StockPickingTypeResponse {
  success: boolean;
  message: string;
  data?: StockPickingType | StockPickingType[] | StockPickingTypePageResult;
  error?: string;
}
