import { AccountReportSectionRel } from '../entity/account/account.accountreportsectionrel.entity';

/**
 * AccountReportSectionRel 实体接口
 * 对应数据库表: account_report_section_rel
 */
export interface AccountReportSectionRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountReportSectionRel 的参数接口
 */
export interface CreateAccountReportSectionRelDTO extends Partial<AccountReportSectionRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountReportSectionRel 的参数接口
 */
export interface UpdateAccountReportSectionRelDTO extends Partial<AccountReportSectionRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountReportSectionRel 的参数接口
 */
export interface QueryAccountReportSectionRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountReportSectionRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountReportSectionRel 分页查询结果接口
 */
export interface AccountReportSectionRelPageResult {
  data: AccountReportSectionRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountReportSectionRel API 响应接口
 */
export interface AccountReportSectionRelResponse {
  success: boolean;
  message: string;
  data?: AccountReportSectionRel | AccountReportSectionRel[] | AccountReportSectionRelPageResult;
  error?: string;
}
