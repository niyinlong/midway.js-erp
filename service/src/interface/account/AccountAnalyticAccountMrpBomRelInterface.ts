import { AccountAnalyticAccountMrpBomRel } from '../entity/account/account.accountanalyticaccountmrpbomrel.entity';

/**
 * AccountAnalyticAccountMrpBomRel 实体接口
 * 对应数据库表: account_analytic_account_mrp_bom_rel
 */
export interface AccountAnalyticAccountMrpBomRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountAnalyticAccountMrpBomRel 的参数接口
 */
export interface CreateAccountAnalyticAccountMrpBomRelDTO extends Partial<AccountAnalyticAccountMrpBomRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountAnalyticAccountMrpBomRel 的参数接口
 */
export interface UpdateAccountAnalyticAccountMrpBomRelDTO extends Partial<AccountAnalyticAccountMrpBomRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountAnalyticAccountMrpBomRel 的参数接口
 */
export interface QueryAccountAnalyticAccountMrpBomRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountAnalyticAccountMrpBomRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountAnalyticAccountMrpBomRel 分页查询结果接口
 */
export interface AccountAnalyticAccountMrpBomRelPageResult {
  data: AccountAnalyticAccountMrpBomRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountAnalyticAccountMrpBomRel API 响应接口
 */
export interface AccountAnalyticAccountMrpBomRelResponse {
  success: boolean;
  message: string;
  data?: AccountAnalyticAccountMrpBomRel | AccountAnalyticAccountMrpBomRel[] | AccountAnalyticAccountMrpBomRelPageResult;
  error?: string;
}
