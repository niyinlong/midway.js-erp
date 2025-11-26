import { AccountPaymentTerm } from '../entity/account/account.accountpaymentterm.entity';

/**
 * AccountPaymentTerm 实体接口
 * 对应数据库表: account_payment_term
 */
export interface AccountPaymentTermInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountPaymentTerm 的参数接口
 */
export interface CreateAccountPaymentTermDTO extends Partial<AccountPaymentTermInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountPaymentTerm 的参数接口
 */
export interface UpdateAccountPaymentTermDTO extends Partial<AccountPaymentTermInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountPaymentTerm 的参数接口
 */
export interface QueryAccountPaymentTermDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountPaymentTermInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountPaymentTerm 分页查询结果接口
 */
export interface AccountPaymentTermPageResult {
  data: AccountPaymentTerm[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountPaymentTerm API 响应接口
 */
export interface AccountPaymentTermResponse {
  success: boolean;
  message: string;
  data?: AccountPaymentTerm | AccountPaymentTerm[] | AccountPaymentTermPageResult;
  error?: string;
}
