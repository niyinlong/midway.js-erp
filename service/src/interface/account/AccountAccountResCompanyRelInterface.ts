import { AccountAccountResCompanyRel } from '../entity/account/account.accountaccountrescompanyrel.entity';

/**
 * AccountAccountResCompanyRel 实体接口
 * 对应数据库表: account_account_res_company_rel
 */
export interface AccountAccountResCompanyRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountAccountResCompanyRel 的参数接口
 */
export interface CreateAccountAccountResCompanyRelDTO extends Partial<AccountAccountResCompanyRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountAccountResCompanyRel 的参数接口
 */
export interface UpdateAccountAccountResCompanyRelDTO extends Partial<AccountAccountResCompanyRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountAccountResCompanyRel 的参数接口
 */
export interface QueryAccountAccountResCompanyRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountAccountResCompanyRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountAccountResCompanyRel 分页查询结果接口
 */
export interface AccountAccountResCompanyRelPageResult {
  data: AccountAccountResCompanyRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountAccountResCompanyRel API 响应接口
 */
export interface AccountAccountResCompanyRelResponse {
  success: boolean;
  message: string;
  data?: AccountAccountResCompanyRel | AccountAccountResCompanyRel[] | AccountAccountResCompanyRelPageResult;
  error?: string;
}
