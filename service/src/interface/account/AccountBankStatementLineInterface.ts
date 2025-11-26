import { AccountBankStatementLine } from '../entity/account/account.accountbankstatementline.entity';

/**
 * AccountBankStatementLine 实体接口
 * 对应数据库表: account_bank_statement_line
 */
export interface AccountBankStatementLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountBankStatementLine 的参数接口
 */
export interface CreateAccountBankStatementLineDTO extends Partial<AccountBankStatementLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountBankStatementLine 的参数接口
 */
export interface UpdateAccountBankStatementLineDTO extends Partial<AccountBankStatementLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountBankStatementLine 的参数接口
 */
export interface QueryAccountBankStatementLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountBankStatementLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountBankStatementLine 分页查询结果接口
 */
export interface AccountBankStatementLinePageResult {
  data: AccountBankStatementLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountBankStatementLine API 响应接口
 */
export interface AccountBankStatementLineResponse {
  success: boolean;
  message: string;
  data?: AccountBankStatementLine | AccountBankStatementLine[] | AccountBankStatementLinePageResult;
  error?: string;
}
