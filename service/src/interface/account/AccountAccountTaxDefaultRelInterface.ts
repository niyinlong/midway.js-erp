import { AccountAccountTaxDefaultRel } from '../entity/account/account.accountaccounttaxdefaultrel.entity';

/**
 * AccountAccountTaxDefaultRel 实体接口
 * 对应数据库表: account_account_tax_default_rel
 */
export interface AccountAccountTaxDefaultRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountAccountTaxDefaultRel 的参数接口
 */
export interface CreateAccountAccountTaxDefaultRelDTO extends Partial<AccountAccountTaxDefaultRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountAccountTaxDefaultRel 的参数接口
 */
export interface UpdateAccountAccountTaxDefaultRelDTO extends Partial<AccountAccountTaxDefaultRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountAccountTaxDefaultRel 的参数接口
 */
export interface QueryAccountAccountTaxDefaultRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountAccountTaxDefaultRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountAccountTaxDefaultRel 分页查询结果接口
 */
export interface AccountAccountTaxDefaultRelPageResult {
  data: AccountAccountTaxDefaultRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountAccountTaxDefaultRel API 响应接口
 */
export interface AccountAccountTaxDefaultRelResponse {
  success: boolean;
  message: string;
  data?: AccountAccountTaxDefaultRel | AccountAccountTaxDefaultRel[] | AccountAccountTaxDefaultRelPageResult;
  error?: string;
}
