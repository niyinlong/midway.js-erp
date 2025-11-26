import { AccountMoveLineAccountTaxRel } from '../entity/account/account.accountmovelineaccounttaxrel.entity';

/**
 * AccountMoveLineAccountTaxRel 实体接口
 * 对应数据库表: account_move_line_account_tax_rel
 */
export interface AccountMoveLineAccountTaxRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountMoveLineAccountTaxRel 的参数接口
 */
export interface CreateAccountMoveLineAccountTaxRelDTO extends Partial<AccountMoveLineAccountTaxRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountMoveLineAccountTaxRel 的参数接口
 */
export interface UpdateAccountMoveLineAccountTaxRelDTO extends Partial<AccountMoveLineAccountTaxRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountMoveLineAccountTaxRel 的参数接口
 */
export interface QueryAccountMoveLineAccountTaxRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountMoveLineAccountTaxRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountMoveLineAccountTaxRel 分页查询结果接口
 */
export interface AccountMoveLineAccountTaxRelPageResult {
  data: AccountMoveLineAccountTaxRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountMoveLineAccountTaxRel API 响应接口
 */
export interface AccountMoveLineAccountTaxRelResponse {
  success: boolean;
  message: string;
  data?: AccountMoveLineAccountTaxRel | AccountMoveLineAccountTaxRel[] | AccountMoveLineAccountTaxRelPageResult;
  error?: string;
}
