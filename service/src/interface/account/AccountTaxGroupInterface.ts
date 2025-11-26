import { AccountTaxGroup } from '../entity/account/account.accounttaxgroup.entity';

/**
 * AccountTaxGroup 实体接口
 * 对应数据库表: account_tax_group
 */
export interface AccountTaxGroupInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountTaxGroup 的参数接口
 */
export interface CreateAccountTaxGroupDTO extends Partial<AccountTaxGroupInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountTaxGroup 的参数接口
 */
export interface UpdateAccountTaxGroupDTO extends Partial<AccountTaxGroupInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountTaxGroup 的参数接口
 */
export interface QueryAccountTaxGroupDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountTaxGroupInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountTaxGroup 分页查询结果接口
 */
export interface AccountTaxGroupPageResult {
  data: AccountTaxGroup[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountTaxGroup API 响应接口
 */
export interface AccountTaxGroupResponse {
  success: boolean;
  message: string;
  data?: AccountTaxGroup | AccountTaxGroup[] | AccountTaxGroupPageResult;
  error?: string;
}
