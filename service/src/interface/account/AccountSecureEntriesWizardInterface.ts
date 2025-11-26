import { AccountSecureEntriesWizard } from '../entity/account/account.accountsecureentrieswizard.entity';

/**
 * AccountSecureEntriesWizard 实体接口
 * 对应数据库表: account_secure_entries_wizard
 */
export interface AccountSecureEntriesWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountSecureEntriesWizard 的参数接口
 */
export interface CreateAccountSecureEntriesWizardDTO extends Partial<AccountSecureEntriesWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountSecureEntriesWizard 的参数接口
 */
export interface UpdateAccountSecureEntriesWizardDTO extends Partial<AccountSecureEntriesWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountSecureEntriesWizard 的参数接口
 */
export interface QueryAccountSecureEntriesWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountSecureEntriesWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountSecureEntriesWizard 分页查询结果接口
 */
export interface AccountSecureEntriesWizardPageResult {
  data: AccountSecureEntriesWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountSecureEntriesWizard API 响应接口
 */
export interface AccountSecureEntriesWizardResponse {
  success: boolean;
  message: string;
  data?: AccountSecureEntriesWizard | AccountSecureEntriesWizard[] | AccountSecureEntriesWizardPageResult;
  error?: string;
}
