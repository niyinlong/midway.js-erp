import { SpreadsheetDashboardShare } from '../entity/spreadsheet/spreadsheet.spreadsheetdashboardshare.entity';

/**
 * SpreadsheetDashboardShare 实体接口
 * 对应数据库表: spreadsheet_dashboard_share
 */
export interface SpreadsheetDashboardShareInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SpreadsheetDashboardShare 的参数接口
 */
export interface CreateSpreadsheetDashboardShareDTO extends Partial<SpreadsheetDashboardShareInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SpreadsheetDashboardShare 的参数接口
 */
export interface UpdateSpreadsheetDashboardShareDTO extends Partial<SpreadsheetDashboardShareInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SpreadsheetDashboardShare 的参数接口
 */
export interface QuerySpreadsheetDashboardShareDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SpreadsheetDashboardShareInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SpreadsheetDashboardShare 分页查询结果接口
 */
export interface SpreadsheetDashboardSharePageResult {
  data: SpreadsheetDashboardShare[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SpreadsheetDashboardShare API 响应接口
 */
export interface SpreadsheetDashboardShareResponse {
  success: boolean;
  message: string;
  data?: SpreadsheetDashboardShare | SpreadsheetDashboardShare[] | SpreadsheetDashboardSharePageResult;
  error?: string;
}
