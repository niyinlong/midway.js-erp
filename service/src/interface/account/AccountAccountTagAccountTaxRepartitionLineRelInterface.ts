import { AccountAccountTagAccountTaxRepartitionLineRel } from '../entity/account/account.accountaccounttagaccounttaxrepartitionlinerel.entity';

/**
 * AccountAccountTagAccountTaxRepartitionLineRel 实体接口
 * 对应数据库表: account_account_tag_account_tax_repartition_line_rel
 */
export interface AccountAccountTagAccountTaxRepartitionLineRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountAccountTagAccountTaxRepartitionLineRel 的参数接口
 */
export interface CreateAccountAccountTagAccountTaxRepartitionLineRelDTO extends Partial<AccountAccountTagAccountTaxRepartitionLineRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountAccountTagAccountTaxRepartitionLineRel 的参数接口
 */
export interface UpdateAccountAccountTagAccountTaxRepartitionLineRelDTO extends Partial<AccountAccountTagAccountTaxRepartitionLineRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountAccountTagAccountTaxRepartitionLineRel 的参数接口
 */
export interface QueryAccountAccountTagAccountTaxRepartitionLineRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountAccountTagAccountTaxRepartitionLineRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountAccountTagAccountTaxRepartitionLineRel 分页查询结果接口
 */
export interface AccountAccountTagAccountTaxRepartitionLineRelPageResult {
  data: AccountAccountTagAccountTaxRepartitionLineRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountAccountTagAccountTaxRepartitionLineRel API 响应接口
 */
export interface AccountAccountTagAccountTaxRepartitionLineRelResponse {
  success: boolean;
  message: string;
  data?: AccountAccountTagAccountTaxRepartitionLineRel | AccountAccountTagAccountTaxRepartitionLineRel[] | AccountAccountTagAccountTaxRepartitionLineRelPageResult;
  error?: string;
}
