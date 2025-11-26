import { AccountPartialReconcile } from '../entity/account/account.accountpartialreconcile.entity';

/**
 * AccountPartialReconcile 实体接口
 * 对应数据库表: account_partial_reconcile
 */
export interface AccountPartialReconcileInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountPartialReconcile 的参数接口
 */
export interface CreateAccountPartialReconcileDTO extends Partial<AccountPartialReconcileInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountPartialReconcile 的参数接口
 */
export interface UpdateAccountPartialReconcileDTO extends Partial<AccountPartialReconcileInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountPartialReconcile 的参数接口
 */
export interface QueryAccountPartialReconcileDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountPartialReconcileInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountPartialReconcile 分页查询结果接口
 */
export interface AccountPartialReconcilePageResult {
  data: AccountPartialReconcile[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountPartialReconcile API 响应接口
 */
export interface AccountPartialReconcileResponse {
  success: boolean;
  message: string;
  data?: AccountPartialReconcile | AccountPartialReconcile[] | AccountPartialReconcilePageResult;
  error?: string;
}
