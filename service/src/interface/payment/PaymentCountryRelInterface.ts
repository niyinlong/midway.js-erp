import { PaymentCountryRel } from '../entity/payment/payment.paymentcountryrel.entity';

/**
 * PaymentCountryRel 实体接口
 * 对应数据库表: payment_country_rel
 */
export interface PaymentCountryRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PaymentCountryRel 的参数接口
 */
export interface CreatePaymentCountryRelDTO extends Partial<PaymentCountryRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PaymentCountryRel 的参数接口
 */
export interface UpdatePaymentCountryRelDTO extends Partial<PaymentCountryRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PaymentCountryRel 的参数接口
 */
export interface QueryPaymentCountryRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PaymentCountryRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PaymentCountryRel 分页查询结果接口
 */
export interface PaymentCountryRelPageResult {
  data: PaymentCountryRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PaymentCountryRel API 响应接口
 */
export interface PaymentCountryRelResponse {
  success: boolean;
  message: string;
  data?: PaymentCountryRel | PaymentCountryRel[] | PaymentCountryRelPageResult;
  error?: string;
}
