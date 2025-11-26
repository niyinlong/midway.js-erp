import { AccountMoveValidateAccountMoveRel } from '../entity/account/account.accountmovevalidateaccountmoverel.entity';

/**
 * AccountMoveValidateAccountMoveRel 实体接口
 * 对应数据库表: account_move_validate_account_move_rel
 */
export interface AccountMoveValidateAccountMoveRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountMoveValidateAccountMoveRel 的参数接口
 */
export interface CreateAccountMoveValidateAccountMoveRelDTO extends Partial<AccountMoveValidateAccountMoveRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountMoveValidateAccountMoveRel 的参数接口
 */
export interface UpdateAccountMoveValidateAccountMoveRelDTO extends Partial<AccountMoveValidateAccountMoveRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountMoveValidateAccountMoveRel 的参数接口
 */
export interface QueryAccountMoveValidateAccountMoveRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountMoveValidateAccountMoveRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountMoveValidateAccountMoveRel 分页查询结果接口
 */
export interface AccountMoveValidateAccountMoveRelPageResult {
  data: AccountMoveValidateAccountMoveRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountMoveValidateAccountMoveRel API 响应接口
 */
export interface AccountMoveValidateAccountMoveRelResponse {
  success: boolean;
  message: string;
  data?: AccountMoveValidateAccountMoveRel | AccountMoveValidateAccountMoveRel[] | AccountMoveValidateAccountMoveRelPageResult;
  error?: string;
}
