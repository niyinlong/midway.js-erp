import { AccountAnalyticLine } from '../entity/account/account.accountanalyticline.entity';

/**
 * AccountAnalyticLine 实体接口
 * 对应数据库表: account_analytic_line
 */
export interface AccountAnalyticLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountAnalyticLine 的参数接口
 */
export interface CreateAccountAnalyticLineDTO extends Partial<AccountAnalyticLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountAnalyticLine 的参数接口
 */
export interface UpdateAccountAnalyticLineDTO extends Partial<AccountAnalyticLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountAnalyticLine 的参数接口
 */
export interface QueryAccountAnalyticLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountAnalyticLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountAnalyticLine 分页查询结果接口
 */
export interface AccountAnalyticLinePageResult {
  data: AccountAnalyticLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountAnalyticLine API 响应接口
 */
export interface AccountAnalyticLineResponse {
  success: boolean;
  message: string;
  data?: AccountAnalyticLine | AccountAnalyticLine[] | AccountAnalyticLinePageResult;
  error?: string;
}
