import { SpreadsheetDashboard } from '../entity/spreadsheet/spreadsheet.spreadsheetdashboard.entity';

/**
 * SpreadsheetDashboard 实体接口
 * 对应数据库表: spreadsheet_dashboard
 */
export interface SpreadsheetDashboardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SpreadsheetDashboard 的参数接口
 */
export interface CreateSpreadsheetDashboardDTO extends Partial<SpreadsheetDashboardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SpreadsheetDashboard 的参数接口
 */
export interface UpdateSpreadsheetDashboardDTO extends Partial<SpreadsheetDashboardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SpreadsheetDashboard 的参数接口
 */
export interface QuerySpreadsheetDashboardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SpreadsheetDashboardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SpreadsheetDashboard 分页查询结果接口
 */
export interface SpreadsheetDashboardPageResult {
  data: SpreadsheetDashboard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SpreadsheetDashboard API 响应接口
 */
export interface SpreadsheetDashboardResponse {
  success: boolean;
  message: string;
  data?: SpreadsheetDashboard | SpreadsheetDashboard[] | SpreadsheetDashboardPageResult;
  error?: string;
}
