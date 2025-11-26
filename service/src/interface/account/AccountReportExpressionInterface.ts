import { AccountReportExpression } from '../entity/account/account.accountreportexpression.entity';

/**
 * AccountReportExpression 实体接口
 * 对应数据库表: account_report_expression
 */
export interface AccountReportExpressionInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountReportExpression 的参数接口
 */
export interface CreateAccountReportExpressionDTO extends Partial<AccountReportExpressionInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountReportExpression 的参数接口
 */
export interface UpdateAccountReportExpressionDTO extends Partial<AccountReportExpressionInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountReportExpression 的参数接口
 */
export interface QueryAccountReportExpressionDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountReportExpressionInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountReportExpression 分页查询结果接口
 */
export interface AccountReportExpressionPageResult {
  data: AccountReportExpression[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountReportExpression API 响应接口
 */
export interface AccountReportExpressionResponse {
  success: boolean;
  message: string;
  data?: AccountReportExpression | AccountReportExpression[] | AccountReportExpressionPageResult;
  error?: string;
}
