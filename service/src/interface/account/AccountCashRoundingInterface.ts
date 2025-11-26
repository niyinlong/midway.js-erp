import { AccountCashRounding } from '../entity/account/account.accountcashrounding.entity';

/**
 * AccountCashRounding 实体接口
 * 对应数据库表: account_cash_rounding
 */
export interface AccountCashRoundingInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountCashRounding 的参数接口
 */
export interface CreateAccountCashRoundingDTO extends Partial<AccountCashRoundingInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountCashRounding 的参数接口
 */
export interface UpdateAccountCashRoundingDTO extends Partial<AccountCashRoundingInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountCashRounding 的参数接口
 */
export interface QueryAccountCashRoundingDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountCashRoundingInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountCashRounding 分页查询结果接口
 */
export interface AccountCashRoundingPageResult {
  data: AccountCashRounding[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountCashRounding API 响应接口
 */
export interface AccountCashRoundingResponse {
  success: boolean;
  message: string;
  data?: AccountCashRounding | AccountCashRounding[] | AccountCashRoundingPageResult;
  error?: string;
}
