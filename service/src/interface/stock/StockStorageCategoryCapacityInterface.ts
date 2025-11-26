import { StockStorageCategoryCapacity } from '../entity/stock/stock.stockstoragecategorycapacity.entity';

/**
 * StockStorageCategoryCapacity 实体接口
 * 对应数据库表: stock_storage_category_capacity
 */
export interface StockStorageCategoryCapacityInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockStorageCategoryCapacity 的参数接口
 */
export interface CreateStockStorageCategoryCapacityDTO extends Partial<StockStorageCategoryCapacityInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockStorageCategoryCapacity 的参数接口
 */
export interface UpdateStockStorageCategoryCapacityDTO extends Partial<StockStorageCategoryCapacityInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockStorageCategoryCapacity 的参数接口
 */
export interface QueryStockStorageCategoryCapacityDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockStorageCategoryCapacityInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockStorageCategoryCapacity 分页查询结果接口
 */
export interface StockStorageCategoryCapacityPageResult {
  data: StockStorageCategoryCapacity[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockStorageCategoryCapacity API 响应接口
 */
export interface StockStorageCategoryCapacityResponse {
  success: boolean;
  message: string;
  data?: StockStorageCategoryCapacity | StockStorageCategoryCapacity[] | StockStorageCategoryCapacityPageResult;
  error?: string;
}
