import { PaymentMethodResCurrencyRel } from '../entity/payment/payment.paymentmethodrescurrencyrel.entity';

/**
 * PaymentMethodResCurrencyRel 实体接口
 * 对应数据库表: payment_method_res_currency_rel
 */
export interface PaymentMethodResCurrencyRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PaymentMethodResCurrencyRel 的参数接口
 */
export interface CreatePaymentMethodResCurrencyRelDTO extends Partial<PaymentMethodResCurrencyRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PaymentMethodResCurrencyRel 的参数接口
 */
export interface UpdatePaymentMethodResCurrencyRelDTO extends Partial<PaymentMethodResCurrencyRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PaymentMethodResCurrencyRel 的参数接口
 */
export interface QueryPaymentMethodResCurrencyRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PaymentMethodResCurrencyRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PaymentMethodResCurrencyRel 分页查询结果接口
 */
export interface PaymentMethodResCurrencyRelPageResult {
  data: PaymentMethodResCurrencyRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PaymentMethodResCurrencyRel API 响应接口
 */
export interface PaymentMethodResCurrencyRelResponse {
  success: boolean;
  message: string;
  data?: PaymentMethodResCurrencyRel | PaymentMethodResCurrencyRel[] | PaymentMethodResCurrencyRelPageResult;
  error?: string;
}
