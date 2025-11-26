import { SaleAdvancePaymentInvSaleOrderRel } from '../entity/sale/sale.saleadvancepaymentinvsaleorderrel.entity';

/**
 * SaleAdvancePaymentInvSaleOrderRel 实体接口
 * 对应数据库表: sale_advance_payment_inv_sale_order_rel
 */
export interface SaleAdvancePaymentInvSaleOrderRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SaleAdvancePaymentInvSaleOrderRel 的参数接口
 */
export interface CreateSaleAdvancePaymentInvSaleOrderRelDTO extends Partial<SaleAdvancePaymentInvSaleOrderRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SaleAdvancePaymentInvSaleOrderRel 的参数接口
 */
export interface UpdateSaleAdvancePaymentInvSaleOrderRelDTO extends Partial<SaleAdvancePaymentInvSaleOrderRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SaleAdvancePaymentInvSaleOrderRel 的参数接口
 */
export interface QuerySaleAdvancePaymentInvSaleOrderRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SaleAdvancePaymentInvSaleOrderRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SaleAdvancePaymentInvSaleOrderRel 分页查询结果接口
 */
export interface SaleAdvancePaymentInvSaleOrderRelPageResult {
  data: SaleAdvancePaymentInvSaleOrderRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SaleAdvancePaymentInvSaleOrderRel API 响应接口
 */
export interface SaleAdvancePaymentInvSaleOrderRelResponse {
  success: boolean;
  message: string;
  data?: SaleAdvancePaymentInvSaleOrderRel | SaleAdvancePaymentInvSaleOrderRel[] | SaleAdvancePaymentInvSaleOrderRelPageResult;
  error?: string;
}
