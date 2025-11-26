import { AccountFiscalPositionAccountTaxRel } from '../entity/account/account.accountfiscalpositionaccounttaxrel.entity';

/**
 * AccountFiscalPositionAccountTaxRel 实体接口
 * 对应数据库表: account_fiscal_position_account_tax_rel
 */
export interface AccountFiscalPositionAccountTaxRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountFiscalPositionAccountTaxRel 的参数接口
 */
export interface CreateAccountFiscalPositionAccountTaxRelDTO extends Partial<AccountFiscalPositionAccountTaxRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountFiscalPositionAccountTaxRel 的参数接口
 */
export interface UpdateAccountFiscalPositionAccountTaxRelDTO extends Partial<AccountFiscalPositionAccountTaxRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountFiscalPositionAccountTaxRel 的参数接口
 */
export interface QueryAccountFiscalPositionAccountTaxRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountFiscalPositionAccountTaxRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountFiscalPositionAccountTaxRel 分页查询结果接口
 */
export interface AccountFiscalPositionAccountTaxRelPageResult {
  data: AccountFiscalPositionAccountTaxRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountFiscalPositionAccountTaxRel API 响应接口
 */
export interface AccountFiscalPositionAccountTaxRelResponse {
  success: boolean;
  message: string;
  data?: AccountFiscalPositionAccountTaxRel | AccountFiscalPositionAccountTaxRel[] | AccountFiscalPositionAccountTaxRelPageResult;
  error?: string;
}
