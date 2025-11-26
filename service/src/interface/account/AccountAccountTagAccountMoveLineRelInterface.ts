import { AccountAccountTagAccountMoveLineRel } from '../entity/account/account.accountaccounttagaccountmovelinerel.entity';

/**
 * AccountAccountTagAccountMoveLineRel 实体接口
 * 对应数据库表: account_account_tag_account_move_line_rel
 */
export interface AccountAccountTagAccountMoveLineRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountAccountTagAccountMoveLineRel 的参数接口
 */
export interface CreateAccountAccountTagAccountMoveLineRelDTO extends Partial<AccountAccountTagAccountMoveLineRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountAccountTagAccountMoveLineRel 的参数接口
 */
export interface UpdateAccountAccountTagAccountMoveLineRelDTO extends Partial<AccountAccountTagAccountMoveLineRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountAccountTagAccountMoveLineRel 的参数接口
 */
export interface QueryAccountAccountTagAccountMoveLineRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountAccountTagAccountMoveLineRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountAccountTagAccountMoveLineRel 分页查询结果接口
 */
export interface AccountAccountTagAccountMoveLineRelPageResult {
  data: AccountAccountTagAccountMoveLineRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountAccountTagAccountMoveLineRel API 响应接口
 */
export interface AccountAccountTagAccountMoveLineRelResponse {
  success: boolean;
  message: string;
  data?: AccountAccountTagAccountMoveLineRel | AccountAccountTagAccountMoveLineRel[] | AccountAccountTagAccountMoveLineRelPageResult;
  error?: string;
}
