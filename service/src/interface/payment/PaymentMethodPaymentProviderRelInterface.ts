import { PaymentMethodPaymentProviderRel } from '../entity/payment/payment.paymentmethodpaymentproviderrel.entity';

/**
 * PaymentMethodPaymentProviderRel 实体接口
 * 对应数据库表: payment_method_payment_provider_rel
 */
export interface PaymentMethodPaymentProviderRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PaymentMethodPaymentProviderRel 的参数接口
 */
export interface CreatePaymentMethodPaymentProviderRelDTO extends Partial<PaymentMethodPaymentProviderRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PaymentMethodPaymentProviderRel 的参数接口
 */
export interface UpdatePaymentMethodPaymentProviderRelDTO extends Partial<PaymentMethodPaymentProviderRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PaymentMethodPaymentProviderRel 的参数接口
 */
export interface QueryPaymentMethodPaymentProviderRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PaymentMethodPaymentProviderRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PaymentMethodPaymentProviderRel 分页查询结果接口
 */
export interface PaymentMethodPaymentProviderRelPageResult {
  data: PaymentMethodPaymentProviderRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PaymentMethodPaymentProviderRel API 响应接口
 */
export interface PaymentMethodPaymentProviderRelResponse {
  success: boolean;
  message: string;
  data?: PaymentMethodPaymentProviderRel | PaymentMethodPaymentProviderRel[] | PaymentMethodPaymentProviderRelPageResult;
  error?: string;
}
