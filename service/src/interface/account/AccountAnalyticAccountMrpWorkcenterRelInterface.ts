import { AccountAnalyticAccountMrpWorkcenterRel } from '../entity/account/account.accountanalyticaccountmrpworkcenterrel.entity';

/**
 * AccountAnalyticAccountMrpWorkcenterRel 实体接口
 * 对应数据库表: account_analytic_account_mrp_workcenter_rel
 */
export interface AccountAnalyticAccountMrpWorkcenterRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountAnalyticAccountMrpWorkcenterRel 的参数接口
 */
export interface CreateAccountAnalyticAccountMrpWorkcenterRelDTO extends Partial<AccountAnalyticAccountMrpWorkcenterRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountAnalyticAccountMrpWorkcenterRel 的参数接口
 */
export interface UpdateAccountAnalyticAccountMrpWorkcenterRelDTO extends Partial<AccountAnalyticAccountMrpWorkcenterRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountAnalyticAccountMrpWorkcenterRel 的参数接口
 */
export interface QueryAccountAnalyticAccountMrpWorkcenterRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountAnalyticAccountMrpWorkcenterRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountAnalyticAccountMrpWorkcenterRel 分页查询结果接口
 */
export interface AccountAnalyticAccountMrpWorkcenterRelPageResult {
  data: AccountAnalyticAccountMrpWorkcenterRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountAnalyticAccountMrpWorkcenterRel API 响应接口
 */
export interface AccountAnalyticAccountMrpWorkcenterRelResponse {
  success: boolean;
  message: string;
  data?: AccountAnalyticAccountMrpWorkcenterRel | AccountAnalyticAccountMrpWorkcenterRel[] | AccountAnalyticAccountMrpWorkcenterRelPageResult;
  error?: string;
}
