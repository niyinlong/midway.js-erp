import { AccountMoveSendBatchWizard } from '../entity/account/account.accountmovesendbatchwizard.entity';

/**
 * AccountMoveSendBatchWizard 实体接口
 * 对应数据库表: account_move_send_batch_wizard
 */
export interface AccountMoveSendBatchWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountMoveSendBatchWizard 的参数接口
 */
export interface CreateAccountMoveSendBatchWizardDTO extends Partial<AccountMoveSendBatchWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountMoveSendBatchWizard 的参数接口
 */
export interface UpdateAccountMoveSendBatchWizardDTO extends Partial<AccountMoveSendBatchWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountMoveSendBatchWizard 的参数接口
 */
export interface QueryAccountMoveSendBatchWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountMoveSendBatchWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountMoveSendBatchWizard 分页查询结果接口
 */
export interface AccountMoveSendBatchWizardPageResult {
  data: AccountMoveSendBatchWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountMoveSendBatchWizard API 响应接口
 */
export interface AccountMoveSendBatchWizardResponse {
  success: boolean;
  message: string;
  data?: AccountMoveSendBatchWizard | AccountMoveSendBatchWizard[] | AccountMoveSendBatchWizardPageResult;
  error?: string;
}
