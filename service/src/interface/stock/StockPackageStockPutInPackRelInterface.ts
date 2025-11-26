import { StockPackageStockPutInPackRel } from '../entity/stock/stock.stockpackagestockputinpackrel.entity';

/**
 * StockPackageStockPutInPackRel 实体接口
 * 对应数据库表: stock_package_stock_put_in_pack_rel
 */
export interface StockPackageStockPutInPackRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockPackageStockPutInPackRel 的参数接口
 */
export interface CreateStockPackageStockPutInPackRelDTO extends Partial<StockPackageStockPutInPackRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockPackageStockPutInPackRel 的参数接口
 */
export interface UpdateStockPackageStockPutInPackRelDTO extends Partial<StockPackageStockPutInPackRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockPackageStockPutInPackRel 的参数接口
 */
export interface QueryStockPackageStockPutInPackRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockPackageStockPutInPackRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockPackageStockPutInPackRel 分页查询结果接口
 */
export interface StockPackageStockPutInPackRelPageResult {
  data: StockPackageStockPutInPackRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockPackageStockPutInPackRel API 响应接口
 */
export interface StockPackageStockPutInPackRelResponse {
  success: boolean;
  message: string;
  data?: StockPackageStockPutInPackRel | StockPackageStockPutInPackRel[] | StockPackageStockPutInPackRelPageResult;
  error?: string;
}
