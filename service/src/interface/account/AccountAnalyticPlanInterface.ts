import { AccountAnalyticPlan } from '../entity/account/account.accountanalyticplan.entity';

/**
 * AccountAnalyticPlan 实体接口
 * 对应数据库表: account_analytic_plan
 */
export interface AccountAnalyticPlanInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountAnalyticPlan 的参数接口
 */
export interface CreateAccountAnalyticPlanDTO extends Partial<AccountAnalyticPlanInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountAnalyticPlan 的参数接口
 */
export interface UpdateAccountAnalyticPlanDTO extends Partial<AccountAnalyticPlanInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountAnalyticPlan 的参数接口
 */
export interface QueryAccountAnalyticPlanDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountAnalyticPlanInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountAnalyticPlan 分页查询结果接口
 */
export interface AccountAnalyticPlanPageResult {
  data: AccountAnalyticPlan[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountAnalyticPlan API 响应接口
 */
export interface AccountAnalyticPlanResponse {
  success: boolean;
  message: string;
  data?: AccountAnalyticPlan | AccountAnalyticPlan[] | AccountAnalyticPlanPageResult;
  error?: string;
}
