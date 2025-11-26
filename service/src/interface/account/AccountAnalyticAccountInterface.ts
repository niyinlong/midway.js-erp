import { AccountAnalyticAccount } from '../entity/account/account.accountanalyticaccount.entity';

/**
 * AccountAnalyticAccount 实体接口
 * 对应数据库表: account_analytic_account
 */
export interface AccountAnalyticAccountInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountAnalyticAccount 的参数接口
 */
export interface CreateAccountAnalyticAccountDTO extends Partial<AccountAnalyticAccountInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountAnalyticAccount 的参数接口
 */
export interface UpdateAccountAnalyticAccountDTO extends Partial<AccountAnalyticAccountInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountAnalyticAccount 的参数接口
 */
export interface QueryAccountAnalyticAccountDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountAnalyticAccountInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountAnalyticAccount 分页查询结果接口
 */
export interface AccountAnalyticAccountPageResult {
  data: AccountAnalyticAccount[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountAnalyticAccount API 响应接口
 */
export interface AccountAnalyticAccountResponse {
  success: boolean;
  message: string;
  data?: AccountAnalyticAccount | AccountAnalyticAccount[] | AccountAnalyticAccountPageResult;
  error?: string;
}
