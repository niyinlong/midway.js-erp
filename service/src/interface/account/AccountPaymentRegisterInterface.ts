import { AccountPaymentRegister } from '../entity/account/account.accountpaymentregister.entity';

/**
 * AccountPaymentRegister 实体接口
 * 对应数据库表: account_payment_register
 */
export interface AccountPaymentRegisterInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountPaymentRegister 的参数接口
 */
export interface CreateAccountPaymentRegisterDTO extends Partial<AccountPaymentRegisterInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountPaymentRegister 的参数接口
 */
export interface UpdateAccountPaymentRegisterDTO extends Partial<AccountPaymentRegisterInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountPaymentRegister 的参数接口
 */
export interface QueryAccountPaymentRegisterDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountPaymentRegisterInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountPaymentRegister 分页查询结果接口
 */
export interface AccountPaymentRegisterPageResult {
  data: AccountPaymentRegister[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountPaymentRegister API 响应接口
 */
export interface AccountPaymentRegisterResponse {
  success: boolean;
  message: string;
  data?: AccountPaymentRegister | AccountPaymentRegister[] | AccountPaymentRegisterPageResult;
  error?: string;
}
