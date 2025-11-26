import { IrActions } from '../entity/ir/ir.iractions.entity';

/**
 * IrActions 实体接口
 * 对应数据库表: ir_actions
 */
export interface IrActionsInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrActions 的参数接口
 */
export interface CreateIrActionsDTO extends Partial<IrActionsInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrActions 的参数接口
 */
export interface UpdateIrActionsDTO extends Partial<IrActionsInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrActions 的参数接口
 */
export interface QueryIrActionsDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrActionsInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrActions 分页查询结果接口
 */
export interface IrActionsPageResult {
  data: IrActions[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrActions API 响应接口
 */
export interface IrActionsResponse {
  success: boolean;
  message: string;
  data?: IrActions | IrActions[] | IrActionsPageResult;
  error?: string;
}
