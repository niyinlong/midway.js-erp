import { ValidateAccountMove } from '../entity/validate/validate.validateaccountmove.entity';

/**
 * ValidateAccountMove 实体接口
 * 对应数据库表: validate_account_move
 */
export interface ValidateAccountMoveInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ValidateAccountMove 的参数接口
 */
export interface CreateValidateAccountMoveDTO extends Partial<ValidateAccountMoveInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ValidateAccountMove 的参数接口
 */
export interface UpdateValidateAccountMoveDTO extends Partial<ValidateAccountMoveInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ValidateAccountMove 的参数接口
 */
export interface QueryValidateAccountMoveDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ValidateAccountMoveInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ValidateAccountMove 分页查询结果接口
 */
export interface ValidateAccountMovePageResult {
  data: ValidateAccountMove[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ValidateAccountMove API 响应接口
 */
export interface ValidateAccountMoveResponse {
  success: boolean;
  message: string;
  data?: ValidateAccountMove | ValidateAccountMove[] | ValidateAccountMovePageResult;
  error?: string;
}
