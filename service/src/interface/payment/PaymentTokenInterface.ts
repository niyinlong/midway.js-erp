import { PaymentToken } from '../entity/payment/payment.paymenttoken.entity';

/**
 * PaymentToken 实体接口
 * 对应数据库表: payment_token
 */
export interface PaymentTokenInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PaymentToken 的参数接口
 */
export interface CreatePaymentTokenDTO extends Partial<PaymentTokenInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PaymentToken 的参数接口
 */
export interface UpdatePaymentTokenDTO extends Partial<PaymentTokenInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PaymentToken 的参数接口
 */
export interface QueryPaymentTokenDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PaymentTokenInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PaymentToken 分页查询结果接口
 */
export interface PaymentTokenPageResult {
  data: PaymentToken[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PaymentToken API 响应接口
 */
export interface PaymentTokenResponse {
  success: boolean;
  message: string;
  data?: PaymentToken | PaymentToken[] | PaymentTokenPageResult;
  error?: string;
}
