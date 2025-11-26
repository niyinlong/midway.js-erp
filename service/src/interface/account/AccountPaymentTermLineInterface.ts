import { AccountPaymentTermLine } from '../entity/account/account.accountpaymenttermline.entity';

/**
 * AccountPaymentTermLine 实体接口
 * 对应数据库表: account_payment_term_line
 */
export interface AccountPaymentTermLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountPaymentTermLine 的参数接口
 */
export interface CreateAccountPaymentTermLineDTO extends Partial<AccountPaymentTermLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountPaymentTermLine 的参数接口
 */
export interface UpdateAccountPaymentTermLineDTO extends Partial<AccountPaymentTermLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountPaymentTermLine 的参数接口
 */
export interface QueryAccountPaymentTermLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountPaymentTermLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountPaymentTermLine 分页查询结果接口
 */
export interface AccountPaymentTermLinePageResult {
  data: AccountPaymentTermLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountPaymentTermLine API 响应接口
 */
export interface AccountPaymentTermLineResponse {
  success: boolean;
  message: string;
  data?: AccountPaymentTermLine | AccountPaymentTermLine[] | AccountPaymentTermLinePageResult;
  error?: string;
}
