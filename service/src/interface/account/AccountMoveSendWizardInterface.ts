import { AccountMoveSendWizard } from '../entity/account/account.accountmovesendwizard.entity';

/**
 * AccountMoveSendWizard 实体接口
 * 对应数据库表: account_move_send_wizard
 */
export interface AccountMoveSendWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountMoveSendWizard 的参数接口
 */
export interface CreateAccountMoveSendWizardDTO extends Partial<AccountMoveSendWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountMoveSendWizard 的参数接口
 */
export interface UpdateAccountMoveSendWizardDTO extends Partial<AccountMoveSendWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountMoveSendWizard 的参数接口
 */
export interface QueryAccountMoveSendWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountMoveSendWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountMoveSendWizard 分页查询结果接口
 */
export interface AccountMoveSendWizardPageResult {
  data: AccountMoveSendWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountMoveSendWizard API 响应接口
 */
export interface AccountMoveSendWizardResponse {
  success: boolean;
  message: string;
  data?: AccountMoveSendWizard | AccountMoveSendWizard[] | AccountMoveSendWizardPageResult;
  error?: string;
}
