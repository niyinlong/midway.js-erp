import { AccountPaymentMethodLine } from '../entity/account/account.accountpaymentmethodline.entity';

/**
 * AccountPaymentMethodLine 实体接口
 * 对应数据库表: account_payment_method_line
 */
export interface AccountPaymentMethodLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountPaymentMethodLine 的参数接口
 */
export interface CreateAccountPaymentMethodLineDTO extends Partial<AccountPaymentMethodLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountPaymentMethodLine 的参数接口
 */
export interface UpdateAccountPaymentMethodLineDTO extends Partial<AccountPaymentMethodLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountPaymentMethodLine 的参数接口
 */
export interface QueryAccountPaymentMethodLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountPaymentMethodLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountPaymentMethodLine 分页查询结果接口
 */
export interface AccountPaymentMethodLinePageResult {
  data: AccountPaymentMethodLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountPaymentMethodLine API 响应接口
 */
export interface AccountPaymentMethodLineResponse {
  success: boolean;
  message: string;
  data?: AccountPaymentMethodLine | AccountPaymentMethodLine[] | AccountPaymentMethodLinePageResult;
  error?: string;
}
