import { SaleMassCancelOrders } from '../entity/sale/sale.salemasscancelorders.entity';

/**
 * SaleMassCancelOrders 实体接口
 * 对应数据库表: sale_mass_cancel_orders
 */
export interface SaleMassCancelOrdersInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SaleMassCancelOrders 的参数接口
 */
export interface CreateSaleMassCancelOrdersDTO extends Partial<SaleMassCancelOrdersInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SaleMassCancelOrders 的参数接口
 */
export interface UpdateSaleMassCancelOrdersDTO extends Partial<SaleMassCancelOrdersInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SaleMassCancelOrders 的参数接口
 */
export interface QuerySaleMassCancelOrdersDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SaleMassCancelOrdersInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SaleMassCancelOrders 分页查询结果接口
 */
export interface SaleMassCancelOrdersPageResult {
  data: SaleMassCancelOrders[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SaleMassCancelOrders API 响应接口
 */
export interface SaleMassCancelOrdersResponse {
  success: boolean;
  message: string;
  data?: SaleMassCancelOrders | SaleMassCancelOrders[] | SaleMassCancelOrdersPageResult;
  error?: string;
}
