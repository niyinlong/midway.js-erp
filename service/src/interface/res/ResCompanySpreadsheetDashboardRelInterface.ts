import { ResCompanySpreadsheetDashboardRel } from '../entity/res/res.rescompanyspreadsheetdashboardrel.entity';

/**
 * ResCompanySpreadsheetDashboardRel 实体接口
 * 对应数据库表: res_company_spreadsheet_dashboard_rel
 */
export interface ResCompanySpreadsheetDashboardRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResCompanySpreadsheetDashboardRel 的参数接口
 */
export interface CreateResCompanySpreadsheetDashboardRelDTO extends Partial<ResCompanySpreadsheetDashboardRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResCompanySpreadsheetDashboardRel 的参数接口
 */
export interface UpdateResCompanySpreadsheetDashboardRelDTO extends Partial<ResCompanySpreadsheetDashboardRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResCompanySpreadsheetDashboardRel 的参数接口
 */
export interface QueryResCompanySpreadsheetDashboardRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResCompanySpreadsheetDashboardRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResCompanySpreadsheetDashboardRel 分页查询结果接口
 */
export interface ResCompanySpreadsheetDashboardRelPageResult {
  data: ResCompanySpreadsheetDashboardRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResCompanySpreadsheetDashboardRel API 响应接口
 */
export interface ResCompanySpreadsheetDashboardRelResponse {
  success: boolean;
  message: string;
  data?: ResCompanySpreadsheetDashboardRel | ResCompanySpreadsheetDashboardRel[] | ResCompanySpreadsheetDashboardRelPageResult;
  error?: string;
}
