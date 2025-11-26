import { PaymentMethodResCountryRel } from '../entity/payment/payment.paymentmethodrescountryrel.entity';

/**
 * PaymentMethodResCountryRel 实体接口
 * 对应数据库表: payment_method_res_country_rel
 */
export interface PaymentMethodResCountryRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PaymentMethodResCountryRel 的参数接口
 */
export interface CreatePaymentMethodResCountryRelDTO extends Partial<PaymentMethodResCountryRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PaymentMethodResCountryRel 的参数接口
 */
export interface UpdatePaymentMethodResCountryRelDTO extends Partial<PaymentMethodResCountryRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PaymentMethodResCountryRel 的参数接口
 */
export interface QueryPaymentMethodResCountryRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PaymentMethodResCountryRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PaymentMethodResCountryRel 分页查询结果接口
 */
export interface PaymentMethodResCountryRelPageResult {
  data: PaymentMethodResCountryRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PaymentMethodResCountryRel API 响应接口
 */
export interface PaymentMethodResCountryRelResponse {
  success: boolean;
  message: string;
  data?: PaymentMethodResCountryRel | PaymentMethodResCountryRel[] | PaymentMethodResCountryRelPageResult;
  error?: string;
}
