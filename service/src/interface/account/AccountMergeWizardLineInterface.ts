import { AccountMergeWizardLine } from '../entity/account/account.accountmergewizardline.entity';

/**
 * AccountMergeWizardLine 实体接口
 * 对应数据库表: account_merge_wizard_line
 */
export interface AccountMergeWizardLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountMergeWizardLine 的参数接口
 */
export interface CreateAccountMergeWizardLineDTO extends Partial<AccountMergeWizardLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountMergeWizardLine 的参数接口
 */
export interface UpdateAccountMergeWizardLineDTO extends Partial<AccountMergeWizardLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountMergeWizardLine 的参数接口
 */
export interface QueryAccountMergeWizardLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountMergeWizardLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountMergeWizardLine 分页查询结果接口
 */
export interface AccountMergeWizardLinePageResult {
  data: AccountMergeWizardLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountMergeWizardLine API 响应接口
 */
export interface AccountMergeWizardLineResponse {
  success: boolean;
  message: string;
  data?: AccountMergeWizardLine | AccountMergeWizardLine[] | AccountMergeWizardLinePageResult;
  error?: string;
}
