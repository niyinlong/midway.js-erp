import { SaleOrderLineStockRouteRel } from '../entity/sale/sale.saleorderlinestockrouterel.entity';

/**
 * SaleOrderLineStockRouteRel 实体接口
 * 对应数据库表: sale_order_line_stock_route_rel
 */
export interface SaleOrderLineStockRouteRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SaleOrderLineStockRouteRel 的参数接口
 */
export interface CreateSaleOrderLineStockRouteRelDTO extends Partial<SaleOrderLineStockRouteRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SaleOrderLineStockRouteRel 的参数接口
 */
export interface UpdateSaleOrderLineStockRouteRelDTO extends Partial<SaleOrderLineStockRouteRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SaleOrderLineStockRouteRel 的参数接口
 */
export interface QuerySaleOrderLineStockRouteRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SaleOrderLineStockRouteRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SaleOrderLineStockRouteRel 分页查询结果接口
 */
export interface SaleOrderLineStockRouteRelPageResult {
  data: SaleOrderLineStockRouteRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SaleOrderLineStockRouteRel API 响应接口
 */
export interface SaleOrderLineStockRouteRelResponse {
  success: boolean;
  message: string;
  data?: SaleOrderLineStockRouteRel | SaleOrderLineStockRouteRel[] | SaleOrderLineStockRouteRelPageResult;
  error?: string;
}
