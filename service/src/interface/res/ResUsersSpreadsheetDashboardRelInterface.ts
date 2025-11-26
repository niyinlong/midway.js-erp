import { ResUsersSpreadsheetDashboardRel } from '../entity/res/res.resusersspreadsheetdashboardrel.entity';

/**
 * ResUsersSpreadsheetDashboardRel 实体接口
 * 对应数据库表: res_users_spreadsheet_dashboard_rel
 */
export interface ResUsersSpreadsheetDashboardRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResUsersSpreadsheetDashboardRel 的参数接口
 */
export interface CreateResUsersSpreadsheetDashboardRelDTO extends Partial<ResUsersSpreadsheetDashboardRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResUsersSpreadsheetDashboardRel 的参数接口
 */
export interface UpdateResUsersSpreadsheetDashboardRelDTO extends Partial<ResUsersSpreadsheetDashboardRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResUsersSpreadsheetDashboardRel 的参数接口
 */
export interface QueryResUsersSpreadsheetDashboardRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResUsersSpreadsheetDashboardRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResUsersSpreadsheetDashboardRel 分页查询结果接口
 */
export interface ResUsersSpreadsheetDashboardRelPageResult {
  data: ResUsersSpreadsheetDashboardRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResUsersSpreadsheetDashboardRel API 响应接口
 */
export interface ResUsersSpreadsheetDashboardRelResponse {
  success: boolean;
  message: string;
  data?: ResUsersSpreadsheetDashboardRel | ResUsersSpreadsheetDashboardRel[] | ResUsersSpreadsheetDashboardRelPageResult;
  error?: string;
}
