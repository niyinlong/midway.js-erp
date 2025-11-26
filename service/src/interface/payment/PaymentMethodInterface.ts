import { PaymentMethod } from '../entity/payment/payment.paymentmethod.entity';

/**
 * PaymentMethod 实体接口
 * 对应数据库表: payment_method
 */
export interface PaymentMethodInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PaymentMethod 的参数接口
 */
export interface CreatePaymentMethodDTO extends Partial<PaymentMethodInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PaymentMethod 的参数接口
 */
export interface UpdatePaymentMethodDTO extends Partial<PaymentMethodInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PaymentMethod 的参数接口
 */
export interface QueryPaymentMethodDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PaymentMethodInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PaymentMethod 分页查询结果接口
 */
export interface PaymentMethodPageResult {
  data: PaymentMethod[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PaymentMethod API 响应接口
 */
export interface PaymentMethodResponse {
  success: boolean;
  message: string;
  data?: PaymentMethod | PaymentMethod[] | PaymentMethodPageResult;
  error?: string;
}
