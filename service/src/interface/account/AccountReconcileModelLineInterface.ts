import { AccountReconcileModelLine } from '../entity/account/account.accountreconcilemodelline.entity';

/**
 * AccountReconcileModelLine 实体接口
 * 对应数据库表: account_reconcile_model_line
 */
export interface AccountReconcileModelLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountReconcileModelLine 的参数接口
 */
export interface CreateAccountReconcileModelLineDTO extends Partial<AccountReconcileModelLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountReconcileModelLine 的参数接口
 */
export interface UpdateAccountReconcileModelLineDTO extends Partial<AccountReconcileModelLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountReconcileModelLine 的参数接口
 */
export interface QueryAccountReconcileModelLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountReconcileModelLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountReconcileModelLine 分页查询结果接口
 */
export interface AccountReconcileModelLinePageResult {
  data: AccountReconcileModelLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountReconcileModelLine API 响应接口
 */
export interface AccountReconcileModelLineResponse {
  success: boolean;
  message: string;
  data?: AccountReconcileModelLine | AccountReconcileModelLine[] | AccountReconcileModelLinePageResult;
  error?: string;
}
