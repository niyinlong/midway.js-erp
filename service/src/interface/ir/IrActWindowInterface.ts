import { IrActWindow } from '../entity/ir/ir.iractwindow.entity';

/**
 * IrActWindow 实体接口
 * 对应数据库表: ir_act_window
 */
export interface IrActWindowInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrActWindow 的参数接口
 */
export interface CreateIrActWindowDTO extends Partial<IrActWindowInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrActWindow 的参数接口
 */
export interface UpdateIrActWindowDTO extends Partial<IrActWindowInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrActWindow 的参数接口
 */
export interface QueryIrActWindowDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrActWindowInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrActWindow 分页查询结果接口
 */
export interface IrActWindowPageResult {
  data: IrActWindow[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrActWindow API 响应接口
 */
export interface IrActWindowResponse {
  success: boolean;
  message: string;
  data?: IrActWindow | IrActWindow[] | IrActWindowPageResult;
  error?: string;
}
