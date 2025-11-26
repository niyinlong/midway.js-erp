import { AccountAnalyticAccountMrpProductionRel } from '../entity/account/account.accountanalyticaccountmrpproductionrel.entity';

/**
 * AccountAnalyticAccountMrpProductionRel 实体接口
 * 对应数据库表: account_analytic_account_mrp_production_rel
 */
export interface AccountAnalyticAccountMrpProductionRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountAnalyticAccountMrpProductionRel 的参数接口
 */
export interface CreateAccountAnalyticAccountMrpProductionRelDTO extends Partial<AccountAnalyticAccountMrpProductionRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountAnalyticAccountMrpProductionRel 的参数接口
 */
export interface UpdateAccountAnalyticAccountMrpProductionRelDTO extends Partial<AccountAnalyticAccountMrpProductionRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountAnalyticAccountMrpProductionRel 的参数接口
 */
export interface QueryAccountAnalyticAccountMrpProductionRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountAnalyticAccountMrpProductionRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountAnalyticAccountMrpProductionRel 分页查询结果接口
 */
export interface AccountAnalyticAccountMrpProductionRelPageResult {
  data: AccountAnalyticAccountMrpProductionRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountAnalyticAccountMrpProductionRel API 响应接口
 */
export interface AccountAnalyticAccountMrpProductionRelResponse {
  success: boolean;
  message: string;
  data?: AccountAnalyticAccountMrpProductionRel | AccountAnalyticAccountMrpProductionRel[] | AccountAnalyticAccountMrpProductionRelPageResult;
  error?: string;
}
