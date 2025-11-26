import { AccountFiscalPositionAccount } from '../entity/account/account.accountfiscalpositionaccount.entity';

/**
 * AccountFiscalPositionAccount 实体接口
 * 对应数据库表: account_fiscal_position_account
 */
export interface AccountFiscalPositionAccountInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountFiscalPositionAccount 的参数接口
 */
export interface CreateAccountFiscalPositionAccountDTO extends Partial<AccountFiscalPositionAccountInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountFiscalPositionAccount 的参数接口
 */
export interface UpdateAccountFiscalPositionAccountDTO extends Partial<AccountFiscalPositionAccountInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountFiscalPositionAccount 的参数接口
 */
export interface QueryAccountFiscalPositionAccountDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountFiscalPositionAccountInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountFiscalPositionAccount 分页查询结果接口
 */
export interface AccountFiscalPositionAccountPageResult {
  data: AccountFiscalPositionAccount[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountFiscalPositionAccount API 响应接口
 */
export interface AccountFiscalPositionAccountResponse {
  success: boolean;
  message: string;
  data?: AccountFiscalPositionAccount | AccountFiscalPositionAccount[] | AccountFiscalPositionAccountPageResult;
  error?: string;
}
