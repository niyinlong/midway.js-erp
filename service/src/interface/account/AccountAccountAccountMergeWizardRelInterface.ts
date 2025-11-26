import { AccountAccountAccountMergeWizardRel } from '../entity/account/account.accountaccountaccountmergewizardrel.entity';

/**
 * AccountAccountAccountMergeWizardRel 实体接口
 * 对应数据库表: account_account_account_merge_wizard_rel
 */
export interface AccountAccountAccountMergeWizardRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountAccountAccountMergeWizardRel 的参数接口
 */
export interface CreateAccountAccountAccountMergeWizardRelDTO extends Partial<AccountAccountAccountMergeWizardRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountAccountAccountMergeWizardRel 的参数接口
 */
export interface UpdateAccountAccountAccountMergeWizardRelDTO extends Partial<AccountAccountAccountMergeWizardRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountAccountAccountMergeWizardRel 的参数接口
 */
export interface QueryAccountAccountAccountMergeWizardRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountAccountAccountMergeWizardRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountAccountAccountMergeWizardRel 分页查询结果接口
 */
export interface AccountAccountAccountMergeWizardRelPageResult {
  data: AccountAccountAccountMergeWizardRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountAccountAccountMergeWizardRel API 响应接口
 */
export interface AccountAccountAccountMergeWizardRelResponse {
  success: boolean;
  message: string;
  data?: AccountAccountAccountMergeWizardRel | AccountAccountAccountMergeWizardRel[] | AccountAccountAccountMergeWizardRelPageResult;
  error?: string;
}
