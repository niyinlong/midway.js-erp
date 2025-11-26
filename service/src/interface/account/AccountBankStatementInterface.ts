import { AccountBankStatement } from '../entity/account/account.accountbankstatement.entity';

/**
 * AccountBankStatement 实体接口
 * 对应数据库表: account_bank_statement
 */
export interface AccountBankStatementInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountBankStatement 的参数接口
 */
export interface CreateAccountBankStatementDTO extends Partial<AccountBankStatementInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountBankStatement 的参数接口
 */
export interface UpdateAccountBankStatementDTO extends Partial<AccountBankStatementInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountBankStatement 的参数接口
 */
export interface QueryAccountBankStatementDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountBankStatementInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountBankStatement 分页查询结果接口
 */
export interface AccountBankStatementPageResult {
  data: AccountBankStatement[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountBankStatement API 响应接口
 */
export interface AccountBankStatementResponse {
  success: boolean;
  message: string;
  data?: AccountBankStatement | AccountBankStatement[] | AccountBankStatementPageResult;
  error?: string;
}
