import { AccountReport } from '../entity/account/account.accountreport.entity';

/**
 * AccountReport 实体接口
 * 对应数据库表: account_report
 */
export interface AccountReportInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountReport 的参数接口
 */
export interface CreateAccountReportDTO extends Partial<AccountReportInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountReport 的参数接口
 */
export interface UpdateAccountReportDTO extends Partial<AccountReportInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountReport 的参数接口
 */
export interface QueryAccountReportDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountReportInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountReport 分页查询结果接口
 */
export interface AccountReportPageResult {
  data: AccountReport[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountReport API 响应接口
 */
export interface AccountReportResponse {
  success: boolean;
  message: string;
  data?: AccountReport | AccountReport[] | AccountReportPageResult;
  error?: string;
}
