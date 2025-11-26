import { AccountResequenceWizard } from '../entity/account/account.accountresequencewizard.entity';

/**
 * AccountResequenceWizard 实体接口
 * 对应数据库表: account_resequence_wizard
 */
export interface AccountResequenceWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountResequenceWizard 的参数接口
 */
export interface CreateAccountResequenceWizardDTO extends Partial<AccountResequenceWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountResequenceWizard 的参数接口
 */
export interface UpdateAccountResequenceWizardDTO extends Partial<AccountResequenceWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountResequenceWizard 的参数接口
 */
export interface QueryAccountResequenceWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountResequenceWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountResequenceWizard 分页查询结果接口
 */
export interface AccountResequenceWizardPageResult {
  data: AccountResequenceWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountResequenceWizard API 响应接口
 */
export interface AccountResequenceWizardResponse {
  success: boolean;
  message: string;
  data?: AccountResequenceWizard | AccountResequenceWizard[] | AccountResequenceWizardPageResult;
  error?: string;
}
