import { AccountMoveAccountMoveSendBatchWizardRel } from '../entity/account/account.accountmoveaccountmovesendbatchwizardrel.entity';

/**
 * AccountMoveAccountMoveSendBatchWizardRel 实体接口
 * 对应数据库表: account_move_account_move_send_batch_wizard_rel
 */
export interface AccountMoveAccountMoveSendBatchWizardRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountMoveAccountMoveSendBatchWizardRel 的参数接口
 */
export interface CreateAccountMoveAccountMoveSendBatchWizardRelDTO extends Partial<AccountMoveAccountMoveSendBatchWizardRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountMoveAccountMoveSendBatchWizardRel 的参数接口
 */
export interface UpdateAccountMoveAccountMoveSendBatchWizardRelDTO extends Partial<AccountMoveAccountMoveSendBatchWizardRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountMoveAccountMoveSendBatchWizardRel 的参数接口
 */
export interface QueryAccountMoveAccountMoveSendBatchWizardRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountMoveAccountMoveSendBatchWizardRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountMoveAccountMoveSendBatchWizardRel 分页查询结果接口
 */
export interface AccountMoveAccountMoveSendBatchWizardRelPageResult {
  data: AccountMoveAccountMoveSendBatchWizardRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountMoveAccountMoveSendBatchWizardRel API 响应接口
 */
export interface AccountMoveAccountMoveSendBatchWizardRelResponse {
  success: boolean;
  message: string;
  data?: AccountMoveAccountMoveSendBatchWizardRel | AccountMoveAccountMoveSendBatchWizardRel[] | AccountMoveAccountMoveSendBatchWizardRelPageResult;
  error?: string;
}
