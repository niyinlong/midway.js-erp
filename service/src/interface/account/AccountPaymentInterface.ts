import { AccountPayment } from '../entity/account/account.accountpayment.entity';

/**
 * AccountPayment 实体接口
 * 对应数据库表: account_payment
 */
export interface AccountPaymentInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountPayment 的参数接口
 */
export interface CreateAccountPaymentDTO extends Partial<AccountPaymentInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountPayment 的参数接口
 */
export interface UpdateAccountPaymentDTO extends Partial<AccountPaymentInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountPayment 的参数接口
 */
export interface QueryAccountPaymentDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountPaymentInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountPayment 分页查询结果接口
 */
export interface AccountPaymentPageResult {
  data: AccountPayment[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountPayment API 响应接口
 */
export interface AccountPaymentResponse {
  success: boolean;
  message: string;
  data?: AccountPayment | AccountPayment[] | AccountPaymentPageResult;
  error?: string;
}
