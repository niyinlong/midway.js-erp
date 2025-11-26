import { AccountMoveLine } from '../entity/account/account.accountmoveline.entity';

/**
 * AccountMoveLine 实体接口
 * 对应数据库表: account_move_line
 */
export interface AccountMoveLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountMoveLine 的参数接口
 */
export interface CreateAccountMoveLineDTO extends Partial<AccountMoveLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountMoveLine 的参数接口
 */
export interface UpdateAccountMoveLineDTO extends Partial<AccountMoveLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountMoveLine 的参数接口
 */
export interface QueryAccountMoveLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountMoveLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountMoveLine 分页查询结果接口
 */
export interface AccountMoveLinePageResult {
  data: AccountMoveLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountMoveLine API 响应接口
 */
export interface AccountMoveLineResponse {
  success: boolean;
  message: string;
  data?: AccountMoveLine | AccountMoveLine[] | AccountMoveLinePageResult;
  error?: string;
}
