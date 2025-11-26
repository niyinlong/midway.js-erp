import { StockPackage } from '../entity/stock/stock.stockpackage.entity';

/**
 * StockPackage 实体接口
 * 对应数据库表: stock_package
 */
export interface StockPackageInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockPackage 的参数接口
 */
export interface CreateStockPackageDTO extends Partial<StockPackageInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockPackage 的参数接口
 */
export interface UpdateStockPackageDTO extends Partial<StockPackageInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockPackage 的参数接口
 */
export interface QueryStockPackageDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockPackageInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockPackage 分页查询结果接口
 */
export interface StockPackagePageResult {
  data: StockPackage[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockPackage API 响应接口
 */
export interface StockPackageResponse {
  success: boolean;
  message: string;
  data?: StockPackage | StockPackage[] | StockPackagePageResult;
  error?: string;
}
