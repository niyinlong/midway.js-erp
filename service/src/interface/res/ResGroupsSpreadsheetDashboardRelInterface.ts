import { ResGroupsSpreadsheetDashboardRel } from '../entity/res/res.resgroupsspreadsheetdashboardrel.entity';

/**
 * ResGroupsSpreadsheetDashboardRel 实体接口
 * 对应数据库表: res_groups_spreadsheet_dashboard_rel
 */
export interface ResGroupsSpreadsheetDashboardRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResGroupsSpreadsheetDashboardRel 的参数接口
 */
export interface CreateResGroupsSpreadsheetDashboardRelDTO extends Partial<ResGroupsSpreadsheetDashboardRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResGroupsSpreadsheetDashboardRel 的参数接口
 */
export interface UpdateResGroupsSpreadsheetDashboardRelDTO extends Partial<ResGroupsSpreadsheetDashboardRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResGroupsSpreadsheetDashboardRel 的参数接口
 */
export interface QueryResGroupsSpreadsheetDashboardRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResGroupsSpreadsheetDashboardRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResGroupsSpreadsheetDashboardRel 分页查询结果接口
 */
export interface ResGroupsSpreadsheetDashboardRelPageResult {
  data: ResGroupsSpreadsheetDashboardRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResGroupsSpreadsheetDashboardRel API 响应接口
 */
export interface ResGroupsSpreadsheetDashboardRelResponse {
  success: boolean;
  message: string;
  data?: ResGroupsSpreadsheetDashboardRel | ResGroupsSpreadsheetDashboardRel[] | ResGroupsSpreadsheetDashboardRelPageResult;
  error?: string;
}
