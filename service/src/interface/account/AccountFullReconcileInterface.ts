import { AccountFullReconcile } from '../entity/account/account.accountfullreconcile.entity';

/**
 * AccountFullReconcile 实体接口
 * 对应数据库表: account_full_reconcile
 */
export interface AccountFullReconcileInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountFullReconcile 的参数接口
 */
export interface CreateAccountFullReconcileDTO extends Partial<AccountFullReconcileInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountFullReconcile 的参数接口
 */
export interface UpdateAccountFullReconcileDTO extends Partial<AccountFullReconcileInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountFullReconcile 的参数接口
 */
export interface QueryAccountFullReconcileDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountFullReconcileInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountFullReconcile 分页查询结果接口
 */
export interface AccountFullReconcilePageResult {
  data: AccountFullReconcile[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountFullReconcile API 响应接口
 */
export interface AccountFullReconcileResponse {
  success: boolean;
  message: string;
  data?: AccountFullReconcile | AccountFullReconcile[] | AccountFullReconcilePageResult;
  error?: string;
}
