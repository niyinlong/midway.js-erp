import { AccountAnalyticApplicability } from '../entity/account/account.accountanalyticapplicability.entity';

/**
 * AccountAnalyticApplicability 实体接口
 * 对应数据库表: account_analytic_applicability
 */
export interface AccountAnalyticApplicabilityInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountAnalyticApplicability 的参数接口
 */
export interface CreateAccountAnalyticApplicabilityDTO extends Partial<AccountAnalyticApplicabilityInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountAnalyticApplicability 的参数接口
 */
export interface UpdateAccountAnalyticApplicabilityDTO extends Partial<AccountAnalyticApplicabilityInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountAnalyticApplicability 的参数接口
 */
export interface QueryAccountAnalyticApplicabilityDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountAnalyticApplicabilityInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountAnalyticApplicability 分页查询结果接口
 */
export interface AccountAnalyticApplicabilityPageResult {
  data: AccountAnalyticApplicability[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountAnalyticApplicability API 响应接口
 */
export interface AccountAnalyticApplicabilityResponse {
  success: boolean;
  message: string;
  data?: AccountAnalyticApplicability | AccountAnalyticApplicability[] | AccountAnalyticApplicabilityPageResult;
  error?: string;
}
