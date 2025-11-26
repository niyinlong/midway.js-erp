import { AccountReportExternalValue } from '../entity/account/account.accountreportexternalvalue.entity';

/**
 * AccountReportExternalValue 实体接口
 * 对应数据库表: account_report_external_value
 */
export interface AccountReportExternalValueInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountReportExternalValue 的参数接口
 */
export interface CreateAccountReportExternalValueDTO extends Partial<AccountReportExternalValueInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountReportExternalValue 的参数接口
 */
export interface UpdateAccountReportExternalValueDTO extends Partial<AccountReportExternalValueInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountReportExternalValue 的参数接口
 */
export interface QueryAccountReportExternalValueDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountReportExternalValueInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountReportExternalValue 分页查询结果接口
 */
export interface AccountReportExternalValuePageResult {
  data: AccountReportExternalValue[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountReportExternalValue API 响应接口
 */
export interface AccountReportExternalValueResponse {
  success: boolean;
  message: string;
  data?: AccountReportExternalValue | AccountReportExternalValue[] | AccountReportExternalValuePageResult;
  error?: string;
}
