import { AccountTaxAlternatives } from '../entity/account/account.accounttaxalternatives.entity';

/**
 * AccountTaxAlternatives 实体接口
 * 对应数据库表: account_tax_alternatives
 */
export interface AccountTaxAlternativesInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountTaxAlternatives 的参数接口
 */
export interface CreateAccountTaxAlternativesDTO extends Partial<AccountTaxAlternativesInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountTaxAlternatives 的参数接口
 */
export interface UpdateAccountTaxAlternativesDTO extends Partial<AccountTaxAlternativesInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountTaxAlternatives 的参数接口
 */
export interface QueryAccountTaxAlternativesDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountTaxAlternativesInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountTaxAlternatives 分页查询结果接口
 */
export interface AccountTaxAlternativesPageResult {
  data: AccountTaxAlternatives[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountTaxAlternatives API 响应接口
 */
export interface AccountTaxAlternativesResponse {
  success: boolean;
  message: string;
  data?: AccountTaxAlternatives | AccountTaxAlternatives[] | AccountTaxAlternativesPageResult;
  error?: string;
}
