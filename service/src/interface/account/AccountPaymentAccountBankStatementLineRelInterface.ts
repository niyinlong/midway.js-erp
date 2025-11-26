import { AccountPaymentAccountBankStatementLineRel } from '../entity/account/account.accountpaymentaccountbankstatementlinerel.entity';

/**
 * AccountPaymentAccountBankStatementLineRel 实体接口
 * 对应数据库表: account_payment_account_bank_statement_line_rel
 */
export interface AccountPaymentAccountBankStatementLineRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountPaymentAccountBankStatementLineRel 的参数接口
 */
export interface CreateAccountPaymentAccountBankStatementLineRelDTO extends Partial<AccountPaymentAccountBankStatementLineRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountPaymentAccountBankStatementLineRel 的参数接口
 */
export interface UpdateAccountPaymentAccountBankStatementLineRelDTO extends Partial<AccountPaymentAccountBankStatementLineRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountPaymentAccountBankStatementLineRel 的参数接口
 */
export interface QueryAccountPaymentAccountBankStatementLineRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountPaymentAccountBankStatementLineRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountPaymentAccountBankStatementLineRel 分页查询结果接口
 */
export interface AccountPaymentAccountBankStatementLineRelPageResult {
  data: AccountPaymentAccountBankStatementLineRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountPaymentAccountBankStatementLineRel API 响应接口
 */
export interface AccountPaymentAccountBankStatementLineRelResponse {
  success: boolean;
  message: string;
  data?: AccountPaymentAccountBankStatementLineRel | AccountPaymentAccountBankStatementLineRel[] | AccountPaymentAccountBankStatementLineRelPageResult;
  error?: string;
}
