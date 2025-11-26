import { AccountReconcileModel } from '../entity/account/account.accountreconcilemodel.entity';

/**
 * AccountReconcileModel 实体接口
 * 对应数据库表: account_reconcile_model
 */
export interface AccountReconcileModelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountReconcileModel 的参数接口
 */
export interface CreateAccountReconcileModelDTO extends Partial<AccountReconcileModelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountReconcileModel 的参数接口
 */
export interface UpdateAccountReconcileModelDTO extends Partial<AccountReconcileModelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountReconcileModel 的参数接口
 */
export interface QueryAccountReconcileModelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountReconcileModelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountReconcileModel 分页查询结果接口
 */
export interface AccountReconcileModelPageResult {
  data: AccountReconcileModel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountReconcileModel API 响应接口
 */
export interface AccountReconcileModelResponse {
  success: boolean;
  message: string;
  data?: AccountReconcileModel | AccountReconcileModel[] | AccountReconcileModelPageResult;
  error?: string;
}
