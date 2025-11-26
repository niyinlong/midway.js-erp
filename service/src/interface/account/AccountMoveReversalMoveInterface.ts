import { AccountMoveReversalMove } from '../entity/account/account.accountmovereversalmove.entity';

/**
 * AccountMoveReversalMove 实体接口
 * 对应数据库表: account_move_reversal_move
 */
export interface AccountMoveReversalMoveInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountMoveReversalMove 的参数接口
 */
export interface CreateAccountMoveReversalMoveDTO extends Partial<AccountMoveReversalMoveInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountMoveReversalMove 的参数接口
 */
export interface UpdateAccountMoveReversalMoveDTO extends Partial<AccountMoveReversalMoveInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountMoveReversalMove 的参数接口
 */
export interface QueryAccountMoveReversalMoveDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountMoveReversalMoveInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountMoveReversalMove 分页查询结果接口
 */
export interface AccountMoveReversalMovePageResult {
  data: AccountMoveReversalMove[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountMoveReversalMove API 响应接口
 */
export interface AccountMoveReversalMoveResponse {
  success: boolean;
  message: string;
  data?: AccountMoveReversalMove | AccountMoveReversalMove[] | AccountMoveReversalMovePageResult;
  error?: string;
}
