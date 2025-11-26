import { AccountMergeWizard } from '../entity/account/account.accountmergewizard.entity';

/**
 * AccountMergeWizard 实体接口
 * 对应数据库表: account_merge_wizard
 */
export interface AccountMergeWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountMergeWizard 的参数接口
 */
export interface CreateAccountMergeWizardDTO extends Partial<AccountMergeWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountMergeWizard 的参数接口
 */
export interface UpdateAccountMergeWizardDTO extends Partial<AccountMergeWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountMergeWizard 的参数接口
 */
export interface QueryAccountMergeWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountMergeWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountMergeWizard 分页查询结果接口
 */
export interface AccountMergeWizardPageResult {
  data: AccountMergeWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountMergeWizard API 响应接口
 */
export interface AccountMergeWizardResponse {
  success: boolean;
  message: string;
  data?: AccountMergeWizard | AccountMergeWizard[] | AccountMergeWizardPageResult;
  error?: string;
}
