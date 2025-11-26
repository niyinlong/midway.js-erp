import { PaymentTransaction } from '../entity/payment/payment.paymenttransaction.entity';

/**
 * PaymentTransaction 实体接口
 * 对应数据库表: payment_transaction
 */
export interface PaymentTransactionInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PaymentTransaction 的参数接口
 */
export interface CreatePaymentTransactionDTO extends Partial<PaymentTransactionInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PaymentTransaction 的参数接口
 */
export interface UpdatePaymentTransactionDTO extends Partial<PaymentTransactionInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PaymentTransaction 的参数接口
 */
export interface QueryPaymentTransactionDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PaymentTransactionInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PaymentTransaction 分页查询结果接口
 */
export interface PaymentTransactionPageResult {
  data: PaymentTransaction[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PaymentTransaction API 响应接口
 */
export interface PaymentTransactionResponse {
  success: boolean;
  message: string;
  data?: PaymentTransaction | PaymentTransaction[] | PaymentTransactionPageResult;
  error?: string;
}
