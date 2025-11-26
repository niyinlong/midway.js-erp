import { IrUiView } from '../entity/ir/ir.iruiview.entity';

/**
 * IrUiView 实体接口
 * 对应数据库表: ir_ui_view
 */
export interface IrUiViewInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrUiView 的参数接口
 */
export interface CreateIrUiViewDTO extends Partial<IrUiViewInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrUiView 的参数接口
 */
export interface UpdateIrUiViewDTO extends Partial<IrUiViewInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrUiView 的参数接口
 */
export interface QueryIrUiViewDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrUiViewInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrUiView 分页查询结果接口
 */
export interface IrUiViewPageResult {
  data: IrUiView[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrUiView API 响应接口
 */
export interface IrUiViewResponse {
  success: boolean;
  message: string;
  data?: IrUiView | IrUiView[] | IrUiViewPageResult;
  error?: string;
}
