import { PaymentCurrencyRel } from '../entity/payment/payment.paymentcurrencyrel.entity';

/**
 * PaymentCurrencyRel 实体接口
 * 对应数据库表: payment_currency_rel
 */
export interface PaymentCurrencyRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PaymentCurrencyRel 的参数接口
 */
export interface CreatePaymentCurrencyRelDTO extends Partial<PaymentCurrencyRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PaymentCurrencyRel 的参数接口
 */
export interface UpdatePaymentCurrencyRelDTO extends Partial<PaymentCurrencyRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PaymentCurrencyRel 的参数接口
 */
export interface QueryPaymentCurrencyRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PaymentCurrencyRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PaymentCurrencyRel 分页查询结果接口
 */
export interface PaymentCurrencyRelPageResult {
  data: PaymentCurrencyRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PaymentCurrencyRel API 响应接口
 */
export interface PaymentCurrencyRelResponse {
  success: boolean;
  message: string;
  data?: PaymentCurrencyRel | PaymentCurrencyRel[] | PaymentCurrencyRelPageResult;
  error?: string;
}
