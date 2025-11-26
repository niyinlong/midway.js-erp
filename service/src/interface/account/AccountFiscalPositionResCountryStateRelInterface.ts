import { AccountFiscalPositionResCountryStateRel } from '../entity/account/account.accountfiscalpositionrescountrystaterel.entity';

/**
 * AccountFiscalPositionResCountryStateRel 实体接口
 * 对应数据库表: account_fiscal_position_res_country_state_rel
 */
export interface AccountFiscalPositionResCountryStateRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountFiscalPositionResCountryStateRel 的参数接口
 */
export interface CreateAccountFiscalPositionResCountryStateRelDTO extends Partial<AccountFiscalPositionResCountryStateRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountFiscalPositionResCountryStateRel 的参数接口
 */
export interface UpdateAccountFiscalPositionResCountryStateRelDTO extends Partial<AccountFiscalPositionResCountryStateRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountFiscalPositionResCountryStateRel 的参数接口
 */
export interface QueryAccountFiscalPositionResCountryStateRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountFiscalPositionResCountryStateRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountFiscalPositionResCountryStateRel 分页查询结果接口
 */
export interface AccountFiscalPositionResCountryStateRelPageResult {
  data: AccountFiscalPositionResCountryStateRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountFiscalPositionResCountryStateRel API 响应接口
 */
export interface AccountFiscalPositionResCountryStateRelResponse {
  success: boolean;
  message: string;
  data?: AccountFiscalPositionResCountryStateRel | AccountFiscalPositionResCountryStateRel[] | AccountFiscalPositionResCountryStateRelPageResult;
  error?: string;
}
