import { AccountMoveReversal } from '../entity/account/account.accountmovereversal.entity';

/**
 * AccountMoveReversal 实体接口
 * 对应数据库表: account_move_reversal
 */
export interface AccountMoveReversalInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountMoveReversal 的参数接口
 */
export interface CreateAccountMoveReversalDTO extends Partial<AccountMoveReversalInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountMoveReversal 的参数接口
 */
export interface UpdateAccountMoveReversalDTO extends Partial<AccountMoveReversalInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountMoveReversal 的参数接口
 */
export interface QueryAccountMoveReversalDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountMoveReversalInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountMoveReversal 分页查询结果接口
 */
export interface AccountMoveReversalPageResult {
  data: AccountMoveReversal[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountMoveReversal API 响应接口
 */
export interface AccountMoveReversalResponse {
  success: boolean;
  message: string;
  data?: AccountMoveReversal | AccountMoveReversal[] | AccountMoveReversalPageResult;
  error?: string;
}
