import { AccountAnalyticDistributionModel } from '../entity/account/account.accountanalyticdistributionmodel.entity';

/**
 * AccountAnalyticDistributionModel 实体接口
 * 对应数据库表: account_analytic_distribution_model
 */
export interface AccountAnalyticDistributionModelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountAnalyticDistributionModel 的参数接口
 */
export interface CreateAccountAnalyticDistributionModelDTO extends Partial<AccountAnalyticDistributionModelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountAnalyticDistributionModel 的参数接口
 */
export interface UpdateAccountAnalyticDistributionModelDTO extends Partial<AccountAnalyticDistributionModelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountAnalyticDistributionModel 的参数接口
 */
export interface QueryAccountAnalyticDistributionModelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountAnalyticDistributionModelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountAnalyticDistributionModel 分页查询结果接口
 */
export interface AccountAnalyticDistributionModelPageResult {
  data: AccountAnalyticDistributionModel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountAnalyticDistributionModel API 响应接口
 */
export interface AccountAnalyticDistributionModelResponse {
  success: boolean;
  message: string;
  data?: AccountAnalyticDistributionModel | AccountAnalyticDistributionModel[] | AccountAnalyticDistributionModelPageResult;
  error?: string;
}
