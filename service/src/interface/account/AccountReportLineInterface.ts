import { AccountReportLine } from '../entity/account/account.accountreportline.entity';

/**
 * AccountReportLine 实体接口
 * 对应数据库表: account_report_line
 */
export interface AccountReportLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountReportLine 的参数接口
 */
export interface CreateAccountReportLineDTO extends Partial<AccountReportLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountReportLine 的参数接口
 */
export interface UpdateAccountReportLineDTO extends Partial<AccountReportLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountReportLine 的参数接口
 */
export interface QueryAccountReportLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountReportLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountReportLine 分页查询结果接口
 */
export interface AccountReportLinePageResult {
  data: AccountReportLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountReportLine API 响应接口
 */
export interface AccountReportLineResponse {
  success: boolean;
  message: string;
  data?: AccountReportLine | AccountReportLine[] | AccountReportLinePageResult;
  error?: string;
}
