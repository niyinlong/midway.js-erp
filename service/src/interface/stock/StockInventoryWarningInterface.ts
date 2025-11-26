import { StockInventoryWarning } from '../entity/stock/stock.stockinventorywarning.entity';

/**
 * StockInventoryWarning 实体接口
 * 对应数据库表: stock_inventory_warning
 */
export interface StockInventoryWarningInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockInventoryWarning 的参数接口
 */
export interface CreateStockInventoryWarningDTO extends Partial<StockInventoryWarningInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockInventoryWarning 的参数接口
 */
export interface UpdateStockInventoryWarningDTO extends Partial<StockInventoryWarningInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockInventoryWarning 的参数接口
 */
export interface QueryStockInventoryWarningDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockInventoryWarningInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockInventoryWarning 分页查询结果接口
 */
export interface StockInventoryWarningPageResult {
  data: StockInventoryWarning[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockInventoryWarning API 响应接口
 */
export interface StockInventoryWarningResponse {
  success: boolean;
  message: string;
  data?: StockInventoryWarning | StockInventoryWarning[] | StockInventoryWarningPageResult;
  error?: string;
}
