import { AccountReportColumn } from '../entity/account/account.accountreportcolumn.entity';

/**
 * AccountReportColumn 实体接口
 * 对应数据库表: account_report_column
 */
export interface AccountReportColumnInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountReportColumn 的参数接口
 */
export interface CreateAccountReportColumnDTO extends Partial<AccountReportColumnInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountReportColumn 的参数接口
 */
export interface UpdateAccountReportColumnDTO extends Partial<AccountReportColumnInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountReportColumn 的参数接口
 */
export interface QueryAccountReportColumnDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountReportColumnInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountReportColumn 分页查询结果接口
 */
export interface AccountReportColumnPageResult {
  data: AccountReportColumn[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountReportColumn API 响应接口
 */
export interface AccountReportColumnResponse {
  success: boolean;
  message: string;
  data?: AccountReportColumn | AccountReportColumn[] | AccountReportColumnPageResult;
  error?: string;
}
