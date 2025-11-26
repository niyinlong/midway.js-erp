import { SaleOrder } from '../entity/sale/sale.saleorder.entity';

/**
 * SaleOrder 实体接口
 * 对应数据库表: sale_order
 */
export interface SaleOrderInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SaleOrder 的参数接口
 */
export interface CreateSaleOrderDTO extends Partial<SaleOrderInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SaleOrder 的参数接口
 */
export interface UpdateSaleOrderDTO extends Partial<SaleOrderInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SaleOrder 的参数接口
 */
export interface QuerySaleOrderDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SaleOrderInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SaleOrder 分页查询结果接口
 */
export interface SaleOrderPageResult {
  data: SaleOrder[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SaleOrder API 响应接口
 */
export interface SaleOrderResponse {
  success: boolean;
  message: string;
  data?: SaleOrder | SaleOrder[] | SaleOrderPageResult;
  error?: string;
}
