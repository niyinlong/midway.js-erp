import { AccountAccruedOrdersWizard } from '../entity/account/account.accountaccruedorderswizard.entity';

/**
 * AccountAccruedOrdersWizard 实体接口
 * 对应数据库表: account_accrued_orders_wizard
 */
export interface AccountAccruedOrdersWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountAccruedOrdersWizard 的参数接口
 */
export interface CreateAccountAccruedOrdersWizardDTO extends Partial<AccountAccruedOrdersWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountAccruedOrdersWizard 的参数接口
 */
export interface UpdateAccountAccruedOrdersWizardDTO extends Partial<AccountAccruedOrdersWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountAccruedOrdersWizard 的参数接口
 */
export interface QueryAccountAccruedOrdersWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountAccruedOrdersWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountAccruedOrdersWizard 分页查询结果接口
 */
export interface AccountAccruedOrdersWizardPageResult {
  data: AccountAccruedOrdersWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountAccruedOrdersWizard API 响应接口
 */
export interface AccountAccruedOrdersWizardResponse {
  success: boolean;
  message: string;
  data?: AccountAccruedOrdersWizard | AccountAccruedOrdersWizard[] | AccountAccruedOrdersWizardPageResult;
  error?: string;
}
