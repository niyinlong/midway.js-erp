import { IrModelSpreadsheetDashboardRel } from '../entity/ir/ir.irmodelspreadsheetdashboardrel.entity';

/**
 * IrModelSpreadsheetDashboardRel 实体接口
 * 对应数据库表: ir_model_spreadsheet_dashboard_rel
 */
export interface IrModelSpreadsheetDashboardRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrModelSpreadsheetDashboardRel 的参数接口
 */
export interface CreateIrModelSpreadsheetDashboardRelDTO extends Partial<IrModelSpreadsheetDashboardRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrModelSpreadsheetDashboardRel 的参数接口
 */
export interface UpdateIrModelSpreadsheetDashboardRelDTO extends Partial<IrModelSpreadsheetDashboardRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrModelSpreadsheetDashboardRel 的参数接口
 */
export interface QueryIrModelSpreadsheetDashboardRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrModelSpreadsheetDashboardRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrModelSpreadsheetDashboardRel 分页查询结果接口
 */
export interface IrModelSpreadsheetDashboardRelPageResult {
  data: IrModelSpreadsheetDashboardRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrModelSpreadsheetDashboardRel API 响应接口
 */
export interface IrModelSpreadsheetDashboardRelResponse {
  success: boolean;
  message: string;
  data?: IrModelSpreadsheetDashboardRel | IrModelSpreadsheetDashboardRel[] | IrModelSpreadsheetDashboardRelPageResult;
  error?: string;
}
