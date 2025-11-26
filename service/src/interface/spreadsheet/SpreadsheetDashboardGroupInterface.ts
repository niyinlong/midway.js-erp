import { SpreadsheetDashboardGroup } from '../entity/spreadsheet/spreadsheet.spreadsheetdashboardgroup.entity';

/**
 * SpreadsheetDashboardGroup 实体接口
 * 对应数据库表: spreadsheet_dashboard_group
 */
export interface SpreadsheetDashboardGroupInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SpreadsheetDashboardGroup 的参数接口
 */
export interface CreateSpreadsheetDashboardGroupDTO extends Partial<SpreadsheetDashboardGroupInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SpreadsheetDashboardGroup 的参数接口
 */
export interface UpdateSpreadsheetDashboardGroupDTO extends Partial<SpreadsheetDashboardGroupInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SpreadsheetDashboardGroup 的参数接口
 */
export interface QuerySpreadsheetDashboardGroupDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SpreadsheetDashboardGroupInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SpreadsheetDashboardGroup 分页查询结果接口
 */
export interface SpreadsheetDashboardGroupPageResult {
  data: SpreadsheetDashboardGroup[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SpreadsheetDashboardGroup API 响应接口
 */
export interface SpreadsheetDashboardGroupResponse {
  success: boolean;
  message: string;
  data?: SpreadsheetDashboardGroup | SpreadsheetDashboardGroup[] | SpreadsheetDashboardGroupPageResult;
  error?: string;
}
