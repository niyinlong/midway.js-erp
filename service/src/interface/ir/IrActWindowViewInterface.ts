import { IrActWindowView } from '../entity/ir/ir.iractwindowview.entity';

/**
 * IrActWindowView 实体接口
 * 对应数据库表: ir_act_window_view
 */
export interface IrActWindowViewInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrActWindowView 的参数接口
 */
export interface CreateIrActWindowViewDTO extends Partial<IrActWindowViewInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrActWindowView 的参数接口
 */
export interface UpdateIrActWindowViewDTO extends Partial<IrActWindowViewInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrActWindowView 的参数接口
 */
export interface QueryIrActWindowViewDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrActWindowViewInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrActWindowView 分页查询结果接口
 */
export interface IrActWindowViewPageResult {
  data: IrActWindowView[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrActWindowView API 响应接口
 */
export interface IrActWindowViewResponse {
  success: boolean;
  message: string;
  data?: IrActWindowView | IrActWindowView[] | IrActWindowViewPageResult;
  error?: string;
}
