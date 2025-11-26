import { PaymentProvider } from '../entity/payment/payment.paymentprovider.entity';

/**
 * PaymentProvider 实体接口
 * 对应数据库表: payment_provider
 */
export interface PaymentProviderInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PaymentProvider 的参数接口
 */
export interface CreatePaymentProviderDTO extends Partial<PaymentProviderInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PaymentProvider 的参数接口
 */
export interface UpdatePaymentProviderDTO extends Partial<PaymentProviderInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PaymentProvider 的参数接口
 */
export interface QueryPaymentProviderDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PaymentProviderInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PaymentProvider 分页查询结果接口
 */
export interface PaymentProviderPageResult {
  data: PaymentProvider[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PaymentProvider API 响应接口
 */
export interface PaymentProviderResponse {
  success: boolean;
  message: string;
  data?: PaymentProvider | PaymentProvider[] | PaymentProviderPageResult;
  error?: string;
}
