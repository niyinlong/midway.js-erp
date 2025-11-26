import { AccountFinancialYearOp } from '../entity/account/account.accountfinancialyearop.entity';

/**
 * AccountFinancialYearOp 实体接口
 * 对应数据库表: account_financial_year_op
 */
export interface AccountFinancialYearOpInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountFinancialYearOp 的参数接口
 */
export interface CreateAccountFinancialYearOpDTO extends Partial<AccountFinancialYearOpInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountFinancialYearOp 的参数接口
 */
export interface UpdateAccountFinancialYearOpDTO extends Partial<AccountFinancialYearOpInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountFinancialYearOp 的参数接口
 */
export interface QueryAccountFinancialYearOpDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountFinancialYearOpInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountFinancialYearOp 分页查询结果接口
 */
export interface AccountFinancialYearOpPageResult {
  data: AccountFinancialYearOp[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountFinancialYearOp API 响应接口
 */
export interface AccountFinancialYearOpResponse {
  success: boolean;
  message: string;
  data?: AccountFinancialYearOp | AccountFinancialYearOp[] | AccountFinancialYearOpPageResult;
  error?: string;
}
