import { AccountTax } from '../entity/account/account.accounttax.entity';

/**
 * AccountTax 实体接口
 * 对应数据库表: account_tax
 */
export interface AccountTaxInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountTax 的参数接口
 */
export interface CreateAccountTaxDTO extends Partial<AccountTaxInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountTax 的参数接口
 */
export interface UpdateAccountTaxDTO extends Partial<AccountTaxInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountTax 的参数接口
 */
export interface QueryAccountTaxDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountTaxInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountTax 分页查询结果接口
 */
export interface AccountTaxPageResult {
  data: AccountTax[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountTax API 响应接口
 */
export interface AccountTaxResponse {
  success: boolean;
  message: string;
  data?: AccountTax | AccountTax[] | AccountTaxPageResult;
  error?: string;
}
