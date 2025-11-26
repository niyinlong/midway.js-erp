import { AccountAutomaticEntryWizard } from '../entity/account/account.accountautomaticentrywizard.entity';

/**
 * AccountAutomaticEntryWizard 实体接口
 * 对应数据库表: account_automatic_entry_wizard
 */
export interface AccountAutomaticEntryWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountAutomaticEntryWizard 的参数接口
 */
export interface CreateAccountAutomaticEntryWizardDTO extends Partial<AccountAutomaticEntryWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountAutomaticEntryWizard 的参数接口
 */
export interface UpdateAccountAutomaticEntryWizardDTO extends Partial<AccountAutomaticEntryWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountAutomaticEntryWizard 的参数接口
 */
export interface QueryAccountAutomaticEntryWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountAutomaticEntryWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountAutomaticEntryWizard 分页查询结果接口
 */
export interface AccountAutomaticEntryWizardPageResult {
  data: AccountAutomaticEntryWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountAutomaticEntryWizard API 响应接口
 */
export interface AccountAutomaticEntryWizardResponse {
  success: boolean;
  message: string;
  data?: AccountAutomaticEntryWizard | AccountAutomaticEntryWizard[] | AccountAutomaticEntryWizardPageResult;
  error?: string;
}
