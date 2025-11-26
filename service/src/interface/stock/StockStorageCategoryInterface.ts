import { StockStorageCategory } from '../entity/stock/stock.stockstoragecategory.entity';

/**
 * StockStorageCategory 实体接口
 * 对应数据库表: stock_storage_category
 */
export interface StockStorageCategoryInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockStorageCategory 的参数接口
 */
export interface CreateStockStorageCategoryDTO extends Partial<StockStorageCategoryInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockStorageCategory 的参数接口
 */
export interface UpdateStockStorageCategoryDTO extends Partial<StockStorageCategoryInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockStorageCategory 的参数接口
 */
export interface QueryStockStorageCategoryDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockStorageCategoryInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockStorageCategory 分页查询结果接口
 */
export interface StockStorageCategoryPageResult {
  data: StockStorageCategory[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockStorageCategory API 响应接口
 */
export interface StockStorageCategoryResponse {
  success: boolean;
  message: string;
  data?: StockStorageCategory | StockStorageCategory[] | StockStorageCategoryPageResult;
  error?: string;
}
