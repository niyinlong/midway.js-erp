import { AccountMoveAccountPayment } from '../entity/account/account.accountmoveaccountpayment.entity';

/**
 * AccountMoveAccountPayment 实体接口
 * 对应数据库表: account_move__account_payment
 */
export interface AccountMoveAccountPaymentInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountMoveAccountPayment 的参数接口
 */
export interface CreateAccountMoveAccountPaymentDTO extends Partial<AccountMoveAccountPaymentInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountMoveAccountPayment 的参数接口
 */
export interface UpdateAccountMoveAccountPaymentDTO extends Partial<AccountMoveAccountPaymentInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountMoveAccountPayment 的参数接口
 */
export interface QueryAccountMoveAccountPaymentDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountMoveAccountPaymentInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountMoveAccountPayment 分页查询结果接口
 */
export interface AccountMoveAccountPaymentPageResult {
  data: AccountMoveAccountPayment[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountMoveAccountPayment API 响应接口
 */
export interface AccountMoveAccountPaymentResponse {
  success: boolean;
  message: string;
  data?: AccountMoveAccountPayment | AccountMoveAccountPayment[] | AccountMoveAccountPaymentPageResult;
  error?: string;
}
