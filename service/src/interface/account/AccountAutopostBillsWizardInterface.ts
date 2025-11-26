import { AccountAutopostBillsWizard } from '../entity/account/account.accountautopostbillswizard.entity';

/**
 * AccountAutopostBillsWizard 实体接口
 * 对应数据库表: account_autopost_bills_wizard
 */
export interface AccountAutopostBillsWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountAutopostBillsWizard 的参数接口
 */
export interface CreateAccountAutopostBillsWizardDTO extends Partial<AccountAutopostBillsWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountAutopostBillsWizard 的参数接口
 */
export interface UpdateAccountAutopostBillsWizardDTO extends Partial<AccountAutopostBillsWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountAutopostBillsWizard 的参数接口
 */
export interface QueryAccountAutopostBillsWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountAutopostBillsWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountAutopostBillsWizard 分页查询结果接口
 */
export interface AccountAutopostBillsWizardPageResult {
  data: AccountAutopostBillsWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountAutopostBillsWizard API 响应接口
 */
export interface AccountAutopostBillsWizardResponse {
  success: boolean;
  message: string;
  data?: AccountAutopostBillsWizard | AccountAutopostBillsWizard[] | AccountAutopostBillsWizardPageResult;
  error?: string;
}
