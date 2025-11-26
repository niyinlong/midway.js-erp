import { StockPackageTypeStockRouteRel } from '../entity/stock/stock.stockpackagetypestockrouterel.entity';

/**
 * StockPackageTypeStockRouteRel 实体接口
 * 对应数据库表: stock_package_type_stock_route_rel
 */
export interface StockPackageTypeStockRouteRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockPackageTypeStockRouteRel 的参数接口
 */
export interface CreateStockPackageTypeStockRouteRelDTO extends Partial<StockPackageTypeStockRouteRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockPackageTypeStockRouteRel 的参数接口
 */
export interface UpdateStockPackageTypeStockRouteRelDTO extends Partial<StockPackageTypeStockRouteRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockPackageTypeStockRouteRel 的参数接口
 */
export interface QueryStockPackageTypeStockRouteRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockPackageTypeStockRouteRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockPackageTypeStockRouteRel 分页查询结果接口
 */
export interface StockPackageTypeStockRouteRelPageResult {
  data: StockPackageTypeStockRouteRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockPackageTypeStockRouteRel API 响应接口
 */
export interface StockPackageTypeStockRouteRelResponse {
  success: boolean;
  message: string;
  data?: StockPackageTypeStockRouteRel | StockPackageTypeStockRouteRel[] | StockPackageTypeStockRouteRelPageResult;
  error?: string;
}
