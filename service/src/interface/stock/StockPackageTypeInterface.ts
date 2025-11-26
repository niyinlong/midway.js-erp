import { StockPackageType } from '../entity/stock/stock.stockpackagetype.entity';

/**
 * StockPackageType 实体接口
 * 对应数据库表: stock_package_type
 */
export interface StockPackageTypeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockPackageType 的参数接口
 */
export interface CreateStockPackageTypeDTO extends Partial<StockPackageTypeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockPackageType 的参数接口
 */
export interface UpdateStockPackageTypeDTO extends Partial<StockPackageTypeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockPackageType 的参数接口
 */
export interface QueryStockPackageTypeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockPackageTypeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockPackageType 分页查询结果接口
 */
export interface StockPackageTypePageResult {
  data: StockPackageType[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockPackageType API 响应接口
 */
export interface StockPackageTypeResponse {
  success: boolean;
  message: string;
  data?: StockPackageType | StockPackageType[] | StockPackageTypePageResult;
  error?: string;
}
