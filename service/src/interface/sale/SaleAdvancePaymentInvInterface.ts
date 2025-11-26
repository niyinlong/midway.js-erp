import { SaleAdvancePaymentInv } from '../entity/sale/sale.saleadvancepaymentinv.entity';

/**
 * SaleAdvancePaymentInv 实体接口
 * 对应数据库表: sale_advance_payment_inv
 */
export interface SaleAdvancePaymentInvInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SaleAdvancePaymentInv 的参数接口
 */
export interface CreateSaleAdvancePaymentInvDTO extends Partial<SaleAdvancePaymentInvInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SaleAdvancePaymentInv 的参数接口
 */
export interface UpdateSaleAdvancePaymentInvDTO extends Partial<SaleAdvancePaymentInvInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SaleAdvancePaymentInv 的参数接口
 */
export interface QuerySaleAdvancePaymentInvDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SaleAdvancePaymentInvInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SaleAdvancePaymentInv 分页查询结果接口
 */
export interface SaleAdvancePaymentInvPageResult {
  data: SaleAdvancePaymentInv[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SaleAdvancePaymentInv API 响应接口
 */
export interface SaleAdvancePaymentInvResponse {
  success: boolean;
  message: string;
  data?: SaleAdvancePaymentInv | SaleAdvancePaymentInv[] | SaleAdvancePaymentInvPageResult;
  error?: string;
}
