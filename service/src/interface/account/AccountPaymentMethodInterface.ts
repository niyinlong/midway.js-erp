import { AccountPaymentMethod } from '../entity/account/account.accountpaymentmethod.entity';

/**
 * AccountPaymentMethod 实体接口
 * 对应数据库表: account_payment_method
 */
export interface AccountPaymentMethodInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountPaymentMethod 的参数接口
 */
export interface CreateAccountPaymentMethodDTO extends Partial<AccountPaymentMethodInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountPaymentMethod 的参数接口
 */
export interface UpdateAccountPaymentMethodDTO extends Partial<AccountPaymentMethodInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountPaymentMethod 的参数接口
 */
export interface QueryAccountPaymentMethodDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountPaymentMethodInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountPaymentMethod 分页查询结果接口
 */
export interface AccountPaymentMethodPageResult {
  data: AccountPaymentMethod[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountPaymentMethod API 响应接口
 */
export interface AccountPaymentMethodResponse {
  success: boolean;
  message: string;
  data?: AccountPaymentMethod | AccountPaymentMethod[] | AccountPaymentMethodPageResult;
  error?: string;
}
