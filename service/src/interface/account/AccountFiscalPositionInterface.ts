import { AccountFiscalPosition } from '../entity/account/account.accountfiscalposition.entity';

/**
 * AccountFiscalPosition 实体接口
 * 对应数据库表: account_fiscal_position
 */
export interface AccountFiscalPositionInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountFiscalPosition 的参数接口
 */
export interface CreateAccountFiscalPositionDTO extends Partial<AccountFiscalPositionInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountFiscalPosition 的参数接口
 */
export interface UpdateAccountFiscalPositionDTO extends Partial<AccountFiscalPositionInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountFiscalPosition 的参数接口
 */
export interface QueryAccountFiscalPositionDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountFiscalPositionInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountFiscalPosition 分页查询结果接口
 */
export interface AccountFiscalPositionPageResult {
  data: AccountFiscalPosition[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountFiscalPosition API 响应接口
 */
export interface AccountFiscalPositionResponse {
  success: boolean;
  message: string;
  data?: AccountFiscalPosition | AccountFiscalPosition[] | AccountFiscalPositionPageResult;
  error?: string;
}
